export const site = {
  name: 'Nelvi James M. Anoc',
  profileImage: '/profile.jpg',
  brand: {
    title: 'NELVI',
    accent: 'ANOC',
  },
  role: '3rd Year BSIT • Father Saturnino Urios University',
  availabilityLabel: 'Learning & Building',
  hero: {
    headlinePrefix: 'Nelvi James M.',
    headlineEmphasis: 'Anoc',
    headlineSuffix: '',
    bio: "I'm a BSIT 3rd year student learning networking and web development—building with React, Next.js, and TypeScript and exploring modern frontend and network fundamentals.",
    primaryCta: { label: 'View Projects', href: '#projects' },
    secondaryCta: { label: 'My Expertise', href: '#expertise' },
    featured: {
      label: 'Featured Project',
      title: 'Portfolio System v1.0',
    },
  },
  about: {
    title: 'Student & Aspiring IT Professional',
    description:
      '3rd year BSIT at Father Saturnino Urios University, focused on networking and web development. I blend clean design with practical engineering—learning, building, and improving every day.',
    stats: [
      { value: '3rd', label: 'Year' },
      { value: 'BSIT', label: 'Degree' },
    ],
    highlights: [
      {
        title: 'Networking',
        description: 'Learning network fundamentals, TCP/IP, and system administration.',
      },
      {
        title: 'Web Development',
        description: 'Modern React, Next.js, and TypeScript for responsive, accessible UIs.',
      },
    ],
  },
  expertise: {
    title: 'What I\'m Learning',
    subtitle: 'BSIT 3rd year—currently focusing on networking and web development.',
    cards: [
      {
        title: 'Web Development',
        description:
          'Learning React, Next.js, and TypeScript; building responsive layouts and reusable components with Tailwind.',
      },
      {
        title: 'Networking',
        description:
          'Learning network fundamentals, TCP/IP, and system administration as part of my degree.',
      },
      {
        title: 'UI & Polish',
        description:
          'Exploring design consistency and motion with Framer Motion while I grow my frontend skills.',
      },
    ],
  },
  stack: {
    title: 'Tech & Topics I\'m Learning',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Networking', 'TCP/IP'],
  },
  projects: {
    title: 'Featured Creations',
    subtitle: 'A selection of projects I’ve built while learning.',
    ctaLabel: 'Browse Full Archive',
    items: [
      {
        title: 'Personal Portfolio',
        meta: 'Web • Next.js & React',
        image: '/profile.jpg',
        alt: 'Portfolio hero and project showcase',
        href: '#',
      },
    ],
  },
  contact: {
    title: 'Get in Touch',
    subtitle: "Let's start a conversation.",
    intro: "Have a project in mind or just want to say hello? Fill out the form and I'll get back to you.",
    email: 'nelvi.anoc@urios.edu.ph',
    responseNote: 'Response within 24 hours',
    location: 'Philippines',
  },
  footer: {
    tagline: 'Learning & Growing.',
    links: {
      email: 'mailto:nelvi.anoc@urios.edu.ph',
      website: '#',
      social: 'https://www.facebook.com/james.anoc.2024/',
    },
  },
} as const;
