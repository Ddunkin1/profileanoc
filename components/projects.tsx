'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { site } from '@/lib/site';

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <h2 className="mb-4 text-4xl font-bold">
              {site.projects.title.split(' ')[0]}{' '}
              <span className="text-primary">{site.projects.title.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              {site.projects.subtitle}
            </p>
          </div>

          <button
            type="button"
            className="group inline-flex items-center gap-2 font-bold text-primary"
          >
            {site.projects.ctaLabel}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {site.projects.items.map((p, idx) => (
            <motion.a
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: idx * 0.05 }}
              className="group cursor-pointer"
              href={p.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-xl border border-border-gold/20">
                <Image
                  alt={p.alt}
                  src={p.image}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-background-dark/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="translate-y-4 rounded-lg bg-primary px-6 py-3 font-bold text-background-dark transition-transform group-hover:translate-y-0">
                    View Case Study
                  </span>
                </div>
              </div>

              <h3 className="mb-2 text-2xl font-bold">{p.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{p.meta}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
