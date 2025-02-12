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


const Location = require("../models/Location");

// @desc    Create a new location
// @route   POST /api/locations
// @access  Public
exports.createLocation = async (req, res) => {
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
exports.getAllLocations = async (req, res) => {
  try {
    let { page = 1, limit = 10, name, allowCalls, status } = req.query;
    let query = { isDeleted: false }; // Exclude deleted locations

    // if (name) query.name = { $regex: new RegExp("^" + name + "$", "i") };
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
      pagination: {
        total: totalLocations,
        page,
        limit,
      },
    });
  } catch (error) {
    console.error("Error fetching locations:", error);
    res.status(500).json({ success: false, error: error.message || "Server Error" });
  }
};

// @desc    Get a single location by ID
// @route   GET /api/locations/:id
// @access  Private
exports.getLocationById = async (req, res) => {
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

// @desc    Update a location (only if not soft deleted)
// @route   PUT /api/locations/:id
// @access  Private
exports.updateLocation = async (req, res) => {
  try {
    const location = await Location.findOne({ _id: req.params.id, isDeleted: false });

    if (!location) {
      return res.status(404).json({ success: false, error: "Location not found or deleted" });
    }

    const updatedLocation = await Location.findByIdAndUpdate(req.params.id, req.body, {
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
exports.softDeleteLocation = async (req, res) => {
  try {
    const location = await Location.findOne({ _id: req.params.id, isDeleted: false });

    if (!location) {
      return res.status(404).json({ success: false, error: "Location not found or already deleted" });
    }

    await Location.findByIdAndUpdate(req.params.id, { isDeleted: true });

    res.status(200).json({ success: true, message: "Location deleted successfully" });
  } catch (error) {
    console.error("Error deleting location:", error);
    res.status(500).json({ success: false, error: error.message || "Server Error" });
  }
};

