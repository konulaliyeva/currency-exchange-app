import * as React from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

export default function ExchangeInput(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
  } = props;

  const formStyles = {
    width: "311px",
    boxShadow: "3px 3px 10px rgba(14, 87, 214, 0.26)",
    borderRadius: "20px",
    border: "none",
  };
  return (
    <div>
      <FormControl sx={{ ...formStyles, m: 1 }}>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={selectedCurrency}
          onChange={onChangeCurrency}
          sx={{ borderRadius: "20px" }}
          displayEmpty
        >
          {currencyOptions &&
            currencyOptions.map((curr) => (
              <MenuItem key={curr} value={curr}>
                {curr}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}
