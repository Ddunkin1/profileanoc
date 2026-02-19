'use client';

import { motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle, Loader2, XCircle } from 'lucide-react';
import { site } from '@/lib/site';

const SERVICE_ID = 'service_rfj6t5y';
const TEMPLATE_ID = 'template_70z5t2v';
// Get your Public Key from: https://dashboard.emailjs.com/admin/integration
// Add it to .env.local as: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key_here
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      if (!PUBLIC_KEY) {
        throw new Error('EmailJS Public Key is not configured. Please add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to your .env.local file.');
      }

      // Initialize EmailJS
      emailjs.init(PUBLIC_KEY);

      const templateParams = {
        // Primary parameters (most common EmailJS template variables)
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email, // This sets the Reply-To header for Gmail
        message: formData.message,
        subject: formData.subject,
        
        // Alternative parameter names (in case template uses different names)
        user_name: formData.name,
        user_email: formData.email,
        user_message: formData.message,
        name: formData.name,
        email: formData.email,
        to_email: site.contact.email,
      };

      // Send email - EmailJS will use from_name if configured in template settings
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setErrorMessage(
        'Failed to send message. Please try again later or contact me directly at ' +
          site.contact.email
      );
    }
  };

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Intro & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                GET IN TOUCH
              </p>
              <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900 dark:text-white md:text-6xl">
                Let's start a{' '}
                <span className="font-serif italic text-primary">conversation</span>
              </h2>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                Have a project in mind or just want to say hello? Fill out the form and I'll get
                back to you.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-primary">•</span>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-slate-800 transition-colors hover:text-primary dark:text-slate-300"
                >
                  {site.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">•</span>
                <p className="text-slate-800 dark:text-slate-300">Response within 24 hours</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">•</span>
                <p className="text-slate-800 dark:text-slate-300">Philippines</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-800 dark:bg-green-900/20 dark:text-green-400"
              >
                <CheckCircle className="size-5" />
                <p className="font-medium">Message sent successfully! I'll get back to you soon.</p>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-start gap-3 rounded-lg bg-red-50 p-4 text-red-800 dark:bg-red-900/20 dark:text-red-400"
              >
                <XCircle className="size-5 flex-shrink-0" />
                <p className="font-medium">{errorMessage}</p>
              </motion.div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-400"
                >
                  NAME
                </label>
                <div className="border-b border-slate-300 dark:border-slate-600">
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent px-0 py-3 text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-b-2 focus:border-primary dark:text-white dark:placeholder-slate-500"
                    placeholder="James Smith"
                    type="text"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-400"
                >
                  EMAIL
                </label>
                <div className="border-b border-slate-300 dark:border-slate-600">
                  <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent px-0 py-3 text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-b-2 focus:border-primary dark:text-white dark:placeholder-slate-500"
                    placeholder="you@email.com"
                    type="email"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="subject"
                  className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-400"
                >
                  SUBJECT
                </label>
                <div className="border-b border-slate-300 dark:border-slate-600">
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent px-0 py-3 text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-b-2 focus:border-primary dark:text-white dark:placeholder-slate-500"
                    placeholder="What's this about?"
                    type="text"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-400"
                >
                  MESSAGE
                </label>
                <div className="border-b border-slate-300 dark:border-slate-600">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none bg-transparent px-0 py-3 text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-b-2 focus:border-primary dark:text-white dark:placeholder-slate-500"
                    placeholder="Tell me about your project, idea, or question..."
                    rows={5}
                    required
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              {/* Form Footer */}
              <div className="flex items-center justify-between pt-4">
                <p className="text-xs text-slate-500 dark:text-slate-500">All fields required</p>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="gold-glow inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-bold uppercase tracking-wider text-background-dark transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE <span className="text-lg">→</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
