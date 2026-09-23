"use client";

import { useState } from "react";
import { SiteShell } from "@/components/site-shell";

export default function ConsultationPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", moreInfo: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    setSubmitError("");

    try {
      const response = await fetch("https://formspree.io/f/xyezjkvd", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", moreInfo: "" });
    } catch {
      setSubmitError("We could not send your request. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteShell>
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-[#cdb59a]/30 bg-[#f7efe4] p-8 shadow-sm lg:p-12">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm uppercase tracking-[0.4em] text-[#8d6b4e]">Request a Consultation</p>
            <a
              href="/"
              className="rounded-full border border-[#8d6b4e]/30 bg-white px-4 py-2 text-sm font-medium text-[#4d3920] transition hover:border-[#8d6b4e]"
            >
              Back to Home
            </a>
          </div>
          <h1 className="mt-4 text-4xl font-semibold text-[#2f2a22] sm:text-5xl">
            Let’s plan your next interior project.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#675b50]">
            Share your details and our team will get in touch with you for a personalised consultation.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#4f433c]">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                className="w-full rounded-2xl border border-[#cdb59a]/30 bg-white px-4 py-3 text-[#2f2a22] outline-none"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#4f433c]">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                className="w-full rounded-2xl border border-[#cdb59a]/30 bg-white px-4 py-3 text-[#2f2a22] outline-none"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#4f433c]">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
                className="w-full rounded-2xl border border-[#cdb59a]/30 bg-white px-4 py-3 text-[#2f2a22] outline-none"
                placeholder="+91 86186 34719"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#4f433c]">More Info</label>
              <textarea
                value={formData.moreInfo}
                onChange={(event) => setFormData((prev) => ({ ...prev, moreInfo: event.target.value }))}
                className="min-h-32 w-full rounded-2xl border border-[#cdb59a]/30 bg-white px-4 py-3 text-[#2f2a22] outline-none"
                placeholder="Tell us about your project, timeline, preferred style, or any specific requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-[#8d6b4e] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Submit Request"}
            </button>

            {submitted && (
              <p className="text-sm text-[#8d6b4e]">
                Thank you. Your consultation request has been sent.
              </p>
            )}
            {submitError && <p className="text-sm text-red-700">{submitError}</p>}
          </form>
        </div>
      </section>
    </SiteShell>
  );
}
