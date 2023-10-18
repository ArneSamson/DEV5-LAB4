const express = require('express');
const app = express();
const port = 3000;

const messageController = require('./controllers/api/v1/messages.js');

const cors = require('cors');
app.use(cors());

app.get('/', messageController.welcome);

app.get('/api/v1/messages', messageController.getAll);

app.get('/api/v1/messages/:id', messageController.getMessageByID);

app.post("/api/v1/messages", messageController.postMessage);

app.put('/api/v1/messages/:id', messageController.putMessage);

app.delete('/api/v1/messages/:id', messageController.deleteMessage);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});