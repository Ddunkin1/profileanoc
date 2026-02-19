'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { site } from '@/lib/site';
import { sendEmail } from '@/lib/emailjs';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const inputBase =
  'w-full border-0 border-b border-slate-300 bg-transparent px-0 py-2.5 text-slate-900 outline-none transition-colors focus:border-primary focus:ring-0 dark:border-white/10 dark:text-slate-100 dark:focus:border-primary';
const placeholderClass = 'placeholder-slate-500 dark:placeholder-slate-400';

export function Contact() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setFormState('error');
      return;
    }
    setFormState('loading');
    const result = await sendEmail({
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });
    if (result.success) {
      setFormState('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setFormState('error');
    }
  };

  return (
    <section
      id="contact"
      className="relative px-6 py-24"
    >
      <div className="mx-auto max-w-[960px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid min-h-[400px] grid-cols-1 lg:grid-cols-[1fr_1.4fr]"
        >
          {/* Left panel - no card, just content on page background */}
          <div className="relative flex flex-col justify-between border-b border-slate-200/80 pb-10 dark:border-white/[0.07] lg:border-b-0 lg:border-r lg:border-slate-200/80 lg:pr-0 lg:pb-0 dark:lg:border-white/[0.07]">
            <div className="lg:py-10 lg:pr-10">
              <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-primary">
                Get in touch
              </p>
              <h2 className="mb-4 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-slate-900 dark:text-slate-100">
                Let&apos;s start a <em className="italic text-primary">conversation</em>
              </h2>
              <p className="max-w-[240px] text-[0.88rem] leading-relaxed text-slate-600 dark:text-slate-400">
                {site.contact.intro}
              </p>
            </div>
            <div className="mt-8 lg:mt-auto lg:py-10 lg:pr-10">
              <div className="flex items-center gap-3 text-[0.82rem] text-slate-600 dark:text-slate-400">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <a href={`mailto:${site.contact.email}`} className="text-primary hover:underline">
                  {site.contact.email}
                </a>
              </div>
              <div className="mt-3 flex items-center gap-3 text-[0.82rem] text-slate-600 dark:text-slate-400">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{site.contact.responseNote}</span>
              </div>
              <div className="mt-3 flex items-center gap-3 text-[0.82rem] text-slate-600 dark:text-slate-400">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{site.contact.location}</span>
              </div>
            </div>
            {/* Decorative circles like reference .left::before / .left::after */}
            <span
              className="pointer-events-none absolute -bottom-12 -right-12 h-[200px] w-[200px] rounded-full border border-primary/10 dark:border-primary/20"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute -bottom-6 -right-6 h-[120px] w-[120px] rounded-full border border-primary/5 dark:border-primary/10"
              aria-hidden
            />
          </div>

          {/* Right panel - form only, no card wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="py-10 lg:pl-12 lg:pr-10"
          >
            {formState === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <span className="mb-4 text-3xl text-primary">✦</span>
                <h3 className="mb-2 font-display text-xl font-bold text-primary">Message Sent</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Thank you for reaching out. I&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      className={`${inputBase} ${placeholderClass}`}
                      placeholder="James Smith"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      className={`${inputBase} ${placeholderClass}`}
                      placeholder="you@email.com"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    className={`${inputBase} ${placeholderClass}`}
                    placeholder="What's this about?"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    className={`${inputBase} ${placeholderClass} min-h-[90px] resize-none`}
                    placeholder="Tell me about your project, idea, or question..."
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-[0.75rem] text-slate-500 dark:text-slate-400">
                    All fields required
                  </span>
                  <button
                    type="submit"
                    className="gold-glow inline-flex items-center justify-center gap-2 bg-primary px-8 py-3.5 text-[0.82rem] font-medium uppercase tracking-widest text-background-dark transition-all hover:opacity-95 disabled:opacity-70"
                    disabled={formState === 'loading'}
                  >
                    {formState === 'loading' ? 'Sending...' : 'Send Message'}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </button>
                </div>

                {formState === 'error' && (
                  <p className="text-sm font-medium text-red-500 dark:text-red-400">
                    Failed to send. Please fill all fields and try again.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
