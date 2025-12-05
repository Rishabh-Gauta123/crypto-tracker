import "./App.css";
import API from "./api";
import AddCoinForm from "./components/AddCoinForm";
import CoinList from "./components/CoinList";
import PriceChart from "./components/PriceChart";
import { useEffect, useState } from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";

function App() {
  const [coins, setCoins] = useState([]);
  const [prices, setPrices] = useState([]);

  const loadCoins = async () => {
    try {
      const res = await API.get("/coins");
      setCoins(res.data);
    } catch (err) {
      console.error("Error loading coins:", err);
    }
  };

  const loadPrices = async () => {
    try {
      const res = await API.get("/coins/prices");
      setPrices(res.data);
    } catch (err) {
      console.error("Error loading prices:", err);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      if (!isMounted) return;
      await loadCoins();
      await loadPrices();
    };

    init();

    const interval = setInterval(() => {
      loadPrices();
    }, 30000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Crypto Price Tracker
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <AddCoinForm onAdd={loadCoins} />
        </Grid>

        <Grid item xs={12} md={8}>
          <CoinList coins={coins} onDelete={loadCoins} />
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Live Prices</Typography>
            <PriceChart prices={prices} />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          {prices.map((p) =>
            p.crossed_threshold ? (
              <Typography
                key={p.symbol}
                variant="body1"
                color="success.main"
                fontWeight="bold"
              >
                {p.name} has crossed the threshold!
              </Typography>
            ) : null
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
