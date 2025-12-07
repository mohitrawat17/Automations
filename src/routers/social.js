const express = require("express");
const { sendApplicationEmail } = require("../utils/sendMail");
const router = express.Router();

router.post("/send-mail", async (req, res) => {
  const { reciever, companyName, designation } = req.body;
  try {
    const emailResult = await sendApplicationEmail(
      reciever,
      companyName,
      designation
    );

    if (emailResult) {
      return res.status(200).send({
        message: `Email sent successfully to ${reciever}`,
        data: emailResult,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
