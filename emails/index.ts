import { buildSendMail } from "mailing-core";
import nodemailer from "nodemailer";

const sendMail = buildSendMail({
  transport: nodemailer.createTransport({
    host: "email-smtp.eu-central-1.amazonaws.com",
    port: 2587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  }),
  defaultFrom: "Dyo <no-reply@dyo.at>",
  configPath: "./mailing.config.json",
});

export default sendMail;

export const sendMarketingMail = buildSendMail({
  transport: nodemailer.createTransport({
    host: "smtp-broadcasts.postmarkapp.com",
    port: 2587,
    auth: {
      user: process.env.POSTMARK_MARKETING_API_KEY,
      pass: process.env.POSTMARK_MARKETING_API_SECRET,
    },
  }),
  defaultFrom: "Dyo <no-reply@dyo.at>",
  configPath: "./mailing.config.json",
});
