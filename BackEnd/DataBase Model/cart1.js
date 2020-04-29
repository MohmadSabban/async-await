const mongoose = require('mongoose');
const schema = mongoose.Schema;

const cart1 = new schema({
  email: { type: String, required: true },
  id: { type: Array, required: true, ref: 'book' },
});

module.exports = mongoose.model('cart1', cart1);
