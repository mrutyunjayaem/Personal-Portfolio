import { sendMail } from "../config/nodemailer.js";

async function sendEmail(req, res) {
  try {
    const email = req.body.email;
    const message = req.body.message;
    const name = req.body.name;
    console.log(req.body);
    await sendMail({
      email,
      message,
      subject: name,
    });
    res.status(200).json({ status: "success" });
  } catch (err) {
    res.status(500).json({ status: "failed", message: "Email Not Sent" });
  }
}

export { sendEmail };
