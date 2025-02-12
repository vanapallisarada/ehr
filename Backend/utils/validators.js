// utils/validators.js

const { body, validationResult } = require("express-validator");

// Registration Validations
const validateRegistration = [
  body("first_name")
    .notEmpty().withMessage("First name is required")
    .isLength({ max: 35 }).withMessage("First name must be max 35 characters")
    .matches(/^[A-Za-z]+$/).withMessage("First name must start with alphabets only"),
  
  body("last_name")
    .notEmpty().withMessage("Last name is required")
    .isLength({ max: 35 }).withMessage("Last name must be max 35 characters")
    .matches(/^[A-Za-z]+$/).withMessage("Last name must start with alphabets only"),
  
  body("email")
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email format"),
  
  body("password")
    .notEmpty().withMessage("Password is required")
    .isLength({ max: 8 }).withMessage("Password must be max 8 characters")
    .matches(/(?=.*[A-Z])/).withMessage("Password must have at least one uppercase letter")
    .matches(/(?=.*[!@#$%^&*])/).withMessage("Password must have at least one special character")
    .matches(/(?=.*[0-9])/).withMessage("Password must have at least one number")
];

// Login Validations
const validateLogin = [
  body("email").notEmpty().withMessage("Email is required"),
  body("password").notEmpty().withMessage("Password is required"),
];

// Service Location Validations
const validateServiceLocation = [
  body("name")
    .notEmpty().withMessage("Name is required")
    .isLength({ max: 50 }).withMessage("Max length 50 characters")
    .matches(/^[A-Za-z]/).withMessage("Name must start with alphabets"),

  body("email")
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email format"),

  body("mobile_phone")
    .notEmpty().withMessage("Mobile phone is required")
    .isLength({ min: 10, max: 10 }).withMessage("Must be exactly 10 digits")
    .matches(/^[0-9]+$/).withMessage("Mobile must contain numbers only"),

  body("address_line_1")
    .notEmpty().withMessage("Address Line 1 is required")
    .isLength({ max: 40 }).withMessage("Max 40 characters"),

  body("city")
    .notEmpty().withMessage("City is required")
    .isLength({ max: 35 }).withMessage("Max 35 characters"),

  body("state")
    .notEmpty().withMessage("State is required")
    .isLength({ max: 20 }).withMessage("Max 20 characters"),

  body("zipcode")
    .notEmpty().withMessage("Zipcode is required")
    .matches(/^\d{5}(\d{4})?$/).withMessage("Zipcode must be 5 or 9 digits"),

  body("activeFromDate")
    .notEmpty().withMessage("Active From Date is required")
    .isISO8601().toDate().withMessage("Invalid date format"),

  body("status")
    .notEmpty().withMessage("Status is required")
    .isIn(["active", "inactive"]).withMessage("Status must be 'active' or 'inactive'")
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

module.exports = { validateRegistration, validateLogin, validateServiceLocation, validate };
