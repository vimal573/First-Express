function getMessages(req, res) {
  res.send('<ul>Hello Albert</ul>');
}

function postMessage(req, res) {
  console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessage,
};
