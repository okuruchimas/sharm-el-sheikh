import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const getMessage = (
  req: Record<string, string | number | boolean | null | undefined>,
): string => {
  let emailMessage = '';

  for (const key in req) {
    if (Object.prototype.hasOwnProperty.call(req, key) && req[key]) {
      emailMessage += `${key}: ${req[key]} <br>`;
    }
  }

  return emailMessage;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    const message = getMessage(req.body);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const feedbackOptions = {
      from: name,
      replyTo: email,
      to: process.env.GMAIL_USER,
      subject: `Feedback from ${name} ${email}`,
      html: message,
    };

    const answerOptions = {
      from: process.env.GMAIL_USER,
      replyTo: process.env.GMAIL_USER,
      to: email,
      subject: 'Your feedback has been successfully received!',
      html: '<h2>Thank you for sharing your experience.</h2> <p>Your opinion is very important to us. We will get in touch with you once we have reviewed your feedback.</p>  <p>If you have any additional questions or suggestions, please feel free to contact us by replying to this email.</p>  <h3>Thank you again for your feedback!</h3>',
    };

    try {
      await transporter.sendMail(feedbackOptions);
      await transporter.sendMail(answerOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
