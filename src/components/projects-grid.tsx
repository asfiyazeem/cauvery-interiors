import Image from "next/image";

export default function ProjectsGrid() {
  const projects = [
    { id: 1, title: "Cafe Iranica", category: "Commercial", image: "/images/cafe-iranica/cafe-iranica-6.jpg" },
    { id: 2, title: "Residential Interior", category: "Residential", image: "/images/cafe-iranica/cafe-iranica-7.jpg" },
    { id: 3, title: "Custom Woodwork", category: "Craft", image: "/images/cafe-iranica/cafe-iranica-8.jpg" },
  ];

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-widest text-[#8d6b4e]">Selected Projects</p>
        <h2 className="mt-2 text-3xl font-semibold text-[#2f2a22]">Selected Work</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a key={p.id} href="#" className="group relative block overflow-hidden rounded-[1rem]">
            <div className="relative aspect-[4/3]">
              <Image src={p.image} alt={p.title} fill className="object-cover transition-transform group-hover:scale-105" />
            </div>
            <div className="mt-3">
              <p className="text-xs uppercase tracking-widest text-[#8d6b4e]">{p.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-[#2f2a22]">{p.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
