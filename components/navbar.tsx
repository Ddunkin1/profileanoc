'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Moon, Sun, Terminal, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';
import { useTheme } from './theme-provider';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => {
        const href = item.href.replace('#', '');
        return { id: href || 'home', element: href ? document.getElementById(href) : document.body };
      });

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = section.id === 'home' ? 0 : section.element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id === 'home' ? '#' : `#${section.id}`);
            break;
          }
        }
      }
    };

    // Check on mount and scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-border-gold/30 bg-background-light/80 backdrop-blur-md transition-colors dark:bg-background-dark/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded bg-primary text-background-dark">
            <Terminal className="size-4" aria-hidden="true" />
          </div>
          <h1 className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white">
            AppDev <span className="text-primary">Portfolio</span>
          </h1>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href || (item.href === '#' && activeSection === '');
            return (
              <a
                key={item.href}
                className={`relative text-sm font-medium text-slate-700 transition-colors hover:text-primary dark:text-white ${
                  isActive ? 'text-primary' : ''
                }`}
                href={item.href}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
                )}
              </a>
            );
          })}
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white/80 p-2 text-slate-700 transition-colors hover:border-primary/50 hover:bg-white dark:border-border-gold/30 dark:bg-surface-dark/40 dark:text-white dark:hover:border-primary/50 dark:hover:bg-surface-dark/60"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="size-5" />
            ) : (
              <Moon className="size-5" />
            )}
          </button>
          <a
            className="gold-glow rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-background-dark transition-all"
            href="#contact"
          >
            Get in Touch
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white/80 p-2 text-slate-700 transition-colors hover:border-primary/50 dark:border-border-gold/30 dark:bg-surface-dark/40 dark:text-white dark:hover:border-primary/50 md:hidden"
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
              {navItems.map((item) => {
                const isActive = activeSection === item.href || (item.href === '#' && activeSection === '');
                return (
                  <a
                    key={item.href}
                    className={`relative rounded-lg border-l-2 px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-primary dark:hover:bg-white/5 ${
                      isActive
                        ? 'border-primary bg-primary/10 text-primary dark:bg-primary/20'
                        : 'border-transparent text-slate-700 dark:text-white'
                    }`}
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
              <button
                type="button"
                onClick={() => {
                  toggleTheme();
                  setOpen(false);
                }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-primary/50 hover:bg-white dark:border-border-gold/30 dark:bg-surface-dark/40 dark:text-white dark:hover:border-primary/50 dark:hover:bg-surface-dark/60"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="size-4" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="size-4" />
                    Dark Mode
                  </>
                )}
              </button>
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
