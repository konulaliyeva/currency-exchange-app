import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import SyncIcon from "@mui/icons-material/Sync";
import { IconButton, InputAdornment, Typography } from "@mui/material";
import { StyledOutlinedInput } from "./StyledComponents";
export default function AmountInput(props) {
  const { amount, setAmount, handleConvertCurrency, convertion } = props;

  const textStyles = {
    margin: "22px 25px",
    fontFamily: "Roboto",
  };
  const inputStyles = {
    width: "96px",
    borderRadius: "0px 10px 10px 0px",
  };
  const boxStyles = {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "20px",
  };
  return (
    <Box sx={{ ...boxStyles }}>
      <div>
        <Typography sx={{ ...textStyles }}>Amount</Typography>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <FormControl variant="outlined">
            <StyledOutlinedInput
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </FormControl>
          <FormControl>
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">
                  <IconButton onClick={handleConvertCurrency}>
                    <SyncIcon sx={{ color: "#0E57D6", marginLeft: "10px" }} />
                  </IconButton>
                </InputAdornment>
              }
              sx={{ ...inputStyles }}
            />
          </FormControl>
        </div>
        <Typography sx={{ ...textStyles }}>
          {convertion &&
            convertion.result.toFixed(2) + "  " + convertion.query.to}
        </Typography>
      </div>
    </Box>
  );
}
