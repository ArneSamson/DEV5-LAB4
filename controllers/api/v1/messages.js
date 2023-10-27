//require message model
const Message = require('../../../models/messageModel.js');


const index = async (req, res) => {
    let messages = await Message.find({});

    res.json({
        status: "success",
        message: "GET all messages",
        data: [{
            messages: messages,
        }],
    });
};

const create = async (req, res) => {
    let message = req.body.message;
    let m = new Message;
    m.message = message;
    await m.save();

    res.json({
        status: "success",
        message: "POST a message",
        data: [
            {
                message: m,
            }
        ],
    });
};


module.exports = {
    index,
    create,
};