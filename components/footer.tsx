'use client';

import { motion } from 'framer-motion';
import { Globe, Mail, Share2, Terminal } from 'lucide-react';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-border-gold/20 bg-background-dark px-6 py-12">
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
          <h2 className="text-lg font-bold tracking-tighter">
            {site.brand.title}
            <span className="text-primary">.{site.brand.accent}</span>
          </h2>
        </div>

        <p className="text-center text-sm text-slate-500 md:text-left">
          © 2024 {site.name}. All rights reserved. {site.footer.tagline}
        </p>

        <div className="flex gap-6">
          <a
            className="text-slate-400 transition-colors hover:text-primary"
            href={site.footer.links.email}
            aria-label="Email"
          >
            <Mail className="size-5" aria-hidden="true" />
          </a>
          <a
            className="text-slate-400 transition-colors hover:text-primary"
            href={site.footer.links.website}
            aria-label="Website"
          >
            <Globe className="size-5" aria-hidden="true" />
          </a>
          <a
            className="text-slate-400 transition-colors hover:text-primary"
            href={site.footer.links.social}
            aria-label="Social"
          >
            <Share2 className="size-5" aria-hidden="true" />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
