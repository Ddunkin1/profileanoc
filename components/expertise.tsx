'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Search } from 'lucide-react';
import { site } from '@/lib/site';

const icons = [Search, Palette, Code2];

export function Expertise() {
  return (
    <section id="expertise" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
            {site.expertise.title.split(' ')[0]}{' '}
            <span className="gold-gradient-text">{site.expertise.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="mx-auto max-w-xl text-slate-800 dark:text-slate-400">
            {site.expertise.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {site.expertise.cards.map((c, idx) => {
            const Icon = icons[idx] ?? Code2;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: idx * 0.05 }}
                className="group rounded-xl border border-border-gold/30 bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary/50 dark:bg-surface-dark dark:shadow-none"
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">{c.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{c.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
