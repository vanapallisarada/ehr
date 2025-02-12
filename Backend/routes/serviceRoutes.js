const express = require('express');
const { createServiceLocation, getServiceLocations } = require('../controllers/serviceController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createServiceLocation);
router.get('/', authMiddleware, getServiceLocations);

module.exports = router;
