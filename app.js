//core module
const path = require("path");

//external modules
const express = require("express");

//local modules
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utility/pathUtil");

const app = express();

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});
//since app.use for all used so if iske upr wale pass hoke niche agye menas kuch aur url he possible h to direcr app.use((re,res,next))likha

const PORT = 3006;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
