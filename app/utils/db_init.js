import mongoose from "mongoose";
import "dotenv/config"

const URI= process.env.DB_URI;

const ConnectDB = async () => {
    await mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true});
    console.log("Connection Done");
}

export default ConnectDB;