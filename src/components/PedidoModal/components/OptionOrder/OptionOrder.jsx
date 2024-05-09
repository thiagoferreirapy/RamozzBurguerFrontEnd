import React, { useState } from "react";
import {
  ContentOption,
  ContentTitleOption,
  Separator,
  TitleOption,
  Alert,
  InformationOption,
  DisplayQuantity,
  OptionsContent,
  TextValueOption,
  DescriptionOption,
  StyledCheckbox,
  CustomCheckbox,
} from "./styled";

export default function OptionOrder({ Title, Data, onSelectedValue }) {
  const [checkedIndexes, setCheckedIndexes] = useState([]);
  const [idOrder, setIdOrder] = useState();

  let valuesInputSelected = checkedIndexes.length;

  const handleCheckboxChange = (index, id) => {
    if (checkedIndexes.includes(index)) {
      setCheckedIndexes(checkedIndexes.filter((i) => i !== index));
      setIdOrder(id)
    } else {
      setCheckedIndexes([index]);
      setIdOrder(id)
    }
    
    
    
  };

  onSelectedValue(valuesInputSelected, idOrder);

  return (
    <ContentOption>
      <ContentTitleOption>
        <Separator>
          <TitleOption>{Title}</TitleOption>
          <Alert selected={valuesInputSelected}>obrigatório</Alert>
        </Separator>
        <Separator>
          <InformationOption>Escolha 1 opção</InformationOption>
          <DisplayQuantity>{checkedIndexes.length}/1</DisplayQuantity>
        </Separator>
      </ContentTitleOption>
      {Data.map((item, index) => (
        <OptionsContent key={index}>
          <TextValueOption>
            {item.name}
            <DescriptionOption>{item.description}</DescriptionOption>
          </TextValueOption>
          <StyledCheckbox
            type="checkbox"
            id={item.id}
            checked={checkedIndexes.includes(index)}
            onChange={() => handleCheckboxChange(index, item.id)}
          />
          <CustomCheckbox />
        </OptionsContent>
      ))}
    </ContentOption>
  );
}
