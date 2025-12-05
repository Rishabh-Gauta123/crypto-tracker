import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import API from "../api";

export default function CoinList({ coins, onDelete }) {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Tracked Coins
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Symbol</TableCell>
            <TableCell>Threshold</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {coins.map((coin) => (
            <TableRow key={coin._id}>
              <TableCell>{coin.name}</TableCell>
              <TableCell>{coin.symbol}</TableCell>
              <TableCell>{coin.threshold_price}</TableCell>
              <TableCell>
                <IconButton
                  color="error"
                  onClick={async () => {
                    await API.delete(`/coins/${coin._id}`);
                    onDelete();
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
