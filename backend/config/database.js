const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose.connect("mongodb://localhost:27017/Ecommerce", () => {
    console.log(`MongoDb connected with server successfully`);
  });
};
module.exports = connectDatabase;
