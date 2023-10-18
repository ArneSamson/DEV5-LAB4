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

const postMessage = async (req, res) => {
    const { user, text } = req.body.message;

    const newMessage = new Message({
        user,
        text,
    });

    // res.json(
    //     {
    //         user: user,
    //         text: text,
    //     }
    // );

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
