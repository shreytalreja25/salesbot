const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const { generateInitialBotResponse } = require('../openai');

router.post('/', async (req, res) => {
  const { name, phone, email, product, message } = req.body;

  try {
    const newLead = new Lead({ name, phone, email, product, message });
    await newLead.save();
    console.log('Lead saved:', newLead);

    // Trigger chatbot message
    const botResponse = await generateInitialBotResponse(newLead);
    console.log('Generated bot response:', botResponse);

    res.status(201).json({ lead: newLead, botResponse });
  } catch (error) {
    console.error('Error saving lead:', error);
    res.status(500).json({ error: 'Error saving lead' });
  }
});

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const Lead = require('../models/Lead');
// const { fetchProductDetails, generateInitialBotResponse } = require('../openai');

// router.post('/', async (req, res) => {
//   const { name, phone, email, product, message } = req.body;

//   try {
//     const newLead = new Lead({ name, phone, email, product, message });
//     await newLead.save();
//     console.log('Lead saved:', newLead);

//     // Trigger chatbot message
//     const botResponse = await generateInitialBotResponse(newLead);
//     console.log('Generated bot response:', botResponse);

//     res.status(201).json({ lead: newLead, botResponse });
//   } catch (error) {
//     console.error('Error saving lead:', error);
//     res.status(500).json({ error: 'Error saving lead' });
//   }
// });

// module.exports = router;
