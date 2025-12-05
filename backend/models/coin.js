import mongoose from "mongoose";

const coinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  threshold_price: {
    type: Number,
    required: true,
  },
  current_price: {
    type: Number,
    default: 0,
  },
  last_updated: { type: Date },
});

export const Coin = mongoose.model("Coin", coinSchema);
