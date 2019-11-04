var mongoose = require("mongoose");

let database = "RegistroAPI";
let port = "27017";
let host = "localhost";
let uri = `mongodb://${host}:${port}/${database}`;

const connectDB = () => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(uri, { useNewUrlParser: true })
    .then(() => {
      console.log("LA conexion a la base fue existosa");
    })
    .catch(() => {
      console.log("Un error ocurrio a la hora de generarse");
    });
};

module.exports = {
  connectDB
};
