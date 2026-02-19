'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Moon, Sun, Terminal, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '@/components/theme-provider';
import { site } from '@/lib/site';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function getActiveSection(): string {
  if (typeof window === 'undefined') return '#';
  if (window.scrollY < 80) return '#'; // Top of page = Home active
  const sections = ['#about', '#expertise', '#projects', '#contact'];
  const top = window.scrollY + 120;
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.querySelector(sections[i]);
    if (el) {
      const rect = el.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY;
      if (offsetTop <= top) return sections[i];
    }
  }
  return '#';
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setActiveSection(getActiveSection());
    const onScroll = () => setActiveSection(getActiveSection());
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        <a
          href="#"
          className="flex items-center gap-3 text-slate-900 dark:text-white"
          onClick={(e) => {
            if (window.location.hash === '' || window.location.hash === '#') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <div className="flex size-8 items-center justify-center rounded bg-primary text-background-dark">
            <Terminal className="size-4" aria-hidden="true" />
          </div>
          <h1 className="text-xl font-bold tracking-tighter">
            AppDev <span className="text-primary">Portfolio</span>
          </h1>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item.href
                  ? 'text-primary'
                  : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              {item.label}
              {activeSection === item.href ? (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary" />
              ) : null}
            </a>
          ))}
          <a
            className="gold-glow rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-background-dark transition-all"
            href="#contact"
          >
            Get in Touch
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-white/10 hover:text-primary dark:text-slate-400"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg p-2 text-slate-600 dark:text-slate-400"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-border-gold/30 bg-surface-dark/40 p-2 text-white transition-colors hover:border-primary/50 dark:bg-surface-dark/40"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            onClick={() => setOpen((v: boolean) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
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
