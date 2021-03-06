const express = require('express');
require('dotenv').config();
const api = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const book = require('./route/books');
const user = require('./route/user');
const notes = require('./route/notes');
const customID = require('./route/customID');
const check = require('./route/check');
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
api.use('/notes', notes);
api.use('/custom', customID);
api.use('/check', check);
api.use('/notes', express.static('notes_pdf'));
api.listen(3000, () => {
  console.log('App start');
});
