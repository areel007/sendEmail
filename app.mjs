import express, { application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendEmail, sendEmailLummy } from "./services/email.mjs";

dotenv.config();

const corsOptions = {
  origin: "*",
  credentials: true,
};

const app = express();
const PORT = 3000;

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/api/send-otp", async (req, res) => {
  const { otp, email } = req.body;

  await sendEmail(otp, email);

  res.json({ message: "OTP sent successfully" });
});

application.post("/api/send-form-lummy", async (req, res) => {
  const { form, email } = req.body;

  await sendEmailLummy(form, email);

  res.json({ message: "Form sent successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
