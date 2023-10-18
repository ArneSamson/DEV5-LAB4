const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    user: String,
    text: String,
  },
  {
    collection: 'messages',
  }
);

module.exports = mongoose.model('Message', messageSchema);
