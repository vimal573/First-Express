const express = require('express');

const friendsController = require('./controllers/friends.controller');
const messagesConstroller = require('./controllers/messages.controller');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post('/friends', friendsController.postFriend);
app.get('/friends', friendsController.getFriends);
app.get('/friends/:id', friendsController.getOneFriend);

app.get('/messages', messagesConstroller.getMessages);
app.post('/messages', messagesConstroller.postMessage);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
