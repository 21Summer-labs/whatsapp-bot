let chatHistory = [
  {
    role: 'user',
    parts: [{ text: 'Hello, I am ready to chat.' }],
  },
];

const addToHistory = (message) => {
  if (!chatHistory) {
    chatHistory = [
      {
        role: 'user',
        parts: [{ text: 'Hello, I am ready to chat.' }],
      },
    ];
  }
  chatHistory.push(message);
};

const getHistory = () => chatHistory || [];

module.exports = {
  addToHistory,
  getHistory,
};