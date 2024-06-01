const { GoogleGenerativeAI } = require('@google/generative-ai');
const env = require('./env');

const genAI = new GoogleGenerativeAI("AIzaSyDOdl-PmkDKxdm4gZKrhU2dKmoIDsYylwA", { debug: true });
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

async function generateResponse(history) {
  const chat = model.startChat({ history, generationConfig: { maxOutputTokens: 100 } });
  const result = await chat.sendMessage(history[history.length - 1].parts[0].text);
  const response = await result.response;
  console.log(response)
  return response.text();

}

module.exports = { generateResponse };
