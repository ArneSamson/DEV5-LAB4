const express = require('express');
const app = express();
const port = 3000;

const messageController = require('./controllers/api/v1/messages.js');

const cors = require('cors');
app.use(cors());

app.get('/', messageController.welcome);

app.get('/api/v1/messages', messageController.getAll);

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

app.post("/api/v1/messages", (req, res) => {
    const { user, text } = req.body.message;
  
    res.json({
      message: `POSTING a new message for user ${user}`,
    });
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

app.delete('/api/v1/messages/:id', (req, res) => {
    const id = req.params.id;

    res.json(
        {
            status: "success",
            message: `DELETING a message with id ${id}`,
        }
    );
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});