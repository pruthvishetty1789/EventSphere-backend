import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// route imports
import eventRoutes from "./routes/eventRoutes.js";
import registerRoutes from "./routes/registerRoutes.js";

dotenv.config();

const app = express();

/* ---------- MIDDLEWARE ---------- */
app.use(cors());
app.use(express.json());

/* ---------- TEST ROUTE ---------- */
app.get("/", (req, res) => {
  res.send("EventSphere API is running...");
});

/* ---------- API ROUTES ---------- */
app.use("/api/events", eventRoutes);
app.use("/api/register", registerRoutes);

/* ---------- DATABASE ---------- */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));

/* ---------- SERVER ---------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});