"use client";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <Button variant="default">Click me</Button>
        </motion.div>
      </main>
    </div>
  );
}
