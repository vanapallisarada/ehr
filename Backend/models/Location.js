// const mongoose = require("mongoose");

// const LocationSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   mobile_phone: { type: String, required: true },
//   address_line_1: { type: String, required: true },
//   address_line_2: { type: String },
//   city: { type: String, required: true },
//   state: { type: String, required: true },
//   zipcode: { type: String, required: true },
//   country: { type: String, required: true },
//   notes: { type: String },
//   activeFromDate: { type: Date, required: true },
//   allowCalls: { type: Boolean, required: true },
//   status: { type: String, required: true },
// });

// module.exports = mongoose.model("Location", LocationSchema);


const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile_phone: { type: String, required: true },
  address_line_1: { type: String, required: true },
  address_line_2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: true },
  country: { type: String, required: true },
  notes: { type: String },
  activeFromDate: { type: Date, required: true },
  allowCalls: { type: Boolean, default: false },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
  isDeleted: { type: Boolean, default: false }  // ✅ Ensure this field exists
});

module.exports = mongoose.model("Location", LocationSchema);
