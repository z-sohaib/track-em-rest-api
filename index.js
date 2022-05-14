const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const ConnectDB = require("./app/utils/db_init.js");
const EmployeeRoutes = require("./app/routes/EmployeeRoutes")

dotenv.config()

ConnectDB()

const app = express();

app.use(cors())

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/employees', EmployeeRoutes)

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});