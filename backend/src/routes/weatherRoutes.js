const express = require('express');
const router = express.Router();
const aggregationService = require('../services/aggregationService');

// Fetch weather summaries
router.get('/', async (req, res) => {
  try {
    console.log('Received request to fetch weather summaries');
    
    const summaries = await aggregationService.generateDailySummary(new Date()); // Logs for query
    
    console.log('Weather summaries generated:', summaries); // Check if summaries are retrieved
    
    res.json(summaries);
  } catch (error) {
    console.error('Error in /weather route:', error.message);
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
