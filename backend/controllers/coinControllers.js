import { Coin } from "../models/coin.js";
import { updatePrices } from "../services/priceService.js";

export const addCoin = async (req, res) => {
  try {
    const coin = await Coin.create(req.body);
    res.json(coin);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCoins = async (req, res) => {
  const coins = await Coin.find();
  res.json(coins);
};

export const updateCoin = async (req, res) => {
  const coin = await Coin.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(coin);
};

export const deleteCoin = async (req, res) => {
  await Coin.findByIdAndDelete(req.params.id);
  res.json({ message: "Coin removed" });
};

export const getPrices = async (req, res) => {
  await updatePrices();
  const coins = await Coin.find();

  const result = coins.map(c => ({
    name: c.name,
    symbol: c.symbol,
    current_price: c.current_price,
    last_updated: c.last_updated,
    crossed_threshold: c.current_price >= c.threshold_price
  }));

  res.json(result);
};
