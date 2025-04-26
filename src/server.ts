const express = require('express');
const payload = require('payload');
const path = require('path');
const config = require('./payload.config');
import { Request, Response } from 'express';

const app = express();

// Redirect root to Admin panel
app.get('/', (_: Request, res: Response) => {
  res.redirect('/admin');
});

// Initialize Payload
payload.init({
  express: app,
  config,
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key',
  onInit: async () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// Add your own express routes here
app.use('/api', (req: Request, res: Response) => {
  res.json({ message: 'API endpoint' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 