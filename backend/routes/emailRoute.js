import express from "express";
const router = express.Router();
import { sendEmail } from "../controllers/emailController.js";

router.route("/mail").post(sendEmail);

export default router;
