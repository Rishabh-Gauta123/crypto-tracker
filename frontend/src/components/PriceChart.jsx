import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function PriceChart({ prices }) {
  const labels = prices.map((p) => p.symbol.toUpperCase());
  const values = prices.map((p) => p.current_price);

  const data = {
    labels,
    datasets: [
      {
        label: "Current Price (USD)",
        data: values,
        backgroundColor: "#1976d2",
      },
    ],
  };

  return <Bar data={data} />;
}
