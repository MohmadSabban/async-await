const express = require('express');
const router = express.Router();
const books = require('../DataBase Model/books');

function error(err, res) {
  const completemsg = err.errmsg;
  const impmsg = completemsg.split(':');
  res.send(impmsg[0]);
}

router.post('/savebook', async (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const category = req.body.category;
  try {
    const newbooks = new books({
      name: name,
      price: price,
      category: category,
    });
    const data = await newbooks.save();

    if (data == '' || data == null) {
      res.send('Connection error');
    } else {
      res.send('data' + data);
    }
  } catch (err) {
    error(err, res);
  }
});

router.get('/getbook', async (req, res) => {
  const data = await books.find();
  try {
    if (data == '' || data == null) {
      res.send('empty table');
    } else {
      res.send(data);
    }
  } catch (err) {
    error(err, res);
  }
});

module.exports = router;
