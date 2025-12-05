import { Resend } from "resend";

const resend = new Resend("re_L95YvJDj_Eduvya8v8PzWWGd2N27scxDZ");
const resendLummy = new Resend("re_XjTwRrbL_CSYBZ8t48QC4UXxbS8q2btAe");

export const sendEmail = async (otp, email) =>
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "OTP Verification",
    html: `<strong>Your OTP is: ${otp}</strong>`,
  });

export const sendEmailLummy = async (form, email) => {
  await resendLummy.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Form Input",
    html: `<strong>Your OTP is: ${form}</strong>`,
  });
};
