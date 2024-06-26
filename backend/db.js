// const mongoose = require("mongoose");
// require('dotenv').config();

// const connection = mongoose.connect(process.env.mongoURL)
// module.exports = {
//   connection
// };

require('dotenv').config();

const mongoose = require('mongoose');

const mongoURL = process.env.mongoURL;

if (!mongoURL) {
  throw new Error('mongoURL environment variable is not set');
}

const connection = mongoose.connect(mongoURL);

module.exports = {
  connection
};