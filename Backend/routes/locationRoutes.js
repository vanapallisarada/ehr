// const express = require("express");
// const router = express.Router();
// const locationController = require("../controllers/locationController");

// // @route   POST /api/locations
// // @desc    Add a new location
// // @access  Public
// router.post("/", locationController.createLocation);

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const { createLocation, getAllLocations } = require("../controllers/locationController");

// // @route   POST /api/locations
// // @desc    Add a new location
// // @access  Public
// router.post("/", createLocation);

// // @route   GET /api/locations
// // @desc    Get all locations
// // @access  Private (requires authentication)
// router.get("/", getAllLocations);

// module.exports = router;



// const express = require("express");
// const router = express.Router();
// const {
//   createLocation,
//   getAllLocations,
//   getLocationById,
//   updateLocation,
//   softDeleteLocation,
// } = require("../controllers/locationController");

// // @route   POST /api/locations
// // @desc    Add a new location
// // @access  Public
// router.post("/", createLocation);

// // @route   GET /api/locations
// // @desc    Get all locations (Pagination, Search, Filters)
// // @access  Private (requires authentication)
// router.get("/", getAllLocations);

// // @route   GET /api/locations/:id
// // @desc    Get a location by ID
// // @access  Private
// router.get("/:id", getLocationById);

// // @route   PUT /api/locations/:id
// // @desc    Update a location
// // @access  Private
// router.put("/:id", updateLocation);

// // @route   DELETE /api/locations/:id
// // @desc    Soft delete a location
// // @access  Private
// router.delete("/:id", softDeleteLocation);

// module.exports = router;

const express = require("express");
const router = express.Router();
const {
  createLocation,
  getAllLocations,
  getLocationById,
  updateLocation,
  softDeleteLocation,
} = require("../controllers/locationController");

// @route   POST /api/locations
// @desc    Create a new location
// @access  Public
router.post("/", createLocation);

// @route   GET /api/locations
// @desc    Get all locations with pagination, search, and filters
// @access  Private
router.get("/", getAllLocations);

// @route   GET /api/locations/:id
// @desc    Get a single location by ID
// @access  Private
router.get("/:id", getLocationById);

// @route   PUT /api/locations/:id
// @desc    Update a location
// @access  Private
router.put("/:id", updateLocation);

// @route   DELETE /api/locations/:id
// @desc    Soft delete a location
// @access  Private
router.delete("/:id", softDeleteLocation);

module.exports = router;
