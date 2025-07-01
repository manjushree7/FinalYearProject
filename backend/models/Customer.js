const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  joined: Date,
  orders: Number
});

module.exports = mongoose.model('Customer', customerSchema);
