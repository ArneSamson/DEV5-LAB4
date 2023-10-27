///create mongose schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    message: {
        user:{
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        }
    },
}, 
);

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;