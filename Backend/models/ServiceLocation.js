const mongoose = require('mongoose');

const ServiceLocationSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 50, match: /^[A-Za-z]/ },
  email: { type: String, required: true, match: /^\S+@\S+\.\S+$/ },
  mobile_phone: { type: String, required: true, maxlength: 10, match: /^[0-9]{10}$/ },
  address_line_1: { type: String, required: true, maxlength: 40 },
  address_line_2: { type: String, maxlength: 100 },
  city: { type: String, required: true, maxlength: 35 },
  state: { type: String, required: true, maxlength: 20 },
  zipcode: { type: String, required: true, match: /^[0-9]{5}(?:-[0-9]{4})?$/ },
  country: { type: String, default: 'US' },
  notes: { type: String },
  activeFromDate: { type: Date, required: true },
  allowCalls: { type: Boolean, default: false },
  status: { type: String, enum: ['active', 'inactive'], required: true },
});

module.exports = mongoose.model('ServiceLocation', ServiceLocationSchema);
