require("dotenv").config();  // Load environment variables
const mongoose = require("mongoose");
const Location = require("../models/Location");

// 🔹 Connect to MongoDB using `.env` file
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log("Connected to MongoDB...");

    // 🔹 Update all records to include `isDeleted: false`
    const result = await Location.updateMany({}, { $set: { isDeleted: false } });

    console.log(`Updated ${result.modifiedCount} records.`);
    mongoose.connection.close();
  })
  .catch(err => console.error("MongoDB connection error:", err));
