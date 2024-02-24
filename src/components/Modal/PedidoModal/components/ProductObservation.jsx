import React, { useState } from "react";
import styled from "styled-components";

const ContainerItemSelector = styled.div`
  width: 100%;
`;

const ContentTitleSelector = styled.div`
  width: 100%;
  height: 50px;
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

const ContentAlign = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContentItems = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 70px;
`;

const TextObservation = styled.textarea`
  width: 90%;
  height: 80px;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.graySecondary};
  outline: none;

  font-size: 14px;
  font-weight: 500;
  text-transform: initial;
  color: ${(props) => props.theme.colors.black};
  background-color: transparent;
  margin: 20px;
  text-align: left;
`;

export default function ProductObservation({ onObservationChange }) {
  const [observation, setObservation] = useState("");

  const handleObservationChange = (event) => {
    const newObservation = event.target.value;
    setObservation(newObservation);

    if (onObservationChange) {
      onObservationChange(newObservation);
    }
  };
  return (
    <ContainerItemSelector>
      <ContentTitleSelector>
        <ContentAlign>
          <TitleSelector>Observação</TitleSelector>
        </ContentAlign>
      </ContentTitleSelector>
      <ContentItems>
        <TextObservation
          placeholder={"Exemplo: Retirar ovo, e cebola"}
          value={observation}
          onChange={handleObservationChange}
        ></TextObservation>
      </ContentItems>
    </ContainerItemSelector>
  );
}
