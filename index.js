require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const config = require('config');

const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());

const messagesRouter = require('./router/api/v1/message.js');

app.use('/api/v1/messages', messagesRouter);

const scoreRouter = require('./router/api/v1/score.js');

app.use('/api/v1/score', scoreRouter);

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,   
    // dbName: 'message',
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});