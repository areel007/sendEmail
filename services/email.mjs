import { Resend } from "resend";

const resend = new Resend("re_L95YvJDj_Eduvya8v8PzWWGd2N27scxDZ`");

export const sendEmail = (otp, email) => {
  return resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "OTP Verification",
    html: `<p>Your OTP is: ${otp}</p>`,
  });
};
