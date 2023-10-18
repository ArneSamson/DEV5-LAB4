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
    }

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



module.exports.welcome = welcome;
module.exports.getAll = getAll;
