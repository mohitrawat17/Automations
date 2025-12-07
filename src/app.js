const express = require("express");
require("dotenv").config();
const socialRouter = require("./routers/social");

const app = express();
app.use(express.json());
app.use("/social", socialRouter);

app.listen(process.env.PORT, () => {
  console.log("listening to PORT : ", process.env.PORT);
});
