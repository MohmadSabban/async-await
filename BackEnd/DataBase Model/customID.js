const mongoose = require('mongoose');
const schema = mongoose.Schema;

// let autoIncrement = require('mongoose-auto-increment');
// autoIncrement.initialize(mongoose.connection);

const customID = new schema({
  name: { type: String, required: true },
  customID: { type: Number, required: true },
});
// customID.plugin(autoIncrement.plugin, { model: 'Custom' });

module.exports = mongoose.model('Custom', customID);
