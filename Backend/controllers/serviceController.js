// controllers/serviceController.js

const ServiceLocation = require("../models/ServiceLocation");

// Create Service Location
exports.createServiceLocation = async (req, res) => {
  try {
    const newLocation = new ServiceLocation(req.body);
    await newLocation.save();
    res.status(201).json({ success: true, data: newLocation });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get All Service Locations
exports.getAllServiceLocations = async (req, res) => {
  try {
    const locations = await ServiceLocation.find();
    res.json({ success: true, data: locations });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get Single Service Location by ID
exports.getServiceLocationById = async (req, res) => {
  try {
    const location = await ServiceLocation.findById(req.params.id);
    if (!location) {
      return res.status(404).json({ success: false, error: "Location not found" });
    }
    res.json({ success: true, data: location });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update Service Location
exports.updateServiceLocation = async (req, res) => {
  try {
    const updatedLocation = await ServiceLocation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLocation) {
      return res.status(404).json({ success: false, error: "Location not found" });
    }
    res.json({ success: true, data: updatedLocation });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete Service Location (Soft Delete)
exports.deleteServiceLocation = async (req, res) => {
  try {
    const location = await ServiceLocation.findByIdAndUpdate(req.params.id, { status: "inactive" }, { new: true });
    if (!location) {
      return res.status(404).json({ success: false, error: "Location not found" });
    }
    res.json({ success: true, message: "Location marked as inactive" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
