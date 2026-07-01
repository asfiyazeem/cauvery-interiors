import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";

const services = {
  "modular-kitchens": {
    title: "Modular Kitchens",
    hero: "Custom kitchens with intelligent storage, premium finishes, and sculpted detailing.",
    body: "Every kitchen is designed around flow, function, and elevated aesthetics. We combine premium hardware, imported laminates, and precise installation to craft culinary spaces that feel architectural and effortless.",
  },
  wardrobes: {
    title: "Wardrobes",
    hero: "Luxury wardrobes that bring order and elegance to every room.",
    body: "From walk-in dressing rooms to compact bedroom storage, our wardrobes are built to maximize utility while preserving a calm, seamless visual language.",
  },
  cnc: {
    title: "CNC Jaali & Carving",
    hero: "Precision-cut patterns and bespoke carving for striking interiors.",
    body: "Our CNC capabilities allow us to translate creative concepts into intricate screens, panels, and decorative elements that feel contemporary, artistic, and enduring.",
  },
  ceilings: {
    title: "False Ceilings & Cladding",
    hero: "Architectural treatments that add movement, depth, and atmosphere.",
    body: "False ceilings, wall cladding, and decorative paneling help define the character of a room and elevate both luxury residences and commercial projects.",
  },
};

const modularKitchenSlides = [
  "/images/modular-kitchen-1.jpg.jpg",
  "/images/modular-kitchen-2.jpg.jpg",
  "/images/modular-kitchen-3.jpg.jpg",
  "/images/modular-kitchen-4.jpg.jpg",
  "/images/modular-kitchen-5.jpg.jpg",
  "/images/modular-kitchen-6.jpg.jpg",
];

const wardrobeSlides = [
  "/images/wardrobes/wardrobe-1.jpg",
  "/images/wardrobes/wardrobe-2.jpg",
  "/images/wardrobes/wardrobe-3.jpg",
  "/images/wardrobes/wardrobe-4.jpg",
  "/images/wardrobes/wardrobe-5.jpg",
  "/images/wardrobes/wardrobe-6.jpg",
  "/images/wardrobes/wardrobe-7.jpg",
  "/images/wardrobes/wardrobe-8.jpg",
  "/images/wardrobes/wardrobe-9.jpg",
  "/images/wardrobes/wardrobe-10.png",
  "/images/wardrobes/wardrobe-11.jpg",
  "/images/wardrobes/wardrobe-12.jpg",
  "/images/wardrobes/wardrobe-13.jpg",
  "/images/wardrobes/wardrobe-14.jpg",
  "/images/wardrobes/wardrobe-15.jpg",
  "/images/wardrobes/wardrobe-16.jpg",
];

const cncSlides = [
  "/images/cnc%20jali%20carving/cnc%20jali-1.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-10.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-11.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-12.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-13.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-14.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-15.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-16.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-17.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-18.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-19.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-2.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-20.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-21.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-22.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-23.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-24.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-25.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-26.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-3.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-4.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-5.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-6.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-7.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-8.jpg",
  "/images/cnc%20jali%20carving/cnc%20jali-9.jpg",
  "/images/cnc%20jali%20carving/pexels-ron-lach-10628197.jpg",
];

const falseCeilingSlides = [
  "/images/false%20ceiling/ceiling-1.jpg",
  "/images/false%20ceiling/ceiling-2.jpg",
  "/images/false%20ceiling/ceiling-3.jpg",
  "/images/false%20ceiling/ceiling-4.jpg",
  "/images/false%20ceiling/ceiling-5.jpg",
  "/images/false%20ceiling/ceiling-6.jpg",
  "/images/false%20ceiling/ceiling-7.jpg",
  "/images/false%20ceiling/ceiling-8.jpg",
  "/images/false%20ceiling/ceiling-9.jpg",
  "/images/false%20ceiling/ceiling-10.jpg",
  "/images/false%20ceiling/ceiling-11.jpg",
  "/images/false%20ceiling/ceiling-12.jpg",
  "/images/false%20ceiling/ceiling-13.jpg",
  "/images/false%20ceiling/ceiling-14.jpg",
  "/images/false%20ceiling/ceiling-15.jpg",
  "/images/false%20ceiling/ceiling-16.jpg",
  "/images/false%20ceiling/ceiling-17.jpg",
  "/images/false%20ceiling/ceiling-18.jpg",
  "/images/false%20ceiling/ceiling-19.jpg",
];

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = services[slug as keyof typeof services];
  const slides = slug === "modular-kitchens" ? modularKitchenSlides : slug === "wardrobes" ? wardrobeSlides : slug === "cnc" ? cncSlides : slug === "ceilings" ? falseCeilingSlides : [];

  if (!service) {
    notFound();
  }

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <Link href="/services" className="text-sm text-[#d8b56a]">← Back to services</Link>
        <div className="mt-8 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(184,148,74,0.16),rgba(255,255,255,0.03))] p-8 lg:p-12">
          <p className="text-sm uppercase tracking-[0.4em] text-[#d8b56a]">Signature Service</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{service.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">{service.hero}</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-400">{service.body}</p>

          {slides.length > 0 && (
            <div className="mt-10 rounded-[2rem] border border-white/10 bg-black/10 p-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {slides.map((image, index) => (
                  <div key={image} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-2">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
                      <Image src={image} alt={`${service.title} project ${index + 1}`} fill className="object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-[#b8944a] px-6 py-3 text-sm font-semibold text-black">Request a consultation</a>
            <a href="#projects" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-stone-100">See related projects</a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
