// Import necessary modules or files
import express from 'express';
import { createServer } from 'http';

// Create an Express app
const app: express.Application = express();

// Define routes or middleware
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello, World!');
});

// Set up a basic HTTP server using Node's http module
const server = createServer(app);

// Define the port to listen on
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

