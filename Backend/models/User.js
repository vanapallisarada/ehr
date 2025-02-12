// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const UserSchema = new mongoose.Schema({
//   first_name: { type: String, required: true, maxlength: 35, match: /^[A-Za-z]+$/ },
//   last_name: { type: String, required: true, maxlength: 35, match: /^[A-Za-z]+$/ },
//   email: { type: String, required: true, unique: true, lowercase: true, match: /^\S+@\S+\.\S+$/ },
//   password: { type: String, required: true },
//   createdDate: { type: Date, default: Date.now },
//   updatedDate: { type: Date, default: Date.now },
// });

// // Hash password before saving
// UserSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// module.exports = mongoose.model('User', UserSchema);


const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  first_name: { type: String, required: true, maxlength: 35 },
  last_name: { type: String, required: true, maxlength: 35 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdDate: { type: String, default: new Date().toISOString() },
  updatedDate: { type: String, default: new Date().toISOString() },
});

module.exports = mongoose.model("User", UserSchema);
