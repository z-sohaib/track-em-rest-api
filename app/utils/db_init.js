const mongoose = require("mongoose");
require("dotenv/config")

const URI= process.env.DB_URI;

const ConnectDB = async () => {
    await mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true});
    console.log("Connection Done");
}

module.exports = ConnectDB;