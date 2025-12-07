const nodemailer = require("nodemailer");

// --------- CONFIGURE YOUR TRANSPORTER ----------
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// --------- MAIN FUNCTION ----------
async function sendApplicationEmail(
  companyEmail,
  companyName,
  designation
) {
  const subject = `Application for ${designation} Role`;

  const message = `
Dear HR Team,

Hope you're doing well. I’m reaching out regarding the ${designation} role at ${companyName}, as I noticed the team is currently hiring. With 2+ years of hands-on experience building production-grade applications using React, Next.js, Redux, and modern backend stacks such as node.js, nestjs, SQL/NoSQL, I believe I’d be a strong fit.

I’ve recently delivered high-impact features at Antino Labs and previously at Insoftlink, where I improved system performance, enhanced user experience, and contributed directly to product growth. I’m now looking to bring the same execution, ownership, and problem-solving mindset to a fast-moving engineering team.

Since your team is actively expanding, I’d love to explore how I can contribute. I’m attaching my resume for your reference.

Thank you for your time—looking forward to hearing from you.

Regards,
Mohit Singh Rawat
📞 8383955754
📩 tech.mohit17@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/mohit-rawat-456aa723a
`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: companyEmail,
    subject: subject,
    text: message,
    attachments: [
      {
        filename: "Mohit_Rawat.pdf",
        path: "./Mohit's Resume.pdf",
      },
    ],
  };

  try {
    const data= await transporter.sendMail(mailOptions);
    console.log(data)
    return data
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}


module.exports={sendApplicationEmail}
