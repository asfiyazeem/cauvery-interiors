export default function AboutBlock() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-[#8d6b4e]">About</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#2f2a22]">WE DON'T JUST
            <br />DECORATE SPACES. WE CREATE THEIR IDENTITY.
          </h2>
          <p className="mt-6 text-lg text-[#675b50]">Cauvery Interiors is a Bangalore-based studio focused on refined residential and commercial interiors. We combine thoughtful design, high-quality materials and precise execution to deliver spaces that feel considered and enduring.</p>
        </div>
        <div className="relative overflow-hidden rounded-[1rem] border border-[#e6d9c8]">
          <div className="aspect-[4/3] relative">
            <img src="/images/cafe-iranica/cafe-iranica-9.jpg" alt="Interior" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
