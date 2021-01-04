const express = require('express');
const router = express.Router();

const Custom = require('../DataBase Model/customID');
const custom = require('../MiddleWare/custom');

let customID = require('../MiddleWare/custom');

router.get('/', async (req, res) => {
  const data = req.body;
  const id = await custom(Custom);
  data.customID = id;
  const info = await Custom.create(data);
  res.send(info);
});

router.get('/get', async (req, res) => {
  const data = await Custom.find();
  res.send(data);
});

module.exports = router;
