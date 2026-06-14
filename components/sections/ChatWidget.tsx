"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

import Chat from "./Chat";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* The chat popup */}
      <div
        className={`fixed bottom-24 right-4 z-50 transition-all duration-200 sm:right-10 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <div className="h-[70vh] max-h-[600px] w-[calc(100vw-2rem)] max-w-sm sm:w-96">
          <Chat />
        </div>
      </div>

      {/* The floating toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-steel-red text-white shadow-lg transition hover:bg-steel-darkred hover:scale-105 active:scale-95 sm:right-6"
      >
        {open ? <X size={22} strokeWidth={2.5} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
}
