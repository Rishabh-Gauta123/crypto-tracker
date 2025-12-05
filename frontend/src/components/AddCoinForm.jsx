import { useState } from "react";
import { Paper, Stack, TextField, Button, Typography } from "@mui/material";
import API from "../api";

export default function AddCoinForm({ onAdd }) {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [threshold, setThreshold] = useState("");

  const handleAdd = async () => {
    if (!name || !symbol || !threshold)
      return alert("All fields required");

    await API.post("/coins", {
      name,
      symbol,
      threshold_price: Number(threshold),
    });

    setName("");
    setSymbol("");
    setThreshold("");

    onAdd();
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Add Coin
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Coin Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />

        <TextField
          label="CoinGecko ID (e.g., bitcoin)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          fullWidth
        />

        <TextField
          label="Threshold Price"
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
          fullWidth
        />

        <Button variant="contained" onClick={handleAdd}>
          Add Coin
        </Button>
      </Stack>
    </Paper>
  );
}
