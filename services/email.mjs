import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // lowercase 'gmail' is better
  auth: {
    user: "delzmiyaki@gmail.com",
    pass: "rvxbqghewakszhny", // This must be an App Password
  },
});

export class EmailService {
  static async sendEmail(to, subject, html) {
    try {
      const info = await transporter.sendMail({
        from: "delzmiyaki@gmail.com",
        to,
        subject,
        html,
      });

      console.log("Email sent successfully:", info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error("Error sending email:", error);
      throw error; // or return { success: false, error }
    }
  }

  // Optional: Verify connection on startup
  static async verifyConnection() {
    try {
      await transporter.verify();
      console.log("Email server is ready");
      return true;
    } catch (error) {
      console.error("Email server connection failed:", error);
      return false;
    }
  }
}
