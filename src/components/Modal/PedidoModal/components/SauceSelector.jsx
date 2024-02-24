import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ContainerItemSelector = styled.div`
  width: 100%;
`;

const ContentTitleSelector = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.whiteSecondary};
  border-bottom: 1px solid ${(props) => props.theme.colors.graySecondary};
`;
const TitleSelector = styled.h3`
  font-size: 18px;
  font-weight: 600;
  text-transform: initial;
  color: ${(props) => props.theme.colors.black};
  text-align: left;
`;
const SubTitleSelector = styled.h4`
  font-size: 16px;
  font-weight: 400;
  text-transform: initial;
  color: ${(props) => props.theme.colors.gray};
  text-align: left;
`;

const TitleItems = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray};
`;
const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
  text-transform: initial;
  color: ${(props) => props.theme.colors.gray};
  text-align: left;
`;
const ContentAlign = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ContentDirection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
`;
const AlertSelector = styled.p`
  font-size: 12px;
  font-weight: 500;
  padding: 5px 15px;
  border-radius: 10px;
  width: auto;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.hasErrorSauce ? props.theme.colors.danger : props.theme.colors.green};
`;

const ContentItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Items = styled.label`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.graySecondary};
  cursor: pointer;
`;
const StyledCheckbox = styled.input`
  display: none;
`;
const CustomCheckbox = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: #fff;
  border: 2px solid #333;
  border-radius: 4px;
  margin-right: 8px;

  ${StyledCheckbox}:checked + & {
    background-color: ${(props) => props.theme.colors.gray};
    border-color: ${(props) => props.theme.colors.gray};
  }
`;
export default function SauceSelector({
  sauceTypes,
  quantidade,
  onSelectionChange,
  hasErrorSauce,
  id,
}) {
  const [qtdSelected, setQtdSelected] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleRadioChange = (index) => {
    setSelectedItem(index);
    setQtdSelected(1);
  };

  useEffect(() => {
    onSelectionChange(selectedItem !== null ? sauceTypes[selectedItem] : null);
  }, [selectedItem, sauceTypes, onSelectionChange]);

  return (
    <ContainerItemSelector id={id}>
      <ContentTitleSelector>
        <ContentAlign>
          <TitleSelector>Escolha o molho</TitleSelector>
          <AlertSelector hasErrorSauce={hasErrorSauce}>
            obrigatório
          </AlertSelector>
        </ContentAlign>
        <ContentAlign>
          <SubTitleSelector>Escolha {quantidade} opção</SubTitleSelector>
          <AlertSelector hasErrorSauce={hasErrorSauce}>
            {qtdSelected}/{quantidade}
          </AlertSelector>
        </ContentAlign>
      </ContentTitleSelector>
      <ContentItems>
        {sauceTypes.map((item, index) => (
          <Items key={index}>
            <ContentDirection>
              <TitleItems>{item.name}</TitleItems>
              <Text>{item.description}</Text>
            </ContentDirection>
            <StyledCheckbox
              type="radio"
              name="molho"
              id={`radio${index}`}
              checked={selectedItem === index}
              onChange={() => handleRadioChange(index)}
            />
            <CustomCheckbox />
          </Items>
        ))}
      </ContentItems>
    </ContainerItemSelector>
  );
}
