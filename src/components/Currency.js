import { Typography } from "@mui/material";
import { StyledCurrency } from "./StyledComponents";

export const fontStyles = {
  fontFamily: "Roboto",
  fontSize: "16px",
  color: "#253D35",
};
export default function Currency(props) {
  const { base, rates, amount } = props;
  return (
    <StyledCurrency>
      <div style={{ display: "flex" }}>
        <Typography sx={{ ...fontStyles, mx: 4 }}>{base}</Typography>
      </div>
      <Typography sx={{ ...fontStyles }}>
        {(rates * amount).toFixed(2)}
      </Typography>
    </StyledCurrency>
  );
}
