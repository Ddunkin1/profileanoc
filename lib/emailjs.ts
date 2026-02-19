import emailjs from '@emailjs/browser';

const publicKey =
  typeof process !== 'undefined' && process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ? process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    : 'nwdJEMYC0C1uP1M_K';

export const emailjsConfig = {
  serviceID: 'service_rfj6t5y',
  templateID: 'template_70z5t2v',
  publicKey,
};

emailjs.init(emailjsConfig.publicKey);

export async function sendEmail(params: {
  from_name: string;
  from_email: string;
  subject?: string;
  message: string;
}) {
  try {
    const reply_to = params.from_email;
    const response = await emailjs.send(
      emailjsConfig.serviceID,
      emailjsConfig.templateID,
      {
        // Common EmailJS template variable names
        to_email: 'nelvi.anoc@urios.edu.ph',
        reply_to: reply_to,
        from_name: params.from_name,
        from_email: params.from_email,
        subject: params.subject ?? 'Portfolio contact',
        message: params.message,
        // Alternative variable names for template compatibility
        user_name: params.from_name,
        user_email: params.from_email,
        user_subject: params.subject ?? 'Portfolio contact',
        user_message: params.message,
        name: params.from_name,
        email: params.from_email,
        title: params.subject ?? 'Portfolio contact',
      }
    );
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS send error:', error);
    return { success: false, error };
  }
}
