const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

app.get('/api/v1/messages', (req, res) => {
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
});

app.get('/api/v1/messages/:id', (req, res) => {
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
});

app.post('/api/v1/messages', (req, res) => {
    const {user, text} = req.body.message;

    res.json(
        {
            status: "success",
            message: `POSTING a new message for user ${user}`,
        }
    );
});

app.put('/api/v1/messages/:id', (req, res) => {
    const id = req.params.id;

    res.json(
        {
            status: "success",
            message: `updating a message for id ${id}`,
        }
    );
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});