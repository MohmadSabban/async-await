const express = require('express');
const router = express.Router();
const user = require('../DataBase Model/user');
const cart = require('../DataBase Model/cart');
const cart1 = require('../DataBase Model/cart1');
const books = require('../DataBase Model/books');

function error(err, res) {
  const completemsg = err.errmsg;
  const impmsg = completemsg.split(':');
  res.send(impmsg[0]);
}

router.get('/', (req, res) => {
  res.send('Default User Route');
});

router.get('/login', (req, res) => {
  res.send('Login User Route');
});

router.get('/learnrequest/:id', (req, res) => {
  const name = req.body.name; // Access data from body
  const age = req.body.age;
  const data = req.header('data'); // Access data from header
  const id = req.params.id;

  const pas1 = req.param('id'); // taking paramter as id whne url conatin ?
  const pas = req.query.id; // when in url their ise ?

  res.json({
    err: 0,
    body: { from: 'body', name: name, age: age },
    head: { from: 'header', data: data },
    parmeter: {
      from: 'parameter',
      query: 'query data',
      id: pas,
      parm: 'parms data',
      id2: pas1,
      parms: 'parms data',
      id3: id,
    },
  });
});

router.post('/create', async (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const email = req.body.email;
  try {
    let person = new user({ name: name, age: age, email: email });
    const data = await person.save();
    if (data == '' || data == null) {
      res.send('COnnection Error');
    } else {
      res.json({ err: 0, data: 'save' });
    }
  } catch (err) {
    error(err, res);
  }
});

router.get('/details', async (req, res) => {
  const email = req.body.email;
  try {
    const details = await user.findOne({ email: email });

    if (details == '' || details == null) {
      res.send('Email not found');
    } else {
      res.json({ err: 0, data: details });
    }
  } catch (err) {
    error(err, res);
  }
});

router.post('/savecart', async (req, res) => {
  const email = req.body.email;
  const id = req.body.id;

  try {
    const savecart = new cart({ email: email, id: id });
    const data = await savecart.save();
    res.send(data);
  } catch (err) {
    error(err, res);
  }
});

router.get('/getcart', async (req, res) => {
  try {
    const data = await cart
      .find({ email: 'mohmadsabban@gmail.com' })
      .populate('id');
    res.send(data);
  } catch (err) {
    error(err, msg);
  }
});

router.post('/savecart1', async (req, res) => {
  const email = req.body.email;
  const id = req.body.id;
  try {
    const data = await cart1.find({ email: email });
    if (data == '' || data == null) {
      const savecart = new cart1({ email: email, id: id });
      const data1 = await savecart.save();
      res.json({ err: 0, msg: 'item save' });
    } else {
      const arid = await data.map((key) => {
        // make array of id
        return key.id;
      });
      const check = await arid[0].includes(id); // check if id already present or not
      if (check) {
        res.send('alreay found');
      } else {
        arid[0].push(id);
        const newid = [...arid[0]]; //copy a array
        const up = await cart1.updateOne({ $set: { email: email, id: newid } });
        up.nModified != 0
          ? res.json({ err: 0, msg: 'item save' })
          : res.send('alreay found');
      }
    }
  } catch (err) {
    res.send('err' + err);
  }
});

router.post('/removecart', async (req, res) => {
  const email = req.body.email;
  const id = req.body.id;
  const data = await cart1.find({ email: email });
  const arrid = [...data[0].id];
  const index = await arrid.indexOf(id); // get the index of array
  arrid.splice(index, 1); // remove id from array
  if (index > 0) {
    const up = await cart1.updateOne({ $set: { email: email, id: arrid } });
    up.nModified != 0
      ? res.json({ err: 0, msg: 'item remove' })
      : res.send('alreay found');
  } else {
    res.json({ err: 1, msg: 'not found', index: index });
  }
});

// async function de(id, res) {
//   let a = [];
//   let details = await id.forEach(async (e) => {
//     console.log(e);
//     let data = await books.find({ _id: e });
//     a.push(data);
//     console.log(data);
//   });
//   res.send(a);
// }

router.get('/getcart1', async (req, res) => {
  const email = req.body.email;
  const data = await cart1.find({ email: email });
  const id = data[0].id;

  let details = await id.forEach(async (e) => {
    console.log(e);
    let data = await books.find({ _id: e });
    console.log(data);
    console.log('end');
  });
  res.json({ data: details });
});

module.exports = router;
