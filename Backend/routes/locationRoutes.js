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

// const express = require("express");
// const { deleteLocation } = require('../controllers/locationController'); //aded for delete 
// const router = express.Router();

// const {
//   createLocation,
//   getAllLocations,
//   getLocationById,
//   updateLocation,
//   // softDeleteLocation,
//   // deleteLocation 
  
// } = require("../controllers/locationController");

// // @route   POST /api/locations
// // @desc    Create a new location
// // @access  Public


// router.post("/", createLocation); 


// // Route for creating a new location
// // router.post('/api/locations', createLocation);
// // @route   GET /api/locations
// // @desc    Get all locations with pagination, search, and filters
// // @access  Private
// router.get("/", getAllLocations);

// // @route   GET /api/locations/:id
// // @desc    Get a single location by ID
// // @access  Private
// router.get("/:id", getLocationById);

// // @route   PUT /api/locations/:id
// // @desc    Update a location
// // @access  Private
// router.put("/:id", updateLocation);

// // @route   DELETE /api/locations/:id
// // @desc    Soft delete a location
// // @access  Private
// // router.delete("/:id", softDeleteLocation);

// // router.delete('/locations/:id', async (req, res) => {
// //   try {
// //       const locationId = req.params.id;
// //       const deletedLocation = await Location.findByIdAndDelete(locationId);
// //       if (!deletedLocation) {
// //           return res.status(404).json({ message: 'Location not found' });
// //       }
// //       res.json({ message: 'Location deleted successfully' });
// //   } catch (error) {
// //       res.status(500).json({ message: 'Error deleting location', error });
// //   }
// // });


// // DELETE location by ID (Soft delete)
// // router.delete('/:id', deleteLocation); // ✅ This should work

// router.delete("/:id", deleteLocation);



// module.exports = router;


// const express = require("express");
// // const { deleteLocation } = require("../controllers/locationController"); // Added for delete
// const router = express.Router();

// const {
//   createLocation,
//   getAllLocations,
//   getLocationById,
//   updateLocation,
//   // softDeleteLocation,
//   deleteLocation 
// } = require("../controllers/locationController");

// // @route   POST /api/locations
// // @desc    Create a new location
// // @access  Public
// router.post("/", createLocation);

// // Route for creating a new location
// // router.post('/api/locations', createLocation);

// // @route   GET /api/locations
// // @desc    Get all locations with pagination, search, and filters
// // @access  Private
// router.get("/", getAllLocations);

// // @route   GET /api/locations/:id
// // @desc    Get a single location by ID
// // @access  Private
// router.get("/:id", getLocationById);

// // @route   PUT /api/locations/:id
// // @desc    Update a location
// // @access  Private
// router.put("/:id", updateLocation);

// // @route   DELETE /api/locations/:id
// // @desc    Soft delete a location
// // @access  Private
// // router.delete("/:id", softDeleteLocation);

// // router.delete('/locations/:id', async (req, res) => {
// //   try {
// //       const locationId = req.params.id;
// //       const deletedLocation = await Location.findByIdAndDelete(locationId);
// //       if (!deletedLocation) {
// //           return res.status(404).json({ message: 'Location not found' });
// //       }
// //       res.json({ message: 'Location deleted successfully' });
// //   } catch (error) {
// //       res.status(500).json({ message: 'Error deleting location', error });
// //   }
// // });

// // DELETE location by ID (Soft delete)
// // router.delete('/:id', deleteLocation); // ✅ This should work

// router.delete("/:id", deleteLocation);

// module.exports = router;




const express = require("express");
const router = express.Router();

const { 
  createLocation,
  getAllLocations,
  getLocationById,
  updateLocation,
  deleteLocation
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
router.delete("/:id", deleteLocation);

module.exports = router;
