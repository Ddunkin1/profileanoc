'use client';

import { motion } from 'framer-motion';
import { Braces, Figma, Layers, Wind } from 'lucide-react';
import { site } from '@/lib/site';

function getIcon(label: string) {
  const key = label.toLowerCase();
  if (key.includes('type')) return Braces;
  if (key.includes('figma')) return Figma;
  if (key.includes('tailwind')) return Wind;
  return Layers;
}

export function TechStack() {
  return (
    <section className="bg-slate-50 px-6 py-16 transition-colors dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-slate-500"
        >
          {site.stack.title}
        </motion.h3>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {site.stack.items.map((label, idx) => {
            const Icon = getIcon(label);
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.03 }}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-primary/30 dark:border-border-gold/20 dark:bg-background-dark"
              >
                <Icon className="size-5 text-primary" aria-hidden="true" />
                <span className="text-sm font-bold text-slate-900 dark:text-white">{label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
