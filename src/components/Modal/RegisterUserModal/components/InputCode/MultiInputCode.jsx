import React, { useState } from 'react';
import styled from 'styled-components'


const ContentInputs = styled.div`
    width: 100%;
    padding: 0 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const Input = styled.input`
    width: 40px;
    height: 40px;

    text-align: center;
    border: none;
    border-radius: 10px;
    background-color: transparent;
    background-color: ${(props) => props.theme.colors.whiteTerciary};

    color: ${(props) => props.theme.colors.secondary};
    font-size: 18px;
    font-weight: 700;
    outline: none;

    &:focus{
        border: 2px solid ${(props) => props.theme.colors.gray};
    }

    &::-webkit-inner-spin-button{
        display: none;
    }
`

const MultiInputCode = ({ numInputs , onCodeChange}) => {
  const [codes, setCodes] = useState(Array(numInputs).fill(''));

  const handleCodeChange = (index, value) => {
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    // Passa o foco para o próximo input, se existir
    if (index < numInputs - 1 && value !== '') {
      document.getElementById(`codeInput${index + 1}`).focus();
    }

    // Atualiza o código no componente pai
    onCodeChange(newCodes.join(''));
  };

  return (
    <ContentInputs>
      {codes.map((code, index) => (
        <Input
          key={index}
          id={`codeInput${index}`}
          type="number"
          maxLength="1"
          value={code}
          onChange={(e) => handleCodeChange(index, e.target.value)}
        />
      ))}
    </ContentInputs>
  );
};

export default MultiInputCode;
