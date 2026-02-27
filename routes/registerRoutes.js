import express from "express";
import Registration from "../models/Registration.js";

const router = express.Router();

/* REGISTER FOR EVENT */
router.post("/", async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;