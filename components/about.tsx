'use client';

import { motion } from 'framer-motion';
import { Diamond, Factory, Github } from 'lucide-react';
import { site } from '@/lib/site';

export function About() {
  return (
    <section
      id="about"
      className="border-y border-border-gold/10 bg-slate-50 px-6 py-24 transition-colors dark:border-border-gold/20 dark:bg-surface-dark/30"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {site.about.title}
            </h2>
            <a
              href="https://github.com/Ddunkin1"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-3 rounded-xl border-2 border-primary/40 bg-primary/15 px-5 py-3.5 text-lg font-bold text-primary transition-all hover:border-primary hover:bg-primary/25 hover:shadow-md dark:bg-primary/25 dark:text-primary dark:hover:bg-primary/35"
              aria-label="Visit my GitHub profile"
            >
              <span>my github:</span>
              <Github className="size-7 transition-transform group-hover:scale-110" />
            </a>
          </div>
          <p className="leading-relaxed text-slate-800 dark:text-slate-400">
            {site.about.description}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-6">
            <div>
              <p className="text-2xl font-bold text-primary">{site.about.stats[0].value}</p>
              <p className="text-sm text-slate-700 dark:text-slate-500">{site.about.stats[0].label}</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">{site.about.stats[1].value}</p>
              <p className="text-sm text-slate-700 dark:text-slate-500">{site.about.stats[1].label}</p>
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
          <div className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-border-gold/30 dark:bg-background-dark">
            <Factory className="mt-0.5 size-5 text-primary" aria-hidden="true" />
            <div>
              <h4 className="mb-1 font-bold text-slate-900 dark:text-white">{site.about.highlights[0].title}</h4>
              <p className="text-sm text-slate-800 dark:text-slate-400">
                {site.about.highlights[0].description}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-border-gold/30 dark:bg-background-dark">
            <Diamond className="mt-0.5 size-5 text-primary" aria-hidden="true" />
            <div>
              <h4 className="mb-1 font-bold text-slate-900 dark:text-white">{site.about.highlights[1].title}</h4>
              <p className="text-sm text-slate-800 dark:text-slate-400">
                {site.about.highlights[1].description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
