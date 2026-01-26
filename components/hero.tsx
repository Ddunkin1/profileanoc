'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import Image from 'next/image';
import { site } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
              {site.availabilityLabel}
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl">
            {site.hero.headlinePrefix}{' '}
            <span className="gold-gradient-text">{site.hero.headlineEmphasis}</span>
            {site.hero.headlineSuffix ? ` ${site.hero.headlineSuffix}` : null}
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {site.hero.bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              className="gold-glow inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-bold text-background-dark transition-all"
              href={site.hero.primaryCta.href}
            >
              {site.hero.primaryCta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              className="rounded-lg border border-border-gold bg-transparent px-8 py-4 font-bold text-slate-900 transition-all hover:bg-black/5 dark:text-white dark:hover:bg-white/5"
              href={site.hero.secondaryCta.href}
            >
              {site.hero.secondaryCta.label}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-border-gold/50 bg-surface-dark">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />

            <Image
              alt="Abstract glowing technology server room with gold accents"
              src={site.heroImage}
              fill
              priority
              className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-background-dark/80 p-6 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-primary">
                    {site.hero.featured.label}
                  </p>
                  <h3 className="text-lg font-bold">{site.hero.featured.title}</h3>
                </div>
                <BadgeCheck className="size-5 text-primary" aria-hidden="true" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
