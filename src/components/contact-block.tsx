export default function ContactBlock() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-[#8d6b4e]">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#2f2a22]">Cauvery Interiors</h2>
          <div className="mt-6 text-[#675b50]">
            <p><strong>Location:</strong> Bengaluru, Karnataka</p>
            <p><strong>Phone:</strong> <a href="tel:+919880000000" className="text-[#2f2a22]">+91 98800 00000</a></p>
            <p><strong>Email:</strong> <a href="mailto:hello@cauveryinteriors.com" className="text-[#2f2a22]">hello@cauveryinteriors.com</a></p>
          </div>
        </div>
        <div className="rounded-[1rem] overflow-hidden border border-[#e6d9c8]">
          <div className="aspect-[4/3]">
            <img src="/images/cafe-iranica/cafe-iranica-10.jpg" alt="Contact image" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
