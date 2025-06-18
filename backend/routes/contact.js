// routes/contact.js

import express from 'express';
import ContactMessage from '../models/ContactMessage.js';

const router = express.Router();

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  try {
    const newMsg = new ContactMessage({ name, email, message });
    await newMsg.save();
    res.status(200).json({ success: true, message: 'Message submitted successfully' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ success: false, message: 'Server error, try again later' });
  }
});

export default router;
