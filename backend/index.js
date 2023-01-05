const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const studentRoutes = require("./routes/routes");

const app = express();
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());
app.use("/student", studentRoutes);
app.get("/", (req, res) => {
  console.log({ req });
  res.send("Hello World!");
});

mongoose.set("strictQuery", false);

mongoose.connect(
    process.env.CONNECTION_STRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
  app.listen(PORT, () => {
    console.log(
        `connected to the db successfully and sever running on port ${PORT}`
    );
  });
}).catch((error) => {
  console.log(error);
});

