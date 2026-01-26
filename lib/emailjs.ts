import emailjs from '@emailjs/browser';

export const emailjsConfig = {
  serviceID: 'service_rfj6t5y',
  templateID: 'template_70z5t2v',
  publicKey: 'nwdJEMYC0C1uP1M_K',
};

emailjs.init(emailjsConfig.publicKey);

export async function sendEmail(params: {
  from_name: string;
  from_email: string;
  message: string;
}) {
  try {
    const response = await emailjs.send(
      emailjsConfig.serviceID,
      emailjsConfig.templateID,
      {
        to_email: 'nelvi.anoc@urios.edu.ph',
        ...params,
      }
    );
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS send error:', error);
    return { success: false, error };
  }
}
