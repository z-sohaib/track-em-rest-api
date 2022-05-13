const express = require("express");
const dotenv = require("dotenv");
import ConnectDB from "./app/utils/db_init.js";

dotenv.config()

ConnectDB()

const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});