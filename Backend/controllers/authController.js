// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// exports.registerUser = async (req, res) => {
//   try {
//     const { first_name, last_name, email, password } = req.body;

//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ success: false, error: 'Email already exists' });

//     user = new User({ first_name, last_name, email, password });
//     await user.save();

//     res.status(201).json({ success: true, message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ success: false, error: 'Server Error' });
//   }
// };

// exports.loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ success: false, error: 'Invalid email or password' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ success: false, error: 'Invalid email or password' });

//     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.json({ success: true, token });
//   } catch (error) {
//     res.status(500).json({ success: false, error: 'Server Error' });
//   }
// };



// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { body, validationResult } = require("express-validator");

// // @desc Register a new user
// // @route POST /api/auth/register
// // @access Public
// exports.registerUser = async (req, res) => {
//   // Validate request body
//   await Promise.all([
//     body("first_name")
//       .notEmpty()
//       .withMessage("First name is required")
//       .isLength({ max: 35 })
//       .withMessage("First name cannot exceed 35 characters")
//       .matches(/^[A-Za-z]+$/)
//       .withMessage("First name must contain only alphabets")
//       .run(req),

//     body("last_name")
//       .notEmpty()
//       .withMessage("Last name is required")
//       .isLength({ max: 35 })
//       .withMessage("Last name cannot exceed 35 characters")
//       .matches(/^[A-Za-z]+$/)
//       .withMessage("Last name must contain only alphabets")
//       .run(req),

//     body("email")
//       .notEmpty()
//       .withMessage("Email is required")
//       .isEmail()
//       .withMessage("Invalid email format")
//       .run(req),

//     body("password")
//       .notEmpty()
//       .withMessage("Password is required")
//       .isLength({ max: 8 })
//       .withMessage("Password must not exceed 8 characters")
//       .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8}$/)
//       .withMessage(
//         "Password must contain at least one uppercase letter, one special character, and one number"
//       )
//       .run(req),
//   ]);

//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ success: false, error: errors.array() });
//   }

//   try {
//     const { first_name, last_name, email, password } = req.body;

//     let user = await User.findOne({ email });
//     if (user) {
//       return res
//         .status(400)
//         .json({ success: false, error: "Email already exists" });
//     }

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create user
//     user = new User({
//       first_name,
//       last_name,
//       email: email.toLowerCase(),
//       password: hashedPassword,
//       createdDate: new Date().toISOString(),
//       updatedDate: new Date().toISOString(),
//     });

//     await user.save();

//     res
//       .status(201)
//       .json({ success: true, message: "User registered successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: "Server Error" });
//   }
// };

// // @desc Login user
// // @route POST /api/auth/login
// // @access Public
// exports.loginUser = async (req, res) => {
//   // Validate request body
//   await Promise.all([
//     body("email").notEmpty().withMessage("Email is required").isEmail().run(req),
//     body("password").notEmpty().withMessage("Password is required").run(req),
//   ]);

//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ success: false, error: errors.array() });
//   }

//   try {
//     const { email, password } = req.body;

//     // Find user by email (case-insensitive)
//     const user = await User.findOne({ email: email.toLowerCase() });
//     if (!user) {
//       return res
//         .status(400)
//         .json({ success: false, error: "Invalid email or password" });
//     }

//     // Compare passwords
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res
//         .status(400)
//         .json({ success: false, error: "Invalid email or password" });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     res.json({ success: true, token, userId: user.id });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: "Server Error" });
//   }
// };



const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

// @desc Register a new user
exports.registerUser = async (req, res) => {
  await Promise.all([
    body("first_name")
      .notEmpty()
      .withMessage("First name is required")
      .isLength({ max: 35 })
      .withMessage("First name cannot exceed 35 characters")
      .matches(/^[A-Za-z]+$/)
      .withMessage("First name must contain only alphabets")
      .run(req),

    body("last_name")
      .notEmpty()
      .withMessage("Last name is required")
      .isLength({ max: 35 })
      .withMessage("Last name cannot exceed 35 characters")
      .matches(/^[A-Za-z]+$/)
      .withMessage("Last name must contain only alphabets")
      .run(req),

    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email format")
      .run(req),

    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ max: 8 })
      .withMessage("Password must not exceed 8 characters")
      .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8}$/)
      .withMessage(
        "Password must contain at least one uppercase letter, one special character, and one number"
      )
      .run(req),
  ]);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, error: errors.array() });
  }

  try {
    const { first_name, last_name, email, password } = req.body;

    let user = await User.findOne({ email: email.toLowerCase() });
    if (user) {
      return res
        .status(400)
        .json({ success: false, error: "Email already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    user = new User({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: hashedPassword,
      createdDate: new Date().toISOString(),
      updatedDate: new Date().toISOString(),
    });

    await user.save();

    res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login Attempt:", email);

    const user = await User.findOne({ email: email.toLowerCase() });
    console.log("User Found:", user);

    if (!user) {
      console.log("User not found");
      return res.status(400).json({ success: false, error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password Match:", isMatch);

    if (!isMatch) {
      console.log("Incorrect Password");
      return res.status(400).json({ success: false, error: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ success: true, token, userId: user.id });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
