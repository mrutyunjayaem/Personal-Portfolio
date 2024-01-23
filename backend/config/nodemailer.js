import nodemailer from "nodemailer";

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: options.email,
    to: "Mrutyunjaya<emmrutyunjaya@gmail.com>",
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions);
};

export { sendMail };
