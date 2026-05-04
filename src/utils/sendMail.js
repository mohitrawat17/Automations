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
async function sendApplicationEmail(companyEmail, companyName, designation) {
  const subject = `Immediate Joiner || ${designation} (2.5+ yrs)`;

const message = `
<p>Hi Team,</p>

<p>
I came across your opening for a <b>${designation}</b> role at <b>${companyName}</b>, and I’d like to express my interest in this opportunity.
</p>

<p>
With <b>2.5+ years of experience</b> in building production-grade applications using <b>React, Next.js, Redux</b>, along with backend exposure in <b>Node.js and SQL/NoSQL</b>, I believe I’d be a strong fit.
</p>

<p><b>Here’s a quick snapshot of what I bring:</b></p>
<ul>
  <li>Built and shipped scalable UI features in fast-paced environments</li>
  <li>Improved performance and user experience across live products</li>
  <li>Strong ownership mindset — from development to delivery</li>
</ul>

<p>
At <b>Antino Labs</b> and <b>Insoftlink</b>, I worked closely with product teams to deliver features that directly impacted users and business outcomes—not just code that sits in a repo.
</p>

<p>
I’m currently exploring opportunities where I can contribute to a high-impact team and continue growing as an engineer.
</p>

<p>📎 Resume attached for your review.</p>

<p>
If this aligns with what you're looking for, I’d be happy to connect.
</p>

<p>
Best regards,<br/>
<b>Mohit Singh Rawat</b><br/>
📞 8383955754<br/>
📩 tech.mohit17@gmail.com<br/>
🔗 <a href="https://www.linkedin.com/in/mohit-rawat-456aa723a">LinkedIn Profile</a>
</p>
`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: companyEmail,
    subject: subject,
    html: message,
    attachments: [
      {
        filename: "Mohit_Rawat.pdf",
        path: "./Mohit's Resume.pdf",
      },
    ],
  };

  try {
    const data = await transporter.sendMail(mailOptions);
    return data;
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}

module.exports = { sendApplicationEmail };
