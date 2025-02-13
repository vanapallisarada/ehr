// const express = require('express');
// const { registerUser, loginUser } = require('../controllers/authController');
// const { validateUser } = require('../utils/validators');

// const router = express.Router();

// router.post('/register', validateUser, registerUser);
// router.post('/login', loginUser);

// module.exports = router;


// const express = require("express");
// const { registerUser, loginUser } = require("../controllers/authController");

// const router = express.Router();

// router.post("/register", registerUser); // ✅ Register Route
// router.post("/login", loginUser); // ✅ Login Route

// module.exports = router;

const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);



module.exports = router;
