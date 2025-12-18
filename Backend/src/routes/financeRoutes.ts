import express from "express";
import Finance from "../models/financeModel";

const router = express.Router();

// Alle Einträge eines Users abrufen
router.get("/:userId", async (req, res) => {
  try {
    const finances = await Finance.find({ userId: req.params.userId });
    res.json(finances);
  } catch (err) {
    res.status(500).json({ error: "Fehler beim Laden" });
  }
});

// Eintrag hinzufügen
router.post("/", async (req, res) => {
  try {
    const newFinance = new Finance(req.body);
    await newFinance.save();
    res.status(201).json({ message: "Eintrag gespeichert ✅" });
  } catch (err) {
    res.status(500).json({ error: "Speichern fehlgeschlagen" });
  }
});

export default router;