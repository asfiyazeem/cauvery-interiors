import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

const services = [
  { slug: "modular-kitchens", title: "Modular Kitchens", description: "Tailored culinary spaces with seamless storage and premium materials." },
  { slug: "wardrobes", title: "Wardrobes", description: "Integrated wardrobes designed for expansive storage and visual calm." },
  { slug: "cnc", title: "CNC Jaali & Carving", description: "Architectural screens and bespoke carved detailing with precision CNC work." },
  { slug: "ceilings", title: "False Ceilings & Cladding", description: "Elegant ceiling and wall treatments designed to sculpt ambiance." },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="text-sm uppercase tracking-[0.4em] text-[#d8b56a]">Services</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Interior solutions tailored to your lifestyle.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-400">Explore our signature offerings designed for luxury homes, offices, and premium commercial interiors.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-[1.5rem] border border-white/10 bg-[#0f0f0f] p-8 transition hover:-translate-y-1 hover:border-[#b8944a]/60">
              <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
              <p className="mt-4 text-stone-400">{service.description}</p>
              <span className="mt-6 inline-flex text-sm font-medium text-[#f2d28d]">Discover more →</span>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
