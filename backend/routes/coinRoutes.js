import express from "express";
import {
  addCoin,
  getCoins,
  updateCoin,
  deleteCoin,
  getPrices
} from "../controllers/coinControllers.js";


const router = express.Router();

router.post("/", addCoin);
router.get("/", getCoins);
router.put("/:id", updateCoin);
router.delete("/:id", deleteCoin);

router.get("/prices", getPrices);

export default router;