export default function Services() {
  const services = [
    "Interior Design",
    "Residential Interiors",
    "Commercial Interiors",
    "Custom Woodwork",
    "Interior Execution",
    "Space Planning",
  ];

  return (
    <section id="services" className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
      <p className="text-sm uppercase tracking-widest text-[#8d6b4e]">Services</p>
      <h2 className="mt-4 text-3xl font-semibold text-[#2f2a22]">What we do</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {services.map((s) => (
          <div key={s} className="rounded-xl border border-[#e6d9c8] bg-[#f7f3ef] p-5 text-[#4f433c]">{s}</div>
        ))}
      </div>
    </section>
  );
}
