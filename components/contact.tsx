'use client';

import { motion } from 'framer-motion';
import type { FormEvent } from 'react';
import { site } from '@/lib/site';

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <h2 className="mb-4 text-4xl font-bold">{site.contact.title}</h2>
        <p className="text-slate-600 dark:text-slate-400">{site.contact.subtitle}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="mx-auto max-w-2xl rounded-2xl border border-border-gold/30 bg-surface-dark p-8 shadow-2xl md:p-12"
      >
        <form
          className="grid grid-cols-1 gap-6"
          onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Full Name
              </label>
              <input
                className="rounded-lg border border-border-gold/40 bg-background-dark px-4 py-3 text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Email Address
              </label>
              <input
                className="rounded-lg border border-border-gold/40 bg-background-dark px-4 py-3 text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder={site.contact.email}
                type="email"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Project Details
            </label>
            <textarea
              className="rounded-lg border border-border-gold/40 bg-background-dark px-4 py-3 text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="How can we help your project?"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="gold-glow w-full rounded-lg bg-primary py-4 font-black uppercase tracking-widest text-background-dark transition-all hover:scale-[1.01]"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
