import React, { useEffect, useState } from "react";
import ExchangeInput from "../components/ExchangeInput";
import AmountInput from "../components/AmountInput";
import Currency from "../components/Currency";

import {
  StyledContainer,
  StyledDiv,
  StyledBox,
} from "../components/StyledComponents";
import { IconButton } from "@mui/material";
import SyncAltIcon from '@mui/icons-material/SyncAlt';
function Home() {
  const [currencyOptions, setCurrencyOptions] = useState(null);

  const [currencies, setCurrencies ] = useState(null);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState();
  const [result, setResult] = useState(null);

  let myHeaders = new Headers();
  myHeaders.append("apikey", "04IcXrzw9lncM0q3afqndVF0FBNC2WdM");

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
      `https://api.apilayer.com/exchangerates_data/latest?base=${"USD"}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
    

        setCurrencyOptions(...[Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
        setCurrencies(data.rates)
      });
   }, []);
 function handleConvertCurrency(){  


    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => 
      setResult(data));
    }


  // function handleFromAmountChange(e) {
  //   setAmount(e.target.value);
  //   // setAmountInFromCurrency(true);
  // }

  // function handleToAmountChange(e) {
  //   setAmount(e.target.value);
  //   // setAmountInFromCurrency(false);
  // }



  return (
    <StyledContainer>
      <StyledDiv>
        <ExchangeInput
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          // onChangeAmount={handleFromAmountChange}
        />
        <IconButton>
          <SyncAltIcon sx={{color:'#0E57D6'}}/>
        </IconButton>
        <ExchangeInput
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
          // onChangeAmount={handleToAmountChange}
        />
      </StyledDiv>
      <StyledBox>
        <AmountInput amount={amount} setAmount={setAmount} handleConvertCurrency={handleConvertCurrency} result={result}/>
      </StyledBox>
      <StyledDiv direction="column">
        {currencies &&
          Object.entries(currencies).map(([key, value]) => {
            if(key==='USD'||key==='EUR'||key==='RUB'||key==='TRY'){
            return <Currency base={key} rates={value} key={key} />;
}})}
      </StyledDiv>
    </StyledContainer>
  );
}

export default Home;
