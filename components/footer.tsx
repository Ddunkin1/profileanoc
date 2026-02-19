'use client';

import { motion } from 'framer-motion';
import { Facebook, Terminal } from 'lucide-react';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-border-gold/20 bg-slate-100 px-6 py-12 dark:bg-background-dark">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row"
      >
        <div className="flex items-center gap-3">
          <div className="flex size-6 items-center justify-center rounded bg-primary text-background-dark">
            <Terminal className="size-3" aria-hidden="true" />
          </div>
          <h2 className="text-lg font-bold tracking-tighter text-slate-900 dark:text-white">
            {site.brand.title}
            <span className="text-primary">.{site.brand.accent}</span>
          </h2>
        </div>

        <p className="text-center text-sm text-slate-600 md:text-left dark:text-slate-500">
          © 2024 {site.name}. All rights reserved. {site.footer.tagline}
        </p>

        <a
          className="text-slate-600 transition-colors hover:text-primary dark:text-slate-400"
          href={site.footer.links.social}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Facebook className="size-5" aria-hidden="true" />
        </a>
      </motion.div>
    </footer>
  );
}
