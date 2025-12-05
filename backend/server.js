import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import coinRoutes from "./routes/coinRoutes.js";
import "./cron/priceCron.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();
const PORT=process.env.PORT

app.use("/api/coins", coinRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
