export default function Process() {
  const steps = [
    { id: 1, title: "Discover", text: "Understanding the space, requirements and vision." },
    { id: 2, title: "Design", text: "Concept, materials and visual direction." },
    { id: 3, title: "Execute", text: "Turning design into reality with precision." },
    { id: 4, title: "Deliver", text: "Finishing every detail and handing over." },
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
      <p className="text-sm uppercase tracking-widest text-[#8d6b4e]">Our Process</p>
      <h2 className="mt-4 text-3xl font-semibold text-[#2f2a22]">A considered 4-step approach</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.id} className="rounded-xl border border-[#e6d9c8] bg-[#f7f3ef] p-6 text-center">
            <div className="text-2xl font-bold text-[#8d6b4e]">{String(s.id).padStart(2, "0")}</div>
            <h3 className="mt-3 text-lg font-semibold text-[#2f2a22]">{s.title}</h3>
            <p className="mt-2 text-sm text-[#675b50]">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
