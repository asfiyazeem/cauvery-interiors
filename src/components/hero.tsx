"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-widest text-[#8d6b4e]">CAUVERY INTERIORS</p>
            <h1 className="text-4xl font-bold leading-tight text-[#2f2a22] sm:text-6xl">
              FROM VISION
              <br />
              TO REALITY.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[#675b50]">Thoughtfully designed spaces, built with precision. Interior design • Execution • Custom Woodwork</p>
            <div className="mt-8 flex gap-4">
              <a href="#projects" className="rounded-full border border-[#2f2a22] px-6 py-3 text-sm font-semibold text-[#2f2a22]">EXPLORE OUR WORK →</a>
            </div>
          </div>

          <div className="relative rounded-[1.25rem] overflow-hidden border border-[#e6d9c8] bg-[#f8f3ee]">
            <div className="aspect-[4/3] relative h-full w-full">
              <Image src="/images/cafe-iranica/cafe-iranica-2.jpg" alt="Cafe Iranica interior" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
