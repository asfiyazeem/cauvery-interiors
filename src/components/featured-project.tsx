"use client";

import Image from "next/image";

export default function FeaturedProject() {
  const images = [
    "/images/cafe-iranica/cafe-iranica-1.jpg",
    "/images/cafe-iranica/cafe-iranica-3.jpg",
    "/images/cafe-iranica/cafe-iranica-4.jpg",
    "/images/cafe-iranica/cafe-iranica-5.jpg",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-widest text-[#8d6b4e]">Featured Project</p>
        <h2 className="mt-2 text-3xl font-semibold text-[#2f2a22]">CAFE IRANICA — Commercial Interior, Bengaluru</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[1.25rem] border border-[#e6d9c8]">
          <div className="aspect-[4/3] relative">
            <Image src={images[0]} alt="Cafe Iranica hero" fill className="object-cover" />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {images.slice(1).map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-[0.9rem] border border-[#e6d9c8]">
              <div className="aspect-[4/3] relative">
                <Image src={src} alt={`Cafe Iranica ${i + 2}`} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 max-w-3xl text-[#675b50]">
        <p className="leading-relaxed">From an empty space to a distinct identity — our work for Cafe Iranica focuses on materiality, light, and crafted joinery to create an inviting hospitality interior.</p>
      </div>
    </section>
  );
}
