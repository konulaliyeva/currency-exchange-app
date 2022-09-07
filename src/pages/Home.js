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

  const [currencies, setCurrencies] = useState(null);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState();
  const [convertion, setConvertion] = useState(null);

  useEffect(() => {
    const handleGetResult = async () => {
      const data = await Server.getSymbols();
      const firstCurrency = Object.keys(data.rates)[0];

      setCurrencyOptions(...[Object.keys(data.rates)]);
      setFromCurrency(data.base);
      setToCurrency(firstCurrency);
      setExchangeRate(data.rates[firstCurrency]);
      setCurrencies(data.rates);
    };
    handleGetResult();
  }, []);

  const handleConvertCurrency = async () => {
    const params = { to: toCurrency, from: fromCurrency, amount };
    const data = await Server.getConvert(params);
    console.log("dataanaaanaan  " + data);
    setConvertion(data);
  };

  const handleSwapCurrencies = async () => {
    //  fetch(
    //       `https://api.apilayer.com/exchangerates_data/convert?to=${fromCurrency}&from=${toCurrency}&amount=${amount}`,
    //       requestOptions
    //     )
    //       .then((res) => res.json())
    //       .then((data) =>
    //       setConvertion(data));
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
              key === "EUR" ||
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
