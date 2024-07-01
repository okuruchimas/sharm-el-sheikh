import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const getMessage = (req: Record<string, any>): string => {
  let emailMessage = "";

  for (const key in req) {
    if (req.hasOwnProperty(key) && req[key]) {
      emailMessage += `${key}: ${req[key]} <br>`;
    }
  }

  return emailMessage;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { name, email } = req.body;

    const message = getMessage(req.body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // ваша пошта Gmail
        pass: process.env.GMAIL_PASS, // ваш пароль додатку Gmail
      },
    });

    const mailOptions = {
      from: name,
      replyTo: email,
      to: process.env.GMAIL_USER, // ваша пошта Gmail
      subject: `Feedback from ${name} ${email}`,
      html: message,
    };

    try {
      console.log(mailOptions, "mailOptions");
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to send email", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
