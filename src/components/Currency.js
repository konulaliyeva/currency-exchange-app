import { Typography } from "@mui/material";
import { StyledCurrency } from "./StyledComponents";
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
const fontStyles = {
fontFamily: 'Roboto',
fontSize: '16px',
color:'#253D35'
}
export default function Currency(props) {
  return (
    <StyledCurrency>
      <div style={{display:'flex'}}>
        <CurrencyRubleIcon sx={{...fontStyles, fontSize: 23}} />
        <Typography sx={{...fontStyles, mx:4}}>{props.base}</Typography>
      </div>
      <Typography sx={{...fontStyles}}>{props.rates.toFixed(2)}</Typography>
    </StyledCurrency>
  );
}
