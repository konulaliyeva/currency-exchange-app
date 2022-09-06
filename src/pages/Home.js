import React, { useEffect, useState } from "react";
import ExchangeInput from "../components/ExchangeInput";
import AmountInput from "../components/AmountInput";
import Currency from "../components/Currency";
import { IconButton } from "@mui/material";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import {
  StyledContainer,
  StyledDiv,
  StyledBox,
} from "../components/StyledComponents";

function Home() {
  const [currencyOptions, setCurrencyOptions] = useState(null);

  const [currencies, ] = useState(null);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState();
  // const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  let myHeaders = new Headers();
  myHeaders.append("apikey", "0akxi67JkNBfd1noaHFhGy79PB6k1qil");

  let requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  // let toAmount, fromAmount;
  // if (amountInFromCurrency) {
  //   fromAmount = amount;
  //   toAmount = amount * exchangeRate;
  // } else {
  //   toAmount = amount;
  //   fromAmount = amount / exchangeRate;
  // }
  useEffect(() => {
    fetch(
      `https://api.apilayer.com/exchangerates_data/latest?symbols=${
        ("AZN", "EUR", "TRY", "RUB")
      }&base=${"USD"}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.apilayer.com/exchangerates_data/latest?base=${"USD"}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];

        setCurrencyOptions(...[Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        // setExchangeRate(data.rates[firstCurrency]);
      });
  }, []);


  // console.log(currencyOptions)
  function handleConvertCurrency(){
    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => setExchangeRate(data.rates[toCurrency]));
  }
  useEffect(() => {
   handleConvertCurrency();
  }, [fromCurrency, toCurrency]);

  // function handleFromAmountChange(e) {
  //   setAmount(e.target.value);
  //   // setAmountInFromCurrency(true);
  // }

  // function handleToAmountChange(e) {
  //   setAmount(e.target.value);
  //   // setAmountInFromCurrency(false);
  // }
console.log(currencyOptions)
  return (
    <StyledContainer>
      <StyledDiv>
        <ExchangeInput
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          // onChangeAmount={handleFromAmountChange}
        />
        <IconButton onClick={handleConvertCurrency}> 
          <SyncAltIcon sx={{ color: "#0E57D6" }} />
        </IconButton>
        <ExchangeInput
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
          // onChangeAmount={handleToAmountChange}
        />
      </StyledDiv>
      <StyledBox>
        <AmountInput amount={amount} setAmount={setAmount} />
      </StyledBox>
      <StyledDiv direction="column">
        {currencies &&
          Object.entries(currencies).map(([key, value]) => {
            return <Currency base={key} rates={value} key={key} />;
          })}
      </StyledDiv>
    </StyledContainer>
  );
}

export default Home;
