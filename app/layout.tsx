import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';
import { site } from '@/lib/site';
import { ThemeProvider } from '@/components/theme-provider';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${site.name} — Portfolio`,
  description: `${site.name} • ${site.role}`,
};

const themeScript = `
(function(){
  var t = localStorage.getItem('portfolio-theme');
  if (t === 'light') document.documentElement.classList.remove('dark');
  else document.documentElement.classList.add('dark');
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${spaceGrotesk.variable} font-display bg-background-light text-slate-900 transition-colors duration-300 dark:bg-background-dark dark:text-white`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
