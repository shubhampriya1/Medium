// Import required modules

import express from "express";

import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./lib/db.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

const PORT = process.env.PORT || 8080;

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
