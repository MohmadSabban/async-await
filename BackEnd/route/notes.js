const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const DIR = './notes_pdf';
const notes = require('../DataBase Model/notes');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname +
        '-' +
        Date.now() +
        '.' +
        file.originalname.split('.')[file.originalname.split('.').length - 1]
    );
  },
});
let upload = multer({ storage: storage }).single('file');

router.post('/save', async (req, res) => {
  upload(req, res, async (err) => {
    try {
      if (err) {
        res.send('upload err');
      } else {
        const filename = req.file.filename;
        const note = new notes({ notes: filename });
        const data = await note.save();
        res.json(data);
      }
    } catch (error) {
      res.send('some err');
    }
  });
});

router.get('/fetch', async (req, res) => {
  try {
    const data = await notes.find();
    res.json(data);
  } catch (err) {
    res.send(err);
  }
});

router.get('/downlode/:id', async (req, res) => {
  filepath = path.join(__dirname, `../notes_pdf`) + '/' + req.params.id;
  // res.download(filepath);
  res.sendFile(filepath);
});

router.post('/downlode', async (req, res) => {
  const data = req.body.id;
  res.json({ data: data });
});

module.exports = router;
