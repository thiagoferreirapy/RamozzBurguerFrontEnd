import React, { useState } from "react";
import {
  ContentOption,
  ContentQtdOrder,
  ButtonRemoveAddOrder,
  DisplayValueQtd,
  ContentButtonFinalization,
} from "./style";

export default function FinalizationOrder({ valueOrder, onFinalization }) {
  const [value, setValue] = useState(1);
  const [valuePrice, setValuePrice] = useState(parseFloat(valueOrder));

  const handleInputChange = (event) => {
    const { value } = event.target;
    let numericValue = value.replace(/\D/g, "");
    event.target.value = numericValue;
    setValue(parseInt(numericValue));
  };

  const handleBlur = (event) => {
    if (isNaN(parseInt(value))) {
      event.target.value = "1";
      setValue(1);
      setValuePrice(1 * valueOrder);
    }
  };

  const decrementValue = () => {
    if (value > 1) {
      let newValue = value - 1;
      setValue(newValue);
      setValuePrice(newValue * valueOrder);
    }
  };

  const incrementValue = () => {
    let newValue = value + 1;
    setValue(newValue);
    setValuePrice(newValue * valueOrder);
  };

  const handleClick = () => {
    onFinalization(valuePrice, value);
  };

  return (
    <ContentOption>
      <ContentQtdOrder>
        <ButtonRemoveAddOrder onClick={decrementValue} validation={value}>
          -
        </ButtonRemoveAddOrder>
        <DisplayValueQtd
          type="numeric"
          inputMode="numeric"
          pattern="[0-9]*"
          name="valueqtd"
          id="valueqtd"
          value={value}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
        <ButtonRemoveAddOrder onClick={incrementValue}>+</ButtonRemoveAddOrder>
      </ContentQtdOrder>
      <ContentButtonFinalization onClick={handleClick}>
        Adicionar <span>R$ {valuePrice.toFixed(2)}</span>
      </ContentButtonFinalization>
    </ContentOption>
  );
}
