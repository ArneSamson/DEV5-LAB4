const Message = require('../../../models/messageModel.js');

const welcome = (req, res) => {
    res.send('Welcome to my API!');
};

const getAll = (req, res) => {
    const username = req.query.user;

    if (username) {
        Message.find({ user: username }, (err, messages) => {
            if (err) {
                res.status(500).json({
                    status: "error",
                    message: "Failed to retrieve messages",
                });
            } else {
                res.json({
                    status: "success",
                    message: `getting messages for user ${username}`,
                    data: {
                        messages,
                    },
                });
            }
        });
    } else {
        Message.find({}, (err, messages) => {
            if (err) {
                res.status(500).json({
                    status: "error",
                    message: "Failed to retrieve messages",
                });
            } else {
                res.json({
                    status: "success",
                    message: "getting messages",
                    data: {
                        messages,
                    },
                });
            }
        });
    }
};

const getMessageByID = (req, res) => {
    const id = req.params.id;

    res.json(
        {
            status: "success",
            message: "getting message for id " + id,
            data: {
                message: {
                    user: "Norm Scully",
                    message: "sandwiches are good"
                }
            }
        }
    );
};

const postMessage = (req, res) => {
    const { user, text } = req.body.message;

    const newMessage = new Message({
        user,
        text,
    });

    newMessage.save((err, message) => {
        if (err) {
            res.status(500).json({
                status: "error",
                message: "Failed to post a new message",
            });
        } else {
            res.json({
                status: "success",
                message: `POSTING a new message for user ${user}`,
                data: {
                    message,
                },
            });
        }
    });
};



const putMessage = (req, res) => {
    const id = req.params.id;

    res.json(
        {
            status: "success",
            message: `updating a message for id ${id}`,
        }
    );
};

const deleteMessage = (req, res) => {
    const id = req.params.id;

    res.json(
        {
            status: "success",
            message: `DELETING a message with id ${id}`,
        }
    );
};


module.exports.welcome = welcome;
module.exports.getAll = getAll;
module.exports.getMessageByID = getMessageByID;
module.exports.postMessage = postMessage;
module.exports.putMessage = putMessage;
module.exports.deleteMessage = deleteMessage;
