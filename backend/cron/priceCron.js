import cron from "node-cron";
import { updatePrices } from "../services/priceService.js";

cron.schedule("*/5 * * * *", async () => {
  console.log("Cron Job Running...");
  await updatePrices();
});