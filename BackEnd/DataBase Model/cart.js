const mongoose = require('mongoose');
const schema = mongoose.Schema;

const cart = new schema({
  email: { type: String, required: true },
  id: { type: String, required: true, ref: 'book' },
});

cart.index({ email: 1, id: 1 }, { unique: true });

module.exports = mongoose.model('cart', cart);
