
const express = require("express"); // importing express
const app = express(); // instance of express


app.use(express.json()); // json middleware
const cors = require("cors"); // importing cors
app.use(cors()); // cors middleware
require("dotenv").config(); // importing .env file

// importing StreamChat
const StreamChat = require("stream-chat").StreamChat; 
// importing secret key from .env file
const STREAM_CHAT_AP_KEY = process.env.STREAM_CHAT_AP_KEY; 
// importing secret key from .env file
const STREAM_CHAT_SECRET_KEY = process.env.STREAM_CHAT_SECRET_KEY; 

// get route for token
app.post("/getToken", (req, res) => {
    // if id is not provided
    if (!req.body.id) {
    // send error
      return res.status(400).send({ message: "user id is required" }); 
    }
    // creating instance of StreamChat
    const serverClient = new StreamChat(
      STREAM_CHAT_AP_KEY,
      STREAM_CHAT_SECRET_KEY
    );
    // creating token for user
    const token = serverClient.createToken(req.body.id); 
    // sending response
    res.send({ 
      message: "token generated successfully", 
      token: token, 
      username: req.body.id 
    }); 
  });
module.exports = app; // exporting app

