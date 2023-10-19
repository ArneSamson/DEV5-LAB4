const Message = require('../../../models/messageModel.js');

const welcome = (req, res) => {
    res.send('Welcome to my API!');
};

const getAll = (req, res) => {
    const username = req.query.user;

    const query = username ? { user: username } : {};

    Message.find(query)
        .then((messages) => {
            res.json({
                status: "success",
                message: username
                    ? `getting messages for user ${username}`
                    : "getting messages",
                data: {
                    messages,
                },
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: "error",
                message: "Failed to retrieve messages",
            });
        });
};

const getMessageByID = (req, res) => {
    const id = req.params.id;

    Message.findById(id)
        .then((message) => {
            if (!message) {
                return res.status(404).json({
                    status: "error",
                    message: "Message not found",
                });
            }

            res.json({
                status: "success",
                message: `getting message for id ${id}`,
                data: {
                    message,
                },
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: "error",
                message: "Failed to retrieve message with this ID",
            });
        });
};

const postMessage = async (req, res) => {
    const { user, text } = req.body.message;

    const newMessage = new Message({
        user,
        text,
    });

    try {
        const message = await newMessage.save();
        res.json({
            status: "success",
            message: `POSTING a new message for user ${user}`,
            data: {
                message,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "Failed to save message",
        });
    }
};

const putMessage = (req, res) => {
    const id = req.params.id;
    const { user, text } = req.body;

    Message.findByIdAndUpdate(
        id,
        { user, text },
        { new: true } // To get the updated document as the result
    )
        .then((message) => {
            if (!message) {
                return res.status(404).json({
                    status: "error",
                    message: "Message not found",
                });
            }

            res.json({
                status: "success",
                message: `updating message for id ${id}`,
                data: {
                    message,
                },
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: "error",
                message: "Failed to update message with this id",
            });
        });
};


const deleteMessage = (req, res) => {
    const id = req.params.id;

    Message.findByIdAndRemove(id)
        .then((message) => {
            if (!message) {
                return res.status(404).json({
                    status: "error",
                    message: "Message not found",
                });
            }

            res.json({
                status: "success",
                message: `deleting message for id ${id}`,
                data: {
                    message,
                },
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: "error",
                message: "Failed to delete message with this id",
            });
        });
};

module.exports.welcome = welcome;
module.exports.getAll = getAll;
module.exports.getMessageByID = getMessageByID;
module.exports.postMessage = postMessage;
module.exports.putMessage = putMessage;
module.exports.deleteMessage = deleteMessage;
