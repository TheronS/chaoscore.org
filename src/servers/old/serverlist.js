// Import necessary modules
import express from 'express';
const app = express();
import huffmanQuery from '../huffman.js' // Adjust the path accordingly

// Endpoint to handle the query
app.get('/serverlist', (req, res) => {
  // Your Huffman query logic goes here
  const queryResult = huffmanQuery.performQuery(); // Adjust this based on your logic

  // Send the result as JSON
  res.json(queryResult);
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
