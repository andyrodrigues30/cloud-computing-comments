const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// require("dotenv").config({ path: "../.env" });

const app = express();
const port = process.env.Port || 8000
//specify the port that i will be using for the server

app.use(cors())
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {})
// This connects to the MongoDB using the URI in the .env file (Remember to put that in .gitIgnore!!!)

const connection = mongoose.connection
connection.once("open", () => {
    console.log("mongoose connected worked :)")
})

const UserResponceRouter = require("./routes/UserResponse.js");
app.use("/UserResponse", UserResponceRouter)
//tells the server to use the router 

app.listen(port, () => {
    console.log(port);
})