// backend/src/routes/dataRoutes.js

const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// GET request to fetch data
router.get('/', dataController.getData);

// POST request to add data
router.post('/add', dataController.addData);

module.exports = router;
