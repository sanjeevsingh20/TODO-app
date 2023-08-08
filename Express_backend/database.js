const mongoose = require("mongoose");
const config = require("./config/confidentila")

const mongoURL = config.uri ;

const connectmongp = () => {
  mongoose.connect(mongoURL);
  console.log("Connected succes");
};
module.exports = connectmongp;
