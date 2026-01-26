const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCBJ8hJ0Zrb9dMeW-FweNZrh0mVcIj7UnUrHygsm217ffQ22eseH-A3jfcK0LDLagF-D4tqUmMqY7KjxdvfdAeHZxtYVb-cJJB1h6_opgrN6lrm8uau5McD629HkBCA_zvr_Rggcq6dfH6FrU2Cj2vnfW3DER8DICW3vFTrNLftOIohrJ3yLBgxWSKdZUo1I9iGPNh0LjKXT4PHHHXZ2NxmAC4haZyQronbTLHxyDlLxGyptWIt9pdFxVXc4les9wue24qKQjCXmm8R';

export const site = {
  name: 'Nelvi James M. Anoc',
  brand: {
    title: 'NELVI',
    accent: 'ANOC',
  },
  role: 'Frontend Developer • UI/UX-focused',
  availabilityLabel: 'Open to Opportunities',
  heroImage,
  hero: {
    headlinePrefix: 'Nelvi James M.',
    headlineEmphasis: 'Anoc',
    headlineSuffix: '',
    bio: 'I build fast, responsive, and accessible web experiences with modern React, Next.js, and TypeScript—designed with premium UI polish and built for real-world delivery.',
    primaryCta: { label: 'View Projects', href: '#projects' },
    secondaryCta: { label: 'My Expertise', href: '#expertise' },
    featured: {
      label: 'Featured Project',
      title: 'Portfolio System v1.0',
    },
  },
  about: {
    title: 'Technical Precision & Creative Execution',
    description:
      'I blend clean design systems with production-ready engineering—balancing performance, maintainability, and a luxury visual language that stands out.',
    stats: [
      { value: '03+', label: 'Years Experience' },
      { value: '20+', label: 'Projects Shipped' },
    ],
    highlights: [
      {
        title: 'Quality First',
        description: 'Thoughtful architecture, reliable UI patterns, and consistent design decisions.',
      },
      {
        title: 'Performance Mindset',
        description: 'Optimized rendering, image strategy, and accessibility baked in from the start.',
      },
    ],
  },
  expertise: {
    title: 'Core Expertise',
    subtitle:
      'Focused on modern frontend engineering, high-quality UI, and the product details that make experiences feel premium.',
    cards: [
      {
        title: 'UI Engineering',
        description:
          'Reusable components, responsive layouts, and pixel-consistent implementation using Tailwind and React.',
      },
      {
        title: 'Design Systems',
        description:
          'Scalable tokens, composable patterns, and consistent interaction states across an entire product.',
      },
      {
        title: 'Motion & Polish',
        description:
          'Micro-interactions, page transitions, and delightful detail using Framer Motion—without sacrificing performance.',
      },
    ],
  },
  stack: {
    title: 'Professional Tech Stack',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Figma'],
  },
  projects: {
    title: 'Featured Creations',
    subtitle: 'A selection of modern projects showcasing design + engineering execution.',
    ctaLabel: 'Browse Full Archive',
    items: [
      {
        title: 'Aether Financial Dashboard',
        meta: 'Fintech • UI Engineering',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDvKzNIVPNaIGz3-s29KDJwKqJikgbffW82DWk2Sy8TkfJmypVpoPXp-blpDgA4qwqkf9WVn0LvwlFlYfi17pjedDDOFYiBjJk61qn8dWCY_jtHMDJ1REeUwPG9LjgDs3xB2FjyIumi_AKrp8x4UuabbLOpE3GhVK8v9QfP23n9szG0syvvmPEImNCF4i1PUs4AbOBIZEnam3-EFV0RNw_klxtBo5Pc-JkP5I0-WkJSzz7-4UJ-bbpEuZHFALAnfHfPLBomHP9gyji1',
        alt: 'Modern dark analytics dashboard with gold data visualizations',
        href: 'https://example.com',
      },
      {
        title: 'Onyx E-Commerce Engine',
        meta: 'Commerce • Design System',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBNuDKKK_sWis0gKV30dTttFCbqmFdSl1ctJwksMdOsZmRBeVBStylFHNTkfI5iFXO6DYP9tr7KU1BgySURSq0_0Yplw90eGsluLgUZlJQ6NZwJvfWa6M9N9reF5l8TyL-laAfBSYiubO8XL1kM4mTahXPgXOFR-OXbrUgU1cNjWULzZWaeoXTikoSqqYVfu-QYOCeCt6apenUBR-dSywIZk-08nEnxQ_IUxGeRdGUpMX7eDoQe1-cStzAbUJwV2qHyrtz6vG0IzoOR',
        alt: 'Luxury mobile app interface with gold typography and minimal design',
        href: 'https://example.com',
      },
      {
        title: 'LuxeOS Admin Suite',
        meta: 'SaaS • Admin UI & Components',
        image: heroImage,
        alt: 'Abstract glowing technology server room with gold accents',
        href: 'https://example.com',
      },
      {
        title: 'Atlas Landing Experience',
        meta: 'Marketing • Performance & Motion',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDvKzNIVPNaIGz3-s29KDJwKqJikgbffW82DWk2Sy8TkfJmypVpoPXp-blpDgA4qwqkf9WVn0LvwlFlYfi17pjedDDOFYiBjJk61qn8dWCY_jtHMDJ1REeUwPG9LjgDs3xB2FjyIumi_AKrp8x4UuabbLOpE3GhVK8v9QfP23n9szG0syvvmPEImNCF4i1PUs4AbOBIZEnam3-EFV0RNw_klxtBo5Pc-JkP5I0-WkJSzz7-4UJ-bbpEuZHFALAnfHfPLBomHP9gyji1',
        alt: 'Minimal landing page design with strong typography and dark theme',
        href: 'https://example.com',
      },
    ],
  },
  contact: {
    title: 'Start a Conversation',
    subtitle: "If you'd like to collaborate or hire me, send a message and I'll reply as soon as possible.",
    email: 'nelvi.anoc@gmail.com',
  },
  footer: {
    tagline: 'Logic meets Luxury.',
    links: {
      email: 'mailto:nelvi.anoc@gmail.com',
      website: '#',
      social: '#',
    },
  },
} as const;
