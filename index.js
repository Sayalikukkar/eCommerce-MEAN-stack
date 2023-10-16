// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// const db = require("./config/db");

// const user  = require('./routes/auth.route');
// app.use('/user', user);

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });

// module.exports = {
//   db
// }

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));


//Mongodb connection
const URL = process.env.URL
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(URL, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

const user  = require('./routes/auth.route');
app.use('/user', user);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});