"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
        <Image src="/images/hero-main.svg" alt="Luxury interior design showcase" fill className="object-cover" priority />
      </div>
    </motion.div>
  );
}
