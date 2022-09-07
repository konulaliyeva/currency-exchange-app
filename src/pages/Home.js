import React, { useEffect, useState } from "react";
import ExchangeInput from "../components/ExchangeInput";
import AmountInput from "../components/AmountInput";
import Currency from "../components/Currency";
import Server from "../api/server";
import {
  StyledContainer,
  StyledDiv,
  StyledBox,
} from "../components/StyledComponents";
import { IconButton } from "@mui/material";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
function Home() {
  const [currencyOptions, setCurrencyOptions] = useState(null);

  const [currencies, setCurrencies] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [convertion, setConvertion] = useState("");

  useEffect(() => {
    const handleGetResult = async () => {
      const data = await Server.getSymbols();
      const firstCurrency = Object.keys(data.rates)[0];
      setCurrencyOptions(...[Object.keys(data.rates)]);
      setFromCurrency(data.base);
      setToCurrency(firstCurrency);
      setCurrencies(data.rates);
    };
    handleGetResult();
  }, []);

  const handleConvertCurrency = async () => {
    const params = { to: toCurrency, from: fromCurrency, amount };
    if (amount) {
      const data = await Server.getConvert(params);
      setConvertion(data);
    }
  };

  useEffect(() => {
    if (!amount) setConvertion(null);
  }, [amount]);

  const handleSwapCurrencies = async () => {
    let from = toCurrency;
    setToCurrency(fromCurrency);
    setFromCurrency(from);

    const params = { to: fromCurrency, from: toCurrency, amount };

    if (amount) {
      const data = await Server.getConvert(params);
      setConvertion(data);
    }
  };

  return (
    <StyledContainer>
      <StyledDiv>
        <ExchangeInput
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        />
        <IconButton onClick={handleSwapCurrencies}>
          <SyncAltIcon sx={{ color: "#0E57D6" }} />
        </IconButton>
        <ExchangeInput
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
        />
      </StyledDiv>
      <StyledBox>
        <AmountInput
          amount={amount}
          setAmount={setAmount}
          handleConvertCurrency={handleConvertCurrency}
          convertion={convertion}
        />
      </StyledBox>
      <StyledDiv direction="column">
        {currencies &&
          Object.entries(currencies).map(([key, value]) => {
            if (
              key === "USD" ||
              key === "GEL" ||
              key === "RUB" ||
              key === "TRY"
            ) {
              return (
                <Currency base={key} rates={value} key={key} amount={amount} />
              );
            }
          })}
      </StyledDiv>
    </StyledContainer>
  );
}

export default Home;
