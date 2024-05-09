import React from "react";
import {
  ContentOption,
  ContentTitleOption,
  Separator,
  TitleOption,
  ContentTextObservation,
} from "./style";

export default function Observation({ onObservationChange }) {
  const handleChange = (event) => {
    onObservationChange(event.target.value);
  };
  return (
    <ContentOption>
      <ContentTitleOption>
        <Separator>
          <TitleOption>Observação</TitleOption>
        </Separator>
      </ContentTitleOption>
      <ContentTextObservation
        placeholder="Exemplo: Retirar ovo, cebola e maionese."
        onChange={handleChange}
      ></ContentTextObservation>
    </ContentOption>
  );
}
