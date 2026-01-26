'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Terminal, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 border-b border-border-gold/30 bg-background-light/80 backdrop-blur-md transition-colors dark:bg-background-dark/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded bg-primary text-background-dark">
            <Terminal className="size-4" aria-hidden="true" />
          </div>
          <h1 className="text-xl font-bold tracking-tighter">
            AppDev <span className="text-primary">Portfolio</span>
          </h1>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
          <a
            className="gold-glow rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-background-dark transition-all"
            href="#contact"
          >
            Get in Touch
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-border-gold/30 bg-surface-dark/40 p-2 text-white transition-colors hover:border-primary/50 md:hidden"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen((v: boolean) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-border-gold/20 bg-background-light/95 backdrop-blur-md dark:bg-background-dark/95 md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/5 hover:text-primary"
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="gold-glow mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-bold text-background-dark"
                href="#contact"
                onClick={() => setOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
