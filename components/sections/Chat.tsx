"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import imgBot from "@/public/images/NGS_Bot.png";
import { Send, Loader2, Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Msg {
  role: "user" | "model";
  text: string;
}

export default function Chat() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const reduce = useReducedMotion();

  async function send() {
    const question = input.trim();
    if (!question || busy) return;

    const next: Msg[] = [...messages, { role: "user", text: question }];
    setMessages([...next, { role: "model", text: "" }]);
    setInput("");
    setBusy(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      if (!res.ok || !res.body) throw new Error(await res.text());

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages([...next, { role: "model", text: acc }]);
      }
    } catch (e) {
      setMessages([
        ...next,
        { role: "model", text: "⚠️ Something went wrong. Please try again." },
      ]);
    } finally {
      setBusy(false);
    }
  }

  // Single source of truth for scrolling — runs after the DOM paints
  useEffect(() => {
    const el = scrollRef.current;
    if (el)
      el.scrollTo({ top: el.scrollHeight, behavior: busy ? "auto" : "smooth" });
  }, [messages, busy]);

  return (
    <motion.div
      layout
      transition={
        reduce
          ? { duration: 0 }
          : { type: "spring", duration: 0.4, bounce: 0.15 }
      }
      className={cn(
        "fixed flex w-full flex-col z-50 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950",
        expanded ? "h-dvh sm:h-full sm:w-2xl right-0" : " inset-2  sm:inset-6",
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-zinc-200 px-5 py-4 dark:border-zinc-800">
        <div className="relative h-9 w-9 overflow-hidden rounded-lg border-2 border-steel-red bg-steel-red">
          <Image
            src={imgBot}
            alt="NGS Bot logo"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            NGS Bot
          </h1>
          <p className="text-xs text-zinc-500">
            Answers grounded in your steel design documents
          </p>
        </div>
        <motion.button
          onClick={() => setExpanded((v) => !v)}
          aria-label={expanded ? "Expand chat" : "Minimize chat"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={expanded ? "max" : "min"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.15 }}
              className="block"
            >
              {expanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 space-y-4 overflow-y-auto px-5 py-4"
      >
        {messages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 text-center text-sm text-zinc-400"
          >
            Ask about connections, member design, steel grades, code clauses…
          </motion.div>
        )}

        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.25, ease: "easeOut" }}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-steel-red text-white"
                    : "bg-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                }`}
              >
                {m.text ||
                  (busy && i === messages.length - 1 ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    ""
                  ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="border-t border-zinc-200 p-4 dark:border-zinc-800">
        <div className="flex gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            rows={2}
            placeholder="e.g. What is the design shear strength of a 3/4″ A325 bolt?"
            className="flex-1 resize-none rounded-xl border border-zinc-300 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-steel-red dark:border-zinc-700 dark:text-zinc-100"
          />
          <motion.button
            onClick={send}
            disabled={busy || !input.trim()}
            whileHover={{ scale: busy || !input.trim() ? 1 : 1.05 }}
            whileTap={{ scale: busy || !input.trim() ? 1 : 0.95 }}
            aria-label="Send message"
            className="flex items-center justify-center rounded-xl bg-steel-red px-5 text-sm font-medium text-white transition hover:bg-steel-darkred disabled:opacity-40"
          >
            {busy ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Send size={18} />
            )}
          </motion.button>
        </div>
        <p className="mt-2 text-center text-[11px] text-zinc-400">
          AI-generated. Verify with a licensed engineer before use in design.
        </p>
      </div>
    </motion.div>
  );
}
