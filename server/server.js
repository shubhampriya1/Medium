// Import required modules

import express from "express";

import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./lib/db.js";

// Load environment variables
dotenv.config();

// Create an instance of Express
const app = express();

// Set up middleware
app.use(cors());
app.use(express.json());

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const PORT = process.env.PORT || 8080;

// create a IIFF function to start the server
(async () => {
  connectDB()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB", error);
    });
})();
