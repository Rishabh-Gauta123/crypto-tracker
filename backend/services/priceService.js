import axios from "axios";
import { Coin } from "../models/coin.js";

export const updatePrices = async () => {
  const coins = await Coin.find();
  if (coins.length === 0) return;

  const symbols = coins.map(c => c.symbol.toLowerCase()).join(",");

  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${symbols}&vs_currencies=usd`;

  const { data } = await axios.get(url);
console.log("data:", data);

  for (let coin of coins) {
    const price = data[coin.symbol.toLowerCase()]?.usd || 0;

    coin.current_price = price;
    coin.last_updated = new Date();

    await coin.save();
  }

  console.log("Prices updated Successfully");
};
