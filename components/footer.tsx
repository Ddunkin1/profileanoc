'use client';

import { motion } from 'framer-motion';
import { Facebook } from 'lucide-react';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-border-gold/20 bg-slate-100 px-6 py-12 dark:bg-background-dark">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto flex max-w-7xl flex-row items-center justify-center py-2"
      >
        <a
          className="absolute right-0 text-slate-700 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary"
          href={site.footer.links.social}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Facebook className="size-5" aria-hidden="true" />
        </a>
        <p className="text-center text-base leading-relaxed text-slate-700 dark:text-slate-300">
          © 2026 {site.name}. All rights reserved. {site.footer.tagline}
        </p>
      </motion.div>
    </footer>
  );
}
