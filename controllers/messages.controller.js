const path = require('path');

function getMessages(req, res) {
  res.render('messages', {
    title: 'Messages to my Friends!',
    friend: 'Elon Musk',
  });
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'sk.jpg'));
  // res.send('<ul>Hello Albert</ul>');
}

function postMessage(req, res) {
  console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessage,
};
