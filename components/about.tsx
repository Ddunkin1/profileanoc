'use client';

import { motion } from 'framer-motion';
import { Diamond, Factory, Github } from 'lucide-react';
import { site } from '@/lib/site';

const GITHUB_URL = 'https://github.com/Ddunkin1';

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
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {site.about.title}
          </h2>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-xl border-2 border-primary bg-primary/15 px-4 py-3 text-lg font-bold text-slate-800 transition-colors hover:bg-primary/25 dark:text-slate-100 dark:hover:bg-primary/20"
          >
            <span className="text-slate-700 dark:text-slate-300">my github:</span>
            <Github className="size-6 text-primary" aria-hidden="true" />
            <span className="sr-only">GitHub: Ddunkin1</span>
          </a>
          <p className="leading-relaxed text-slate-600 dark:text-slate-400">
            {site.about.description}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-6">
            <div>
              <p className="text-2xl font-bold text-primary">{site.about.stats[0].value}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{site.about.stats[0].label}</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">{site.about.stats[1].value}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{site.about.stats[1].label}</p>
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
          <div className="flex items-start gap-4 rounded-lg border border-border-gold/30 bg-white p-5 shadow-sm dark:bg-background-dark dark:shadow-none">
            <Factory className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h4 className="mb-1 font-bold text-slate-900 dark:text-white">{site.about.highlights[0].title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {site.about.highlights[0].description}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-lg border border-border-gold/30 bg-white p-5 shadow-sm dark:bg-background-dark dark:shadow-none">
            <Diamond className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h4 className="mb-1 font-bold text-slate-900 dark:text-white">{site.about.highlights[1].title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {site.about.highlights[1].description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
