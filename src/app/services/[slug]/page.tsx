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

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = services[slug as keyof typeof services];

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
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-[#b8944a] px-6 py-3 text-sm font-semibold text-black">Request a consultation</a>
            <a href="#projects" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-stone-100">See related projects</a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
