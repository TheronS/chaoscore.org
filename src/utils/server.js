import 'dotenv/config';
import express from 'express';

const app = express();
const port = 3000; // Set your desired port

app.use('/webhooks/discord', require('./routes/webhooks/discord'));

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is listening on http://0.0.0.0:${port}`);
  });