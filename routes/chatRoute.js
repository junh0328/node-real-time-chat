const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./../dbconnection");
const Chat = require("./../models/ChatSchema");

const router = express.Router();

router.route("/").get((req, res, next) => {
  res.setHeader("Context-Type", "application/json");
  res.statusCode = 200;

  connectDB.then((db) => {
    let data = Chat.find({ message: "junhee" });
    Chat.find({}).then((chat) => {
      res.json(chat);
    });
  });
});

module.exports = router;
