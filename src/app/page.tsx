"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site-shell";

const heroSlides = [
  {
    title: "Luxury Modular Kitchens",
    subtitle: "crafted for graceful everyday living",
    description: "Warm timber, sculpted detailing, and seamless storage for homes that feel elevated and effortless.",
    image: "/assets/images/hero-kitchen.svg",
    cta: "Explore Kitchens",
    href: "#projects",
  },
  {
    title: "Statement Wardrobes",
    subtitle: "designed for calm and indulgence",
    description: "Refined wardrobes and walk-in storage that blend softness, symmetry, and premium finish.",
    image: "/assets/images/hero-wardrobe.svg",
    cta: "See Wardrobes",
    href: "#services",
  },
  {
    title: "CNC Workshop Precision",
    subtitle: "where artistry meets engineering",
    description: "Intricate jaali, decorative panels, and custom carved elements made with precision craftsmanship.",
    image: "/assets/images/hero-cnc.svg",
    cta: "Visit Workshop",
    href: "#projects",
  },
];

const stats = [
  { value: "1000+", label: "Completed Projects" },
  { value: "25+", label: "Years Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "100%", label: "Quality Assurance" },
];

const whyChooseUs = [
  "Premium Materials",
  "Expert Designers",
  "Own Manufacturing",
  "Custom Furniture",
  "Affordable Pricing",
  "On-time Delivery",
  "Latest CNC Technology",
  "Professional Installation",
];

const services = [
  { title: "Modular Kitchens", description: "Tailored culinary spaces with premium finishes and intelligent storage.", href: "/services/modular-kitchens", image: "/images/kitchen/modular-kitchen-1.jpg.jpg" },
  { title: "Wardrobes", description: "Seamless wardrobes that combine elegance, utility, and bespoke detailing.", href: "/services/wardrobes", image: "/images/wardrobes/wardrobe-1.jpg" },
  { title: "CNC Jaali & Carving", description: "Sculptural walls, screens, and decorative panels crafted with precision CNC work.", href: "/services/cnc", image: "/images/cnc%20jali%20carving/cnc%20jali-1.jpg" },
  { title: "False Ceilings & Cladding", description: "Architectural treatments that add depth, warmth, and character to interiors.", href: "/services/ceilings", image: "/images/false%20ceiling/ceiling-1.jpg" },
];

const projectCategories = ["All", "Kitchens", "Wardrobes", "CNC", "Interiors"] as const;

const projects = [
  {
    title: "Timber Serenity Kitchen",
    category: "Kitchens",
    image: "/images/TIMBER%20KITCHEN/tim-1.jpg",
    gallery: [
      "/images/TIMBER%20KITCHEN/tim-1.jpg",
      "/images/TIMBER%20KITCHEN/tim-2.jpg",
      "/images/TIMBER%20KITCHEN/tim-3.jpg",
      "/images/TIMBER%20KITCHEN/tim-4.jpg",
      "/images/TIMBER%20KITCHEN/tim-5.jpg",
      "/images/TIMBER%20KITCHEN/tim-6.jpg",
      "/images/TIMBER%20KITCHEN/tim-7.jpg",
      "/images/TIMBER%20KITCHEN/tim-8.jpg",
      "/images/TIMBER%20KITCHEN/tim-9.jpg",
      "/images/TIMBER%20KITCHEN/tim-10.jpg",
      "/images/TIMBER%20KITCHEN/tim-11.jpg",
      "/images/TIMBER%20KITCHEN/tim-12.jpg",
      "/images/TIMBER%20KITCHEN/tim-13.jpg",
      "/images/TIMBER%20KITCHEN/tim-14.jpg",
      "/images/TIMBER%20KITCHEN/tim-15.jpg",
      "/images/TIMBER%20KITCHEN/tim-16.jpg",
      "/images/TIMBER%20KITCHEN/tim-17.jpg",
      "/images/TIMBER%20KITCHEN/tim-18.jpg",
      "/images/TIMBER%20KITCHEN/tim-19.jpg",
    ],
  },
  { title: "Walk-in Wardrobe Suite", category: "Wardrobes", image: "/assets/images/project-wardrobe.svg" },
  { title: "CNC Jaali Feature Wall", category: "CNC", image: "/assets/images/project-cnc.svg" },
  { title: "Banaswadi Residence", category: "Interiors", image: "/assets/images/project-interior.svg" },
];

const testimonials = [
  { quote: "The modular kitchen exceeded our expectations and completely elevated our home.", author: "Rahul", location: "HRBR Layout" },
  { quote: "Outstanding workmanship, premium materials, and timely delivery from start to finish.", author: "Priya", location: "Banaswadi" },
  { quote: "Highly recommended for interiors, custom furniture, and beautiful CNC detailing.", author: "Naveen", location: "Kalyan Nagar" },
  { quote: "The showroom and workshop experience felt truly luxurious and thoughtful.", author: "Ahmed", location: "Kammanahalli" },
];

const faqs = [
  { question: "Do you handle full-home interiors or only select rooms?", answer: "We design complete residential and commercial interiors, including kitchens, wardrobes, living rooms, offices, and custom furniture." },
  { question: "Can you help with material selection and budgeting?", answer: "Yes. We guide you through premium materials, finishes, and practical budget planning to create a balanced concept." },
  { question: "Do you provide installation and aftercare?", answer: "We manage professional installation and support your project through completion with a strong focus on quality." },
];

const galleryImages = [
  { title: "Timber Yard", image: "/assets/images/gallery-timber.svg" },
  { title: "Plywood Gallery", image: "/assets/images/gallery-plywood.svg" },
  { title: "Showroom Experience", image: "/assets/images/gallery-showroom.svg" },
  { title: "Completed Interiors", image: "/assets/images/gallery-interiors.svg" },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState<(typeof projectCategories)[number]>("All");
  const [activeReview, setActiveReview] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formState, setFormState] = useState({ name: "", phone: "", email: "", project: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((prev) => (prev + 1) % heroSlides.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveReview((prev) => (prev + 1) % testimonials.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Interior Inquiry from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nPhone: ${formState.phone}\nEmail: ${formState.email}\nProject: ${formState.project}`);
    window.location.href = `mailto:hello@cauveryinteriors.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <SiteShell>
      <section id="home" className="scroll-mt-28 relative isolate overflow-hidden bg-[linear-gradient(120deg,_#f8f2ea_0%,_#f2e9dc_35%,_#e7dbc8_100%)]">
        <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 max-w-2xl">
            <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#8d6b4e]">Premium interiors • Bangalore</p>
            <h1 className="text-4xl font-semibold leading-tight text-[#2f2a22] sm:text-6xl">
              Designing homes and workspaces with sculptural luxury.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#675b50]">
              Cauvery Interior Studio blends timeless craftsmanship, premium materials, and warm modern design to create interiors that feel effortless and elevated.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/consultation" className="rounded-full bg-[#8d6b4e] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">Book a Consultation</Link>
              <Link href="#projects" className="rounded-full border border-[#8d6b4e]/30 bg-white/80 px-6 py-3 text-sm font-semibold text-[#4d3920] transition hover:border-[#8d6b4e]">View Portfolio</Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#6b5d50]">
              <span className="rounded-full border border-[#cdb59a]/40 bg-[#f7efe4] px-3 py-2">Modular Kitchens</span>
              <span className="rounded-full border border-[#cdb59a]/40 bg-[#f7efe4] px-3 py-2">Wardrobes</span>
              <span className="rounded-full border border-[#cdb59a]/40 bg-[#f7efe4] px-3 py-2">CNC Jaali</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative z-10 overflow-hidden rounded-[2rem] border border-[#cdb59a]/40 bg-white/70 p-3 shadow-[0_30px_90px_rgba(94,73,46,0.15)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Image src={heroSlides[activeSlide].image} alt={heroSlides[activeSlide].title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#231d17]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <p className="text-xs uppercase tracking-[0.4em] text-[#e8d5bb]">{heroSlides[activeSlide].subtitle}</p>
                <h2 className="mt-2 text-3xl font-semibold">{heroSlides[activeSlide].title}</h2>
                <p className="mt-3 max-w-md text-sm leading-7 text-[#f5ebdd]">{heroSlides[activeSlide].description}</p>
                <Link href={heroSlides[activeSlide].href} className="mt-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">{heroSlides[activeSlide].cta}</Link>
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {heroSlides.map((slide, index) => (
                <button key={slide.title} onClick={() => setActiveSlide(index)} className={`h-2 rounded-full transition ${activeSlide === index ? "w-8 bg-[#8d6b4e]" : "w-2 bg-[#cdb59a]/60"}`} aria-label={`Go to slide ${index + 1}`} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#cdb59a]/30 bg-[#f7efe4] py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 text-center sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-[#cdb59a]/30 bg-[#f5efe6] p-6 shadow-sm">
              <p className="text-3xl font-semibold text-[#8d6b4e]">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[#86766a]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#8d6b4e]">Why Choose Us</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#2f2a22] sm:text-4xl">Craftsmanship that elevates everyday living.</h2>
            <p className="mt-5 text-lg leading-8 text-[#675b50]">
              Every detail is shaped with premium materials, refined proportions, and modern craftsmanship so your space feels timeless from day one.
            </p>
            <Link href="/consultation" className="mt-7 inline-flex rounded-full bg-[#2f2a22] px-6 py-3 text-sm font-semibold text-[#f8efe5]">Schedule a Walkthrough</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div key={item} className="rounded-2xl border border-[#cdb59a]/30 bg-[#f7efe4] p-5 text-[#4f433c] shadow-sm transition hover:-translate-y-1">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#8d6b4e]">Signature Services</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#2f2a22]">Luxury solutions made to feel serene and timeless.</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group overflow-hidden rounded-[1.75rem] border border-[#cdb59a]/30 bg-[#f7efe4] shadow-sm transition hover:-translate-y-1">
              <div className="relative aspect-[16/10]">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-7">
                <p className="text-sm uppercase tracking-[0.35em] text-[#8d6b4e]">Interior Solution</p>
                <h3 className="mt-4 text-2xl font-semibold text-[#2f2a22]">{service.title}</h3>
                <p className="mt-3 text-[#675b50]">{service.description}</p>
                <span className="mt-6 inline-flex text-sm font-medium text-[#8d6b4e] transition group-hover:translate-x-1">Explore service →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#8d6b4e]">Featured Projects</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#2f2a22]">A gallery of refined transformations.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <button key={category} onClick={() => setActiveCategory(category)} className={`rounded-full px-4 py-2 text-sm transition ${activeCategory === category ? "bg-[#2f2a22] text-[#f8efe5]" : "bg-[#f7efe4] text-[#6b5d50] border border-[#cdb59a]/30"}`}>
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filteredProjects.map((project) => (
            <motion.div key={project.title} whileHover={{ y: -6, scale: 1.01 }} className="overflow-hidden rounded-[1.5rem] border border-[#cdb59a]/30 bg-[#f7efe4] shadow-sm">
              {project.gallery ? (
                <div className="grid grid-cols-2 gap-1">
                  {project.gallery.map((image, index) => (
                    <div key={`${project.title}-${index}`} className="relative aspect-square">
                      <Image src={image} alt={`${project.title} gallery ${index + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative aspect-[4/5]">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
              )}
              <div className="p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-[#8d6b4e]">{project.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-[#2f2a22]">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[#cdb59a]/30 bg-[#f5efe6] p-8">
            <p className="text-sm uppercase tracking-[0.4em] text-[#8d6b4e]">Showroom & Workshop</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2f2a22]">Experience the craftsmanship in person.</h2>
            <p className="mt-5 text-lg leading-8 text-[#675b50]">Visit our curated showroom and working workshop to experience materials, finishes, and detailing before your project begins.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-full bg-[#2f2a22] px-5 py-3 text-sm font-semibold text-[#f8efe5]">Book a Visit</a>
              <a href="https://wa.me/919880000000" className="rounded-full border border-[#8d6b4e]/40 bg-white px-5 py-3 text-sm font-semibold text-[#4d3920]">WhatsApp Us</a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {galleryImages.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[1.5rem] border border-[#cdb59a]/30 bg-[#f7efe4] shadow-sm">
                <div className="relative aspect-[4/5]">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4 text-sm font-medium text-[#4f433c]">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-[#cdb59a]/30 bg-[linear-gradient(135deg,_#f8f0e6_0%,_#efe2d0_100%)] p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-[#8d6b4e]">Client Reviews</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#2f2a22]">Trusted by discerning clients across Bangalore.</h2>
              <div className="mt-6 flex gap-2 text-[#8d6b4e]">★★★★★</div>
            </div>
            <div className="rounded-[1.5rem] border border-[#cdb59a]/30 bg-white/70 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-[#8d6b4e]">Featured Review</p>
              <p className="mt-4 text-xl leading-8 text-[#4f433c]">“{testimonials[activeReview].quote}”</p>
              <p className="mt-6 font-semibold text-[#2f2a22]">{testimonials[activeReview].author}</p>
              <p className="text-sm text-[#86766a]">{testimonials[activeReview].location}</p>
              <div className="mt-6 flex gap-2">
                {testimonials.map((review, index) => (
                  <button key={review.author} onClick={() => setActiveReview(index)} className={`h-2 rounded-full transition ${activeReview === index ? "w-8 bg-[#8d6b4e]" : "w-2 bg-[#cdb59a]/60"}`} aria-label={`View review ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.4em] text-[#8d6b4e]">FAQ</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#2f2a22]">Everything you need to know before starting.</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="rounded-[1.25rem] border border-[#cdb59a]/30 bg-[#f7efe4] px-5 py-4 shadow-sm">
              <button className="flex w-full items-center justify-between text-left" onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
                <span className="font-medium text-[#2f2a22]">{faq.question}</span>
                <span className="text-xl text-[#8d6b4e]">{activeFaq === index ? "−" : "+"}</span>
              </button>
              {activeFaq === index && <p className="mt-3 text-[#675b50]">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-[#cdb59a]/30 bg-[#f7efe4] p-8 shadow-sm lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#8d6b4e]">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2f2a22]">Let’s create something exceptional together.</h2>
            <p className="mt-5 text-lg leading-8 text-[#675b50]">Visit our showroom in Banaswadi or HBR Layout, or request a consultation for your next interior project.</p>
            <div className="mt-8 space-y-3 text-[#4f433c]">
              <p><span className="font-semibold text-[#2f2a22]">Phone:</span> +91 98800 00000</p>
              <p><span className="font-semibold text-[#2f2a22]">Email:</span> hello@cauveryinteriors.com</p>
              <p><span className="font-semibold text-[#2f2a22]">Hours:</span> Mon–Sat • 10:00 AM – 8:00 PM</p>
            </div>
            <div className="mt-8 overflow-hidden rounded-[1.25rem] border border-[#cdb59a]/30">
              <iframe
                title="Cauvery Interior Studio Location"
                src="https://www.google.com/maps?q=Banaswadi%20Bangalore&output=embed"
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-[#cdb59a]/30 bg-[#f5efe6] p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input value={formState.name} onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))} className="rounded-xl border border-[#cdb59a]/30 bg-white px-4 py-3 text-[#2f2a22] outline-none" placeholder="Name" required />
                <input value={formState.phone} onChange={(event) => setFormState((prev) => ({ ...prev, phone: event.target.value }))} className="rounded-xl border border-[#cdb59a]/30 bg-white px-4 py-3 text-[#2f2a22] outline-none" placeholder="Phone" required />
              </div>
              <input value={formState.email} onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))} className="w-full rounded-xl border border-[#cdb59a]/30 bg-white px-4 py-3 text-[#2f2a22] outline-none" placeholder="Email" required />
              <textarea value={formState.project} onChange={(event) => setFormState((prev) => ({ ...prev, project: event.target.value }))} className="min-h-32 w-full rounded-xl border border-[#cdb59a]/30 bg-white px-4 py-3 text-[#2f2a22] outline-none" placeholder="Tell us about your project" required />
              <button className="rounded-full bg-[#8d6b4e] px-6 py-3 text-sm font-semibold text-white">Send Inquiry</button>
              {submitted && <p className="text-sm text-[#8d6b4e]">Thank you. Your email app will open with your inquiry details.</p>}
            </form>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
