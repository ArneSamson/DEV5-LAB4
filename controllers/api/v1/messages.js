const welcome = (req, res) => {
    res.send('Welcome to my API!');
};

const getAll = (req, res) => {
    const username = req.query.user;

    if(username) {
        res.json(
            {
                status: "success",
                message: `getting messages for user ${username}`,
            }
        );
    }else{

        res.json(
            {
                status: "success",
                message: "getting messages",
                data: {
                    messages: [
                        {
                            user: "Norm Scully",
                            message: "sandwiches are good"
                        },
                        {
                            user: "Hitchcock",
                            message: "Beaver trap"
                        }
                    ]
                }
            }
            );
        };
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
  
    res.json({
      message: `POSTING a new message for user ${user}`,
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
