const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const conversations = [
    { title: "room1", value: "" },
    { title: "room2", value: "" },
    { title: "room3", value: "" },
]

const messages = {
    room1: [
        { author: "User", message: "test!", createdTs: new Date() },
        { author: "Bot", message: "Привет, я бот!", createdTs: new Date() },
    ],
    room3: [
        { author: "User", message: "test!", createdTs: new Date() },
        { author: "Bot", message: "Привет, я бот!", createdTs: new Date() },
    ],
}

const getConversations = (request, response) => {
    response.status(200).send(conversations);
}

const getMessagesById = (request, response) => {
    const { id } = request.params;

    response.status(200).send({ messages: messages[id] || [], roomId: id });
}

app.get("/conversations", getConversations);
app.get("/messages/:id", getMessagesById);

app.listen(port, () =>
  console.log(`Listening on http://localhost:${port}`));

