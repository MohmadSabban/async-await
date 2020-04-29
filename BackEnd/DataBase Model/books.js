const mongoose = require('mongoose');
const schema = mongoose.Schema;
const books = new schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});

books.index({ name: 1, category: 1 }, { unique: true }); //to prevent copy
module.exports = mongoose.model('book', books);
