import express from "express";
import cors from "cors";
import { EmailService } from "./services/email.mjs";
import dotenv from "dotenv";

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

  await EmailService.sendEmail(
    email,
    "OTP Verification",
    `Your OTP is: ${otp}`
  );

  res.json({ message: "OTP sent successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
