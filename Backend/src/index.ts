import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test-Route
app.get("/", (req, res) => {
  res.send("FinanceBuilder Backend läuft 🚀");
});

// Port und MongoDB-Verbindung
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI!;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB verbunden");
    app.listen(PORT, () => console.log(`🌐 Server läuft auf Port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB-Fehler:", err));