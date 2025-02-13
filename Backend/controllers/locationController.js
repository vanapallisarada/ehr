// const Location = require("../models/Location");

// // @desc    Create a new location
// // @route   POST /api/locations
// // @access  Public
// exports.createLocation = async (req, res) => {
//   try {
//     const newLocation = new Location(req.body);
//     const savedLocation = await newLocation.save();
//     res.status(201).json({ success: true, data: savedLocation });
//   } catch (error) {
//     console.error("Error creating location:", error);
//     res.status(500).json({ success: false, error: "Server Error" });
//   }
// };


// const Location = require("../models/Location");

// // @desc    Create a new location
// // @route   POST /api/locations
// // @access  Public
// exports.createLocation = async (req, res) => {
//   try {
//     const newLocation = new Location(req.body);
//     const savedLocation = await newLocation.save();
//     res.status(201).json({ success: true, data: savedLocation });
//   } catch (error) {
//     console.error("Error creating location:", error);
//     res.status(500).json({ success: false, error: "Server Error" });
//   }
// };

// // @desc    Get all locations
// // @route   GET /api/locations
// // @access  Private (requires authentication)
// exports.getAllLocations = async (req, res) => {
//   try {
//     const locations = await Location.find(); // Fetch all locations from the database
//     res.status(200).json({ success: true, data: locations });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: "Server Error" });
//   }
// };



// const Location = require("../models/Location");

// // @desc    Create a new location
// // @route   POST /api/locations
// // @access  Public
// exports.createLocation = async (req, res) => {
//   try {
//     const newLocation = new Location(req.body);
//     const savedLocation = await newLocation.save();
//     res.status(201).json({ success: true, data: savedLocation });
//   } catch (error) {
//     console.error("Error creating location:", error);
//     res.status(500).json({ success: false, error: "Server Error" });
//   }
// };

// // @desc    Get all locations with pagination, search, and filters
// // @route   GET /api/locations
// // @access  Private (requires authentication)
// exports.getAllLocations = async (req, res) => {
//   try {
//     let { page = 1, limit = 10, name, allowCalls, status } = req.query;
//     let query = { isDeleted: false }; // Exclude soft-deleted records

//     // Search by name (case-insensitive)
//     if (name) {
//       query.name = { $regex: new RegExp("^" + name + "$", "i") };
//     }

//     // Filter by allowCalls (true/false)
//     if (allowCalls !== undefined) {
//       query.allowCalls = allowCalls === "true";
//     }

//     // Filter by status (active/inactive)
//     if (status) {
//       query.status = status;
//     }

//     // Pagination
//     const locations = await Location.find(query)
//       .skip((page - 1) * limit)
//       .limit(Number(limit));

//     // Total count for pagination
//     const totalLocations = await Location.countDocuments(query);

//     res.status(200).json({
//       success: true,
//       data: locations,
//       pagination: {
//         total: totalLocations,
//         page: Number(page),
//         limit: Number(limit),
//       },
//     });
//   } catch (error) {
//     console.error("Error fetching locations:", error);
//     res.status(500).json({ success: false, error: "Server Error" });
//   }
// };

// // @desc    Get a single location by ID
// // @route   GET /api/locations/:id
// // @access  Private
// exports.getLocationById = async (req, res) => {
//   try {
//     const location = await Location.findOne({ _id: req.params.id, isDeleted: false });
//     if (!location) {
//       return res.status(404).json({ success: false, error: "Location not found" });
//     }
//     res.status(200).json({ success: true, data: location });
//   } catch (error) {
//     console.error("Error fetching location:", error);
//     res.status(500).json({ success: false, error: "Server Error" });
//   }
// };

// // @desc    Update a location
// // @route   PUT /api/locations/:id
// // @access  Private
// exports.updateLocation = async (req, res) => {
//   try {
//     const updatedLocation = await Location.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true, runValidators: true }
//     );

//     if (!updatedLocation) {
//       return res.status(404).json({ success: false, error: "Location not found" });
//     }

//     res.status(200).json({ success: true, data: updatedLocation });
//   } catch (error) {
//     console.error("Error updating location:", error);
//     res.status(500).json({ success: false, error: "Server Error" });
//   }
// };

// // @desc    Soft delete a location (hide instead of deleting)
// // @route   DELETE /api/locations/:id
// // @access  Private
// exports.softDeleteLocation = async (req, res) => {
//   try {
//     const location = await Location.findByIdAndUpdate(
//       req.params.id,
//       { isDeleted: true },
//       { new: true }
//     );

//     if (!location) {
//       return res.status(404).json({ success: false, error: "Location not found" });
//     }

//     res.status(200).json({ success: true, message: "Location deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting location:", error);
//     res.status(500).json({ success: false, error: "Server Error" });
//   }
// };


// const Location = require("../models/Location");
// // const LocationD = require('../models/locationModel');
//  // ✅ Ensure the model is imported

// // @desc    Create a new location
// // @route   POST /api/locations
// // @access  Public
// exports.createLocation = async (req, res) => {
//   try {
//     const newLocation = new Location(req.body);
//     const savedLocation = await newLocation.save();
//     res.status(201).json({ success: true, data: savedLocation });
//   } catch (error) {
//     console.error("Error creating location:", error);
//     res.status(500).json({ success: false, error: error.message || "Server Error" });
//   }
// };

// // @desc    Get all locations with pagination, search, and filters
// // @route   GET /api/locations
// // @access  Private
// exports.getAllLocations = async (req, res) => {
//   try {
//     let { page = 1, limit = 10, name, allowCalls, status } = req.query;
//     let query = { isDeleted: false }; // Exclude deleted locations

//     // if (name) query.name = { $regex: new RegExp("^" + name + "$", "i") };
//     if (name) {
//         query.name = { $regex: name, $options: "i" }; // Case-insensitive search
//       }
//     if (allowCalls !== undefined) query.allowCalls = allowCalls === "true";
//     if (status) query.status = status;

//     page = Number(page);
//     limit = Number(limit);

//     const locations = await Location.find(query)
//       .skip((page - 1) * limit)
//       .limit(limit);

//     const totalLocations = await Location.countDocuments(query);

//     res.status(200).json({
//       success: true,
//       data: locations,
//       pagination: {
//         total: totalLocations,
//         page,
//         limit,
//       },
//     });
//   } catch (error) {
//     console.error("Error fetching locations:", error);
//     res.status(500).json({ success: false, error: error.message || "Server Error" });
//   }
// };

// // @desc    Get a single location by ID
// // @route   GET /api/locations/:id
// // @access  Private
// exports.getLocationById = async (req, res) => {
//   try {
//     const location = await Location.findOne({ _id: req.params.id, isDeleted: false });

//     if (!location) {
//       return res.status(404).json({ success: false, error: "Location not found" });
//     }

//     res.status(200).json({ success: true, data: location });
//   } catch (error) {
//     console.error("Error fetching location:", error);
//     res.status(500).json({ success: false, error: error.message || "Server Error" });
//   }
// };

// // @desc    Update a location (only if not soft deleted)
// // @route   PUT /api/locations/:id
// // @access  Private
// // exports.updateLocation = async (req, res) => {
// //   try {
// //     const location = await Location.findOne({ _id: req.params.id, isDeleted: false });

// //     if (!location) {
// //       return res.status(404).json({ success: false, error: "Location not found or deleted" });
// //     }

// //     const updatedLocation = await Location.findByIdAndUpdate(req.params.id, req.body, {
// //       new: true,
// //       runValidators: true,
// //     });

// //     res.status(200).json({ success: true, data: updatedLocation });
// //   } catch (error) {
// //     console.error("Error updating location:", error);
// //     res.status(500).json({ success: false, error: error.message || "Server Error" });
// //   }
// // };

// exports.updateLocation = async (req, res) => {
//   try {
//     const locationId = req.params.id;
//     const { email, ...updateData } = req.body; // Extract email separately

//     // Check if the location exists and is not deleted
//     const location = await Location.findOne({ _id: locationId, isDeleted: false });
//     if (!location) {
//       return res.status(404).json({ success: false, error: "Location not found or deleted" });
//     }

//     // Check if the email is already used by another location
//     if (email) {
//       const existingLocation = await Location.findOne({ email });
//       if (existingLocation && existingLocation._id.toString() !== locationId) {
//         return res.status(400).json({ success: false, error: "Email already in use by another clinic" });
//       }
//       updateData.email = email; // Add email back only if it's valid
//     }

//     // Perform the update
//     const updatedLocation = await Location.findByIdAndUpdate(locationId, updateData, {
//       new: true,
//       runValidators: true,
//     });

//     res.status(200).json({ success: true, data: updatedLocation });
//   } catch (error) {
//     console.error("Error updating location:", error);
//     res.status(500).json({ success: false, error: error.message || "Server Error" });
//   }
// };


// // @desc    Soft delete a location (hide instead of deleting)
// // @route   DELETE /api/locations/:id
// // @access  Private
// // exports.softDeleteLocation = async (req, res) => {
// //   try {
// //     const location = await Location.findOne({ _id: req.params.id, isDeleted: false });

// //     if (!location) {
// //       return res.status(404).json({ success: false, error: "Location not found or already deleted" });
// //     }

// //     await Location.findByIdAndUpdate(req.params.id, { isDeleted: true });

// //     res.status(200).json({ success: true, message: "Location deleted successfully" });
// //   } catch (error) {
// //     console.error("Error deleting location:", error);
// //     res.status(500).json({ success: false, error: error.message || "Server Error" });
// //   }
// // };



// // app.delete('/api/locations/:id', async (req, res) => {
// //   try {
// //       const id = req.params.id;
// //       const result = await Location.findByIdAndUpdate(id, { deleted: true }, { new: true });

// //       if (!result) {
// //           return res.status(404).json({ message: "Location not found" });
// //       }

// //       res.status(200).json({ message: "Location soft deleted successfully" });
// //   } catch (error) {
// //       res.status(500).json({ message: "Server error", error: error.message });
// //   }
// // });



// const deleteLocation = async (req, res) => {
//   try {
//       const { id } = req.params;
//       const location = await Location.findById(id);
      
//       if (!location) {
//           return res.status(404).json({ message: "Location not found" });
//       }

//       // Soft delete by setting "deleted: true"
//       location.deleted = true;
//       await location.save();

//       res.status(200).json({ message: "Location deleted successfully" });
//   } catch (error) {
//       res.status(500).json({ message: "Server error", error: error.message });
//   }
// };


// module.exports = { deleteLocation };

// module.exports = { 
//   createLocation, 
//   getAllLocations, 
//   getLocationById, 
//   updateLocation, 
//   deleteLocation  // ✅ Ensure deleteLocation is exported
// };




// const Location = require("../models/Location");

// // @desc    Create a new location
// // @route   POST /api/locations
// // @access  Public
// exports.createLocation = async (req, res) => {
//   try {
//     const newLocation = new Location(req.body);
//     const savedLocation = await newLocation.save();
//     res.status(201).json({ success: true, data: savedLocation });
//   } catch (error) {
//     console.error("Error creating location:", error);
//     res.status(500).json({ success: false, error: error.message || "Server Error" });
//   }
// };

// // @desc    Get all locations with pagination, search, and filters
// // @route   GET /api/locations
// // @access  Private
// exports.getAllLocations = async (req, res) => {
//   try {
//     let { page = 1, limit = 10, name, allowCalls, status } = req.query;
//     let query = { isDeleted: false }; // Exclude deleted locations

//     if (name) {
//       query.name = { $regex: name, $options: "i" }; // Case-insensitive search
//     }
//     if (allowCalls !== undefined) query.allowCalls = allowCalls === "true";
//     if (status) query.status = status;

//     page = Number(page);
//     limit = Number(limit);

//     const locations = await Location.find(query)
//       .skip((page - 1) * limit)
//       .limit(limit);

//     const totalLocations = await Location.countDocuments(query);

//     res.status(200).json({
//       success: true,
//       data: locations,
//       pagination: {
//         total: totalLocations,
//         page,
//         limit,
//       },
//     });
//   } catch (error) {
//     console.error("Error fetching locations:", error);
//     res.status(500).json({ success: false, error: error.message || "Server Error" });
//   }
// };

// // @desc    Get a single location by ID
// // @route   GET /api/locations/:id
// // @access  Private
// exports.getLocationById = async (req, res) => {
//   try {
//     const location = await Location.findOne({ _id: req.params.id, isDeleted: false });

//     if (!location) {
//       return res.status(404).json({ success: false, error: "Location not found" });
//     }

//     res.status(200).json({ success: true, data: location });
//   } catch (error) {
//     console.error("Error fetching location:", error);
//     res.status(500).json({ success: false, error: error.message || "Server Error" });
//   }
// };

// // @desc    Update a location (only if not soft deleted)
// // @route   PUT /api/locations/:id
// // @access  Private
// exports.updateLocation = async (req, res) => {
//   try {
//     const locationId = req.params.id;
//     const { email, ...updateData } = req.body; // Extract email separately

//     // Check if the location exists and is not deleted
//     const location = await Location.findOne({ _id: locationId, isDeleted: false });
//     if (!location) {
//       return res.status(404).json({ success: false, error: "Location not found or deleted" });
//     }

//     // Check if the email is already used by another location
//     if (email) {
//       const existingLocation = await Location.findOne({ email });
//       if (existingLocation && existingLocation._id.toString() !== locationId) {
//         return res.status(400).json({ success: false, error: "Email already in use by another clinic" });
//       }
//       updateData.email = email; // Add email back only if it's valid
//     }

//     // Perform the update
//     const updatedLocation = await Location.findByIdAndUpdate(locationId, updateData, {
//       new: true,
//       runValidators: true,
//     });

//     res.status(200).json({ success: true, data: updatedLocation });
//   } catch (error) {
//     console.error("Error updating location:", error);
//     res.status(500).json({ success: false, error: error.message || "Server Error" });
//   }
// };

// // @desc    Soft delete a location (hide instead of deleting)
// // @route   DELETE /api/locations/:id
// // @access  Private
// // exports.deleteLocation = async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const location = await Location.findById(id);
    
// //     if (!location) {
// //       return res.status(404).json({ success: false, error: "Location not found" });
// //     }

// //     // Soft delete by setting "isDeleted: true"
// //     location.isDeleted = true;
// //     await location.save();

// //     res.status(200).json({ success: true, message: "Location deleted successfully" });
// //   } catch (error) {
// //     console.error("Error deleting location:", error);
// //     res.status(500).json({ success: false, error: error.message || "Server Error" });
// //   }
// // };


// // Ensure deleteLocation function is properly defined
// const deleteLocation = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const location = await Location.findById(id);

//     if (!location) {
//       return res.status(404).json({ message: "Location not found" });
//     }

//     // Soft delete by setting "deleted: true"
//     location.deleted = true;
//     await location.save();

//     res.status(200).json({ message: "Location deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// // ✅ Ensure all functions are properly exported
// module.exports = { 
//   createLocation, 
//   getAllLocations, 
//   getLocationById, 
//   updateLocation, 
//   deleteLocation // ✅ Ensure deleteLocation is included here
// };




const Location = require("../models/Location");

// @desc    Create a new location
// @route   POST /api/locations
// @access  Public
const createLocation = async (req, res) => {
  try {
    const newLocation = new Location(req.body);
    const savedLocation = await newLocation.save();
    res.status(201).json({ success: true, data: savedLocation });
  } catch (error) {
    console.error("Error creating location:", error);
    res.status(500).json({ success: false, error: error.message || "Server Error" });
  }
};

// @desc    Get all locations with pagination, search, and filters
// @route   GET /api/locations
// @access  Private
const getAllLocations = async (req, res) => {
  try {
    let { page = 1, limit = 10, name, allowCalls, status } = req.query;
    let query = { isDeleted: false };

    if (name) {
      query.name = { $regex: name, $options: "i" }; // Case-insensitive search
    }
    if (allowCalls !== undefined) query.allowCalls = allowCalls === "true";
    if (status) query.status = status;

    page = Number(page);
    limit = Number(limit);

    const locations = await Location.find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    const totalLocations = await Location.countDocuments(query);

    res.status(200).json({
      success: true,
      data: locations,
      pagination: { total: totalLocations, page, limit },
    });
  } catch (error) {
    console.error("Error fetching locations:", error);
    res.status(500).json({ success: false, error: error.message || "Server Error" });
  }
};

// @desc    Get a single location by ID
// @route   GET /api/locations/:id
// @access  Private
const getLocationById = async (req, res) => {
  try {
    const location = await Location.findOne({ _id: req.params.id, isDeleted: false });

    if (!location) {
      return res.status(404).json({ success: false, error: "Location not found" });
    }

    res.status(200).json({ success: true, data: location });
  } catch (error) {
    console.error("Error fetching location:", error);
    res.status(500).json({ success: false, error: error.message || "Server Error" });
  }
};

// @desc    Update a location
// @route   PUT /api/locations/:id
// @access  Private
const updateLocation = async (req, res) => {
  try {
    const locationId = req.params.id;
    const { email, ...updateData } = req.body;

    const location = await Location.findOne({ _id: locationId, isDeleted: false });
    if (!location) {
      return res.status(404).json({ success: false, error: "Location not found or deleted" });
    }

    if (email) {
      const existingLocation = await Location.findOne({ email });
      if (existingLocation && existingLocation._id.toString() !== locationId) {
        return res.status(400).json({ success: false, error: "Email already in use by another clinic" });
      }
      updateData.email = email;
    }

    const updatedLocation = await Location.findByIdAndUpdate(locationId, updateData, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, data: updatedLocation });
  } catch (error) {
    console.error("Error updating location:", error);
    res.status(500).json({ success: false, error: error.message || "Server Error" });
  }
};

// @desc    Soft delete a location (hide instead of deleting)
// @route   DELETE /api/locations/:id
// @access  Private
const deleteLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);

    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }

    // Soft delete by setting "isDeleted: true"
    location.isDeleted = true;
    await location.save();

    res.status(200).json({ message: "Location deleted successfully" });
  } catch (error) {
    console.error("Error deleting location:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Ensure all functions are properly exported
module.exports = { 
  createLocation, 
  getAllLocations, 
  getLocationById, 
  updateLocation, 
  deleteLocation 
};
