"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export default function BackButton() {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.back()}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className=" pointer-events-auto cursor-pointer inline-flex items-center gap-2 text-sm
       text-gray-600 hover:text-gray-900 border-e-red-500 border-e-2 transition-colors"
    >
      <motion.span
        variants={{
          rest: { x: 0 },
          hover: { x: -4 },
          tap: { x: -1 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <ArrowLeft className="h-10 w-10" />
      </motion.span>
    </motion.button>
  );
}
