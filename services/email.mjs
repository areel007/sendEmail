import { Resend } from "resend";

const resend = new Resend("re_Uqw8sgWW_X7yj5dQNyH7nma2hp6HLCct5");

export const sendEmail = (otp, email) => {
  return resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "OTP Verification",
    html: `<p>Your OTP is: ${otp}</p>`,
  });
};
