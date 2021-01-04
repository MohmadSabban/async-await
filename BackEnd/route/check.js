const express = require('express');
const router = express.Router();

const Check = require('../DataBase Model/check');
const custom = require('../MiddleWare/custom');

router.get('/', async (req, res) => {
  const data = req.body;
  const id = await custom(Check);
  data.customID = id;
  const info = await Check.create(data);
  res.send(info);
});

router.get('/get', async (req, res) => {
  const data = await Custom.find();
  res.send(data);
});

module.exports = router;
