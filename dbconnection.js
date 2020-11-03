const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const url =
  "mongodb+srv://junh0328:Dl!wnsgml24@boilerplate.jye8e.mongodb.net/practiceChat?retryWrites=true&w=majority";
const connect = mongoose.connect(url, { useNewUrlParser: true });
module.exports = connect;
