'use client';

import { motion } from 'framer-motion';
import { Diamond, Factory } from 'lucide-react';
import { site } from '@/lib/site';

export function About() {
  return (
    <section
      id="about"
      className="border-y border-border-gold/20 bg-slate-50 px-6 py-24 transition-colors dark:bg-surface-dark/30"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl font-bold tracking-tight">{site.about.title}</h2>
          <p className="leading-relaxed text-slate-600 dark:text-slate-400">
            {site.about.description}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-6">
            <div>
              <p className="text-2xl font-bold text-primary">{site.about.stats[0].value}</p>
              <p className="text-sm text-slate-500">{site.about.stats[0].label}</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">{site.about.stats[1].value}</p>
              <p className="text-sm text-slate-500">{site.about.stats[1].label}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-start gap-4 rounded-lg border border-border-gold/30 bg-background-dark p-5">
            <Factory className="mt-0.5 size-5 text-primary" aria-hidden="true" />
            <div>
              <h4 className="mb-1 font-bold">{site.about.highlights[0].title}</h4>
              <p className="text-sm text-slate-400">
                {site.about.highlights[0].description}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-lg border border-border-gold/30 bg-background-dark p-5">
            <Diamond className="mt-0.5 size-5 text-primary" aria-hidden="true" />
            <div>
              <h4 className="mb-1 font-bold">{site.about.highlights[1].title}</h4>
              <p className="text-sm text-slate-400">
                {site.about.highlights[1].description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
