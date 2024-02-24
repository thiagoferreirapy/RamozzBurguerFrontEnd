import React, { useState, useMemo, useEffect } from "react";
import styled from "styled-components";

const ContainerValue = styled.div`
  width: 410px;
  padding: 10px;

  background-color: ${(props) => props.theme.colors.blueSecondary};
  position: fixed;
  bottom: 20px;
  border-radius: 0px 0px 10px 0px;
`;

const TitleSelector = styled.h3`
  font-size: 16px;
  font-weight: 500;
  text-transform: initial;
  text-align: left;
`;

const ContentItems = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ContentButton = styled.div`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.blueTerciary};
`;

const ButtonAddRemove = styled.button`
  border: none;
  font-size: 30px;
  font-weight: 500;
  text-transform: initial;
  color: ${(props) => props.theme.colors.gray};
  background-color: transparent;
  text-align: center;
  height: 30px;
  width: 30px;
  padding: 20px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.colors.whiteSecondary};
  }
`;
const ButtonValue = styled.button`
  width: 200px;
  height: 40px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.gray};
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.colors.green};
  }
`;

const TextQuantidade = styled.p`
  border: none;
  font-size: 20px;
  font-weight: 500;
  text-transform: initial;
  color: ${(props) => props.theme.colors.black};
  background-color: transparent;
  margin: 20px;
  text-align: center;
`;

export default function ContentButtonValue({
  value,
  promotionValue,
  maxQuantity,
  adicionais,
  onClickValue,
}) {
  const [quantity, setQuantity] = useState(1);
  const [valueTotal, setValueTotal] = useState(value);

  const valoresSelecionados = adicionais.map((adicional) =>
    parseFloat(adicional.value)
  );
  const somaValores = valoresSelecionados.reduce(
    (acc, valor) => acc + valor,
    0
  );

  const valueProduct = useMemo(() => {
    if (promotionValue) {
      return promotionValue;
    } else if (!promotionValue) {
      return value;
    }
  }, [value, promotionValue]);

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, maxQuantity));
  };

  useEffect(() => {
    setValueTotal(
      (parseFloat(valueProduct) * parseFloat(quantity) + somaValores) 
      
    );
    console.log((parseFloat(valueProduct) * parseFloat(quantity) + somaValores) )
  }, [valueProduct, quantity, somaValores]);

  console.log(valueTotal)


  const handleButtonClick = () => {
    onClickValue && onClickValue(quantity);
  };

  return (
    <ContainerValue>
      <ContentItems>
        <ContentButton>
          <ButtonAddRemove onClick={handleDecrease}>-</ButtonAddRemove>
          <TextQuantidade>{quantity}</TextQuantidade>
          <ButtonAddRemove onClick={handleIncrease}>+</ButtonAddRemove>
        </ContentButton>
        <ButtonValue onClick={handleButtonClick}>
          <TitleSelector>Adicionar</TitleSelector>
          <TitleSelector>R$ {valueTotal},00</TitleSelector>
        </ButtonValue>
      </ContentItems>
    </ContainerValue>
  );
}
