const express = require('express');
const app = express();
const port = 3000; // Set your desired port

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle POST requests from Palworld
app.post('/webhooks', (req, res) => {
  // Assuming Palworld sends JSON data in the request body
  const { content, embed } = req.body;
  // Process the data as needed
  console.log('Received webhook from Palworld:', { content, embed });
  const { title, description, color } = embed;
  console.log('Embed info:', { title, description, color });
  // Respond to Palworld
  res.send('Webhook received successfully');
});

// Route to handle Discord interactions
app.post('/webhooks', (req, res) => {
    const { type, data } = req.body;
    // Handle different types of Discord interactions
    if (type === 'PING') {
      // Respond to verification requests
      res.json({ type: 1 });
    } else if (type === 'APPLICATION_COMMAND') {
      // Handle slash commands
      const { name } = data;
      if (name === 'test') {
        res.json({
          type: 4,
          data: {
            content: 'hello world',
          },
        });
      }
    }
  });

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });