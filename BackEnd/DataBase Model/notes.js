const mongoose = require('mongoose');
const schema = mongoose.Schema;
const notes = new schema({
  notes: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('notes', notes);
