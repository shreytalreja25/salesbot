const { OpenAI } = require('openai');
const Product = require('./models/Product');
require('dotenv').config(); // Load environment variables from .env file

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Use API key from environment variables
});

async function fetchAllProductDetails() {
  try {
    console.log('Fetching all product details');
    const productDetails = await Product.find();
    console.log('All product details fetched:', productDetails);
    return productDetails;
  } catch (error) {
    console.error('Error fetching product details:', error);
    return null;
  }
}

async function generateInitialBotResponse(lead) {
  try {
    const productDetails = await fetchAllProductDetails();
    console.log('Product details for lead:', productDetails);

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: "system", content: `The following are the details of all products: ${JSON.stringify(productDetails)}` },
        { role: "user", content: lead.message }
      ]
    });
    console.log('OpenAI response:', response);

    const botMessage = response.choices[0].message.content;
    console.log('Generated bot message:', botMessage);
    return botMessage;
  } catch (error) {
    console.error('Error generating initial bot response:', error);
    return 'Sorry, there was an error generating the response.';
  }
}

module.exports = {
  openai,
  fetchAllProductDetails,
  generateInitialBotResponse
};
