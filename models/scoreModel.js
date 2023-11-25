// models/score.js
const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  team: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;
