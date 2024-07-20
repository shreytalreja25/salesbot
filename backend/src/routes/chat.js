const express = require('express');
const router = express.Router();
const { openai, fetchAllProductDetails } = require('../openai');

router.post('/', async (req, res) => {
  const { message } = req.body;

  try {
    // Fetch all product details
    const products = await fetchAllProductDetails();
    const productDetails = products.map(product => ({
      name: product.name,
      category: product.category,
      price: product.price,
      description: product.description,
      stock: product.stock
    }));

    // Create the system message with product details
    const systemMessage = {
      role: "system",
      content: `The following are the details of all products: ${JSON.stringify(productDetails)}`
    };

    // Send the user message along with product details to OpenAI
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [systemMessage, { role: "user", content: message }]
    });

    const botMessage = response.choices[0].message.content;
    res.status(200).json({ message: botMessage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch response from OpenAI' });
  }
});

module.exports = router;
