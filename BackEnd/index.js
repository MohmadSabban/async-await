const express = require('express');
require('dotenv').config();
const api = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const book = require('./route/books');
const user = require('./route/user');
// const user = user1.router;
api.use(cors());
api.use(bodyparser.urlencoded({ extended: true }));
api.use(bodyparser.json());

const url = process.env.connect;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true,
    useUnifiedTopology: true,
    reconnectTries: 30,
    reconnectInterval: 500,
    poolSize: 10,
  })
  .then(() => {
    console.log('DataBase Connect and Access');
  })
  .catch((err) => {
    console.log(err.message);
  });

api.use('/user', user);
api.use('/book', book);

api.listen(8080, () => {
  console.log('App start');
});
