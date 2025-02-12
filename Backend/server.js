// const express = require('express');
// const connectDB = require('./config/db');
// require('dotenv').config();

// const app = express();
// app.use(express.json());

// connectDB();

// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/services', require('./routes/serviceRoutes'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB Atlas securely
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Connected Successfully"))
//   .catch((err) => console.error("MongoDB Connection Error:", err));

// app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });


// require("dotenv").config(); // Load environment variables

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// const PORT = process.env.PORT || 5000; // Default to 5000 if undefined

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected Successfully"))
//   .catch((err) => console.error("MongoDB Connection Error:", err));

// // Start Server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// require("dotenv").config(); // Load environment variables

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Import Routes
// const authRoutes = require("./routes/authRoutes"); // ✅ Import auth routes

// app.use("/api/auth", authRoutes); // ✅ Add authentication routes

// const PORT = process.env.PORT || 5000;

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("✅ MongoDB Connected Successfully"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// // Start Server
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const authRoutes = require("./routes/authRoutes");

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use("/api/auth", authRoutes);

// const PORT = process.env.PORT || 5000;

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected Successfully"))
//   .catch((err) => console.error("MongoDB Connection Error:", err));

// // Start Server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const authRoutes = require("./routes/authRoutes");

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error("MongoDB Connection Error:", err));

// app.use("/api/auth", authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");


dotenv.config();

const authRoutes = require("./routes/authRoutes");
const locationRoutes = require("./routes/locationRoutes"); // Make sure this is added
// const locationRoutes = require("./routes/locationRoutes"); // Adjust path as needed

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/locations", locationRoutes); // Register the locations route

// app.use('/api/locations', require('./routes/locations'));


// app.use("/api/users", authRoutes); // ✅ Ensure this is correct

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
