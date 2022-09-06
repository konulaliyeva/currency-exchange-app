import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import SyncIcon from "@mui/icons-material/Sync";
import { IconButton, InputAdornment, Typography } from "@mui/material";
import { StyledOutlinedInput } from "./StyledComponents";
export default function AmountInput(props) {
  const { amount, setAmount } = props;

  const textStyles = {
    margin: "22px 25px",
    fontFamily: "Roboto",
  };
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", marginLeft: "20px" }}>
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
            />
          </FormControl>
          <FormControl>
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">
                  <IconButton>
                    <SyncIcon sx={{ color: "#0E57D6", marginLeft: "10px" }} />
                  </IconButton>
                </InputAdornment>
              }
              sx={{ width: "96px", borderRadius: "0px 10px 10px 0px" }}
            />
          </FormControl>
        </div>
        <Typography sx={{ ...textStyles }}> Result</Typography>
      </div>
    </Box>
  );
}
