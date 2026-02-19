const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCBJ8hJ0Zrb9dMeW-FweNZrh0mVcIj7UnUrHygsm217ffQ22eseH-A3jfcK0LDLagF-D4tqUmMqY7KjxdvfdAeHZxtYVb-cJJB1h6_opgrN6lrm8uau5McD629HkBCA_zvr_Rggcq6dfH6FrU2Cj2vnfW3DER8DICW3vFTrNLftOIohrJ3yLBgxWSKdZUo1I9iGPNh0LjKXT4PHHHXZ2NxmAC4haZyQronbTLHxyDlLxGyptWIt9pdFxVXc4les9wue24qKQjCXmm8R';

export const site = {
  name: 'Nelvi James M. Anoc',
  profileImage: '/james.jpg',
  brand: {
    title: 'NELVI',
    accent: 'ANOC',
  },
  role: 'BSIT Student • Father Saturnino Urios University',
  availabilityLabel: 'Currently Learning Networking',
  heroImage,
  hero: {
    headlinePrefix: 'Nelvi James M.',
    headlineEmphasis: 'Anoc',
    headlineSuffix: '',
    bio: 'Third-year BSIT student at Father Saturnino Urios University, currently learning networking and web development. Passionate about building modern web applications and expanding my technical skills.',
    primaryCta: { label: 'View Projects', href: '#projects' },
    secondaryCta: { label: 'My Expertise', href: '#expertise' },
    featured: {
      label: 'Current Project',
      title: 'Personal Portfolio',
    },
  },
  about: {
    title: 'Student & Aspiring IT Professional',
    description:
      'Currently pursuing a Bachelor of Science in Information Technology at Father Saturnino Urios University. Focused on learning networking fundamentals and web development technologies.',
    stats: [
      { value: '3rd', label: 'Year Student' },
      { value: 'BSIT', label: 'Course' },
    ],
    highlights: [
      {
        title: 'Networking Focus',
        description: 'Currently learning network protocols, configurations, and infrastructure management.',
      },
      {
        title: 'Web Development',
        description: 'Building skills in modern web technologies including React, Next.js, and TypeScript.',
      },
    ],
  },
  expertise: {
    title: 'Current Learning Focus',
    subtitle:
      'As a third-year BSIT student, I am actively developing skills in networking and web development.',
    cards: [
      {
        title: 'Networking',
        description:
          'Learning network protocols, TCP/IP, routing, switching, and network security fundamentals.',
      },
      {
        title: 'Web Development',
        description:
          'Building web applications using React, Next.js, TypeScript, and modern frontend technologies.',
      },
      {
        title: 'IT Fundamentals',
        description:
          'Developing a strong foundation in information technology principles and best practices.',
      },
    ],
  },
  stack: {
    title: 'Technologies I\'m Learning',
    items: ['Next.js', 'React', 'TypeScript', 'Networking', 'TCP/IP'],
  },
  projects: {
    title: 'Portfolio & Learning Projects',
    subtitle: 'Projects I\'ve worked on while learning web development and networking.',
    ctaLabel: 'View More',
    items: [
      {
        title: 'Personal Portfolio Website',
        meta: 'Web Development • Portfolio',
        image: heroImage,
        alt: 'Personal portfolio website showcasing skills and projects',
        href: '#',
      },
    ],
  },
  contact: {
    title: 'Get in Touch',
    subtitle: "I'm open to learning opportunities, collaborations, and connecting with fellow students and professionals.",
    email: 'nelvi.anoc@urios.edu.ph',
  },
  footer: {
    tagline: 'Learning & Growing.',
    links: {
      email: 'mailto:nelvi.anoc@gmail.com',
      website: '#',
      social: '#',
    },
  },
} as const;
