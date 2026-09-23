"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiteShell } from "@/components/site-shell";

const heroSlides = [
  {
    title: "Luxury Modular Kitchens",
    subtitle: "crafted for graceful everyday living",
    description: "Warm timber, sculpted detailing, and seamless storage for homes that feel elevated and effortless.",
    image: "/images/TIMBER KITCHEN/tim-1.jpg",
    cta: "Explore Kitchens",
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
  {
    title: "Modular Kitchens",
    description: "Tailored culinary spaces with premium finishes and intelligent storage.",
    href: "/services/modular-kitchens",
    previewSlides: [
      "/images/kitchen/modular-kitchen-1.jpg.jpg",
      "/images/kitchen/modular-kitchen-2.jpg.jpg",
      "/images/kitchen/modular-kitchen-3.jpg.jpg",
    ],
  },
  {
    title: "Wardrobes",
    description: "Seamless wardrobes that combine elegance, utility, and bespoke detailing.",
    href: "/services/wardrobes",
    previewSlides: [
      "/images/wardrobes/wardrobe-1.jpg",
      "/images/wardrobes/wardrobe-2.jpg",
      "/images/wardrobes/wardrobe-3.jpg",
    ],
  },
  {
    title: "CNC Jaali & Carving",
    description: "Sculptural walls, screens, and decorative panels crafted with precision CNC work.",
    href: "/services/cnc",
    previewSlides: [
      "/images/cnc jali carving/cnc jali-1.jpg",
      "/images/cnc jali carving/cnc jali-2.jpg",
      "/images/cnc jali carving/cnc jali-3.jpg",
    ],
  },
  {
    title: "False Ceilings & Cladding",
    description: "Architectural treatments that add depth, warmth, and character to interiors.",
    href: "/services/ceilings",
    previewSlides: [
      "/images/false ceiling/ceiling-1.jpg",
      "/images/false ceiling/ceiling-2.jpg",
      "/images/false ceiling/ceiling-3.jpg",
    ],
  },
];

const projectCategories = ["All", "Kitchens", "Wardrobes", "CNC", "Interiors"] as const;

const projects = [
  {
    title: "Timber Serenity Kitchen",
    category: "Kitchens",
    image: "/images/TIMBER KITCHEN/tim-1.jpg",
    gallery: [
      "/images/TIMBER KITCHEN/tim-1.jpg",
      "/images/TIMBER KITCHEN/tim-2.jpg",
      "/images/TIMBER KITCHEN/tim-3.jpg",
      "/images/TIMBER KITCHEN/tim-4.jpg",
      "/images/TIMBER KITCHEN/tim-5.jpg",
      "/images/TIMBER KITCHEN/tim-6.jpg",
      "/images/TIMBER KITCHEN/tim-7.jpg",
      "/images/TIMBER KITCHEN/tim-8.jpg",
      "/images/TIMBER KITCHEN/tim-9.jpg",
      "/images/TIMBER KITCHEN/tim-10.jpg",
      "/images/TIMBER KITCHEN/tim-11.jpg",
      "/images/TIMBER KITCHEN/tim-12.jpg",
      "/images/TIMBER KITCHEN/tim-13.jpg",
      "/images/TIMBER KITCHEN/tim-14.jpg",
      "/images/TIMBER KITCHEN/tim-15.jpg",
      "/images/TIMBER KITCHEN/tim-16.jpg",
      "/images/TIMBER KITCHEN/tim-17.jpg",
      "/images/TIMBER KITCHEN/tim-18.jpg",
      "/images/TIMBER KITCHEN/tim-19.jpg",
    ],
  },
  { title: "CNC Jaali Feature Wall", category: "CNC", image: "/images/cnc jali carving/cnc jali-1.jpg" },
  {
    title: "Cafe Iranica",
    category: "Interiors",
    image: "/images/cafe-iranica/cafe-iranica-1.jpg",
    gallery: [
      "/images/cafe-iranica/cafe-iranica-1.jpg",
      "/images/cafe-iranica/cafe-iranica-2.jpg",
      "/images/cafe-iranica/cafe-iranica-3.jpg",
      "/images/cafe-iranica/cafe-iranica-4.jpg",
      "/images/cafe-iranica/cafe-iranica-5.jpg",
      "/images/cafe-iranica/cafe-iranica-6.jpg",
      "/images/cafe-iranica/cafe-iranica-7.jpg",
      "/images/cafe-iranica/cafe-iranica-8.jpg",
      "/images/cafe-iranica/cafe-iranica-9.jpg",
      "/images/cafe-iranica/cafe-iranica-10.jpg",
      "/images/cafe-iranica/cafe-iranica-11.jpg",
      "/images/cafe-iranica/cafe-iranica-12.jpg",
      "/images/cafe-iranica/cafe-iranica-13.jpg",
      "/images/cafe-iranica/cafe-iranica-14.jpg",
      "/images/cafe-iranica/cafe-iranica-15.jpg",
      "/images/cafe-iranica/cafe-iranica-16.jpg",
      "/images/cafe-iranica/cafe-iranica-17.jpg",
      "/images/cafe-iranica/cafe-iranica-18.png",
      "/images/cafe-iranica/cafe-iranica-19.png",
      "/images/cafe-iranica/cafe-iranica-20.png",
      "/images/cafe-iranica/cafe-iranica-21.jpeg",
    ],
  },
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
  { question: "Do you provide installation?", answer: "We manage professional installation with a strong focus on quality." },
];

const galleryImages = [
  { title: "Timber Yard", image: "/images/TIMBER KITCHEN/tim-1.jpg" },
];

function ServiceCard({ title, description, href, previewSlides }: { title: string; description: string; href: string; previewSlides: string[] }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && entry.intersectionRatio > 0.35);
      },
      { threshold: [0.35] },
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % previewSlides.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, [isVisible, previewSlides.length]);

  return (
    <motion.div
      whileHover={{ y: -8, rotateX: 2, rotateY: title === "CNC Jaali & Carving" ? -2 : 2 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      style={{ transformPerspective: 900 }}
      className="group overflow-hidden rounded-[1.75rem] border border-[#cdb59a]/30 bg-[#f7efe4] shadow-sm"
    >
      <Link href={href} className="block">
      <div ref={cardRef} className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] bg-[#e8dfd2]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${title}-${activeIndex}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45 }}
            className="absolute inset-0"
          >
            <Image
              src={previewSlides[activeIndex]}
              alt={`${title} preview ${activeIndex + 1}`}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-4 left-4 flex gap-2">
          {previewSlides.map((_, index) => (
            <span
              key={index}
              className={`h-1.5 w-6 rounded-full transition ${index === activeIndex ? "bg-[#8d6b4e]" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>
      <div className="p-7">
        <p className="text-sm uppercase tracking-[0.35em] text-[#8d6b4e]">Interior Solution</p>
        <h3 className="mt-4 text-2xl font-semibold text-[#2f2a22]">{title}</h3>
        <p className="mt-3 text-[#675b50]">{description}</p>
        <span className="mt-6 inline-flex text-sm font-medium text-[#8d6b4e] group-hover:translate-x-1 transition">Explore service →</span>
      </div>
      </Link>
    </motion.div>
  );
}

function ProjectSlider({ project }: { project: (typeof projects)[number] }) {
  const images = project.gallery ?? [project.image];
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => setActiveIndex((index) => (index - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % images.length);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[#e8dfd2]" style={{ perspective: "1000px" }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={images[activeIndex]}
          initial={{ opacity: 0, rotateY: 8, scale: 0.97 }}
          animate={{ opacity: 1, rotateY: 0, scale: 1 }}
          exit={{ opacity: 0, rotateY: -8, scale: 1.03 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute inset-0"
          style={{ transformOrigin: "center" }}
        >
          <a href={images[activeIndex]} target="_blank" rel="noreferrer" className="relative block h-full w-full cursor-zoom-in">
            <Image src={images[activeIndex]} alt={`${project.title} photograph ${activeIndex + 1}`} fill className="object-cover" sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" />
          </a>
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button type="button" onClick={showPrevious} aria-label={`Previous ${project.title} photograph`} className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/45 px-3 py-2 text-lg text-white backdrop-blur-sm transition hover:bg-black/65">
            ←
          </button>
          <button type="button" onClick={showNext} aria-label={`Next ${project.title} photograph`} className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/45 px-3 py-2 text-lg text-white backdrop-blur-sm transition hover:bg-black/65">
            →
          </button>
          <div className="absolute bottom-3 left-1/2 z-10 flex max-w-[80%] -translate-x-1/2 gap-1.5 overflow-hidden rounded-full bg-black/35 px-2 py-1 backdrop-blur-sm">
            {images.map((image, index) => (
              <button
                type="button"
                key={image}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${project.title} photograph ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${index === activeIndex ? "w-6 bg-white" : "w-1.5 bg-white/55"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState<(typeof projectCategories)[number]>("All");
  const [activeReview, setActiveReview] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formState, setFormState] = useState({ name: "", phone: "", email: "", project: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((prev) => (prev + 1) % heroSlides.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveReview((prev) => (prev + 1) % testimonials.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const updateScrollSlide = () => {
      if (!heroSectionRef.current) return;
      const heroRect = heroSectionRef.current.getBoundingClientRect();
      if (heroRect.bottom <= 0) {
        setActiveSlide(heroSlides.length - 1);
        return;
      }
      if (heroRect.top >= window.innerHeight) {
        setActiveSlide(0);
        return;
      }

      const progress = Math.min(1, Math.max(0, -heroRect.top / heroRect.height));
      const slideIndex = Math.floor(progress * heroSlides.length);
      setActiveSlide(Math.min(heroSlides.length - 1, Math.max(0, slideIndex)));
    };

    const onWheel = (event: WheelEvent) => {
      if (!heroSectionRef.current) return;
      const heroRect = heroSectionRef.current.getBoundingClientRect();
      if (heroRect.top > window.innerHeight || heroRect.bottom < 0) return;
      if (scrollTimeoutRef.current !== null) return;

      if (event.deltaY > 20) {
        nextSlide();
      } else if (event.deltaY < -20) {
        prevSlide();
      }

      scrollTimeoutRef.current = window.setTimeout(() => {
        scrollTimeoutRef.current = null;
      }, 300);
    };

    window.addEventListener("scroll", updateScrollSlide, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    updateScrollSlide();
    return () => {
      window.removeEventListener("scroll", updateScrollSlide);
      window.removeEventListener("wheel", onWheel);
      if (scrollTimeoutRef.current !== null) window.clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    setSubmitError("");

    try {
      const response = await fetch("https://formspree.io/f/xyezjkvd", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          phone: formState.phone,
          email: formState.email,
          project: formState.project,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
      setFormState({ name: "", phone: "", email: "", project: "" });
    } catch {
      setSubmitError("We could not send your inquiry. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteShell>
      <section id="services" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#8d6b4e]">Signature Services</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#2f2a22]">Luxury solutions made to feel serene and timeless.</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} href={service.href} previewSlides={service.previewSlides} />
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-[#cdb59a]/30 bg-[#f7efe4] p-8 shadow-sm lg:p-12">
          <p className="text-sm uppercase tracking-[0.4em] text-[#8d6b4e]">About Us</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2f2a22]">Built on wood. Built on trust.</h2>
          <div className="mt-6 max-w-4xl space-y-5 text-lg leading-8 text-[#675b50]">
            <p>
              With a journey that began in the timber trade and a reputation built over decades, <strong className="font-semibold text-[#2f2a22]">Syed has been serving customers in Banaswadi since 1984</strong>. Before establishing his business in Banaswadi, he was associated with the timber trade at <strong className="font-semibold text-[#2f2a22]">City Market</strong>, gaining valuable experience and knowledge of wood and craftsmanship.
            </p>
            <p>
              Since 1984, his work has been built on <strong className="font-semibold text-[#2f2a22]">honesty, quality, and keeping his word</strong>. From supplying raw timber and wood planks to crafting <strong className="font-semibold text-[#2f2a22]">beds, wardrobes, tables, sofas, and other wooden furniture</strong>, the business has grown through years of trust and customer relationships.
            </p>
            <p>
              Today, Syed and his son continue this legacy together. From <strong className="font-semibold text-[#2f2a22]">custom wooden furniture and wood manufacturing to CNC jali, wood carving, and detailed woodwork</strong>, they bring traditional craftsmanship together with modern design.
            </p>
            <p>
              Under <strong className="font-semibold text-[#2f2a22]">Cauvery Interiors</strong>, the journey has now expanded into complete interior solutions — from design and manufacturing to <strong className="font-semibold text-[#2f2a22]">complete project execution</strong>, handling every detail from start to finish.
            </p>
            <p className="font-semibold text-[#2f2a22]">Built on wood. Built on trust. Growing through generations.</p>
          </div>
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
              <ProjectSlider project={project} />
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
              <a href="https://wa.me/918618634719" className="rounded-full border border-[#8d6b4e]/40 bg-white px-5 py-3 text-sm font-semibold text-[#4d3920]">WhatsApp Us</a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {galleryImages.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[1.5rem] border border-[#cdb59a]/30 bg-[#f7efe4] shadow-sm">
                <div className="relative aspect-[4/5]">
                  <a href={item.image} target="_blank" rel="noreferrer" className="block h-full w-full cursor-zoom-in">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </a>
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
              <p><span className="font-semibold text-[#2f2a22]">Phone:</span> +91 86186 34719</p>
              <p><span className="font-semibold text-[#2f2a22]">Email:</span> cauveryinterior@gmail.com</p>
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
              <button type="submit" disabled={submitting} className="rounded-full bg-[#8d6b4e] px-6 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60">
                {submitting ? "Sending..." : "Send Inquiry"}
              </button>
              {submitted && <p className="text-sm text-[#8d6b4e]">Thank you. Your inquiry has been sent.</p>}
              {submitError && <p className="text-sm text-red-700">{submitError}</p>}
            </form>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
