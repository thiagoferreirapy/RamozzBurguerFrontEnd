import styled from "styled-components";

export const ContentOption = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.colors.white};
`;

export const ContentTitleOption = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.blueSecondary};
  border-bottom: 1px solid ${(props) => props.theme.colors.blackBorder};
`;

export const Separator = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleOption = styled.h5`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black};
`;

export const Alert = styled.span`
  width: 100px;
  padding: 1px;
  background-color: ${(props) => props.theme.colors.gray};
  background-color: ${(props) =>
    props.selected === 0 ? props.theme.colors.danger : props.theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.white};
`;

export const InformationOption = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.gray};
`;

export const DisplayQuantity = styled.p`
  width: 50px;
  padding: 1px;
  background-color: ${(props) => props.theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.white};
`;
export const OptionsContent = styled.label`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.blackBorder};
  cursor: pointer;
`;

export const TextValueOption = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black};
`;

export const DescriptionOption = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.black};
`;

export const StyledCheckbox = styled.input`
  display: none;
`;

export const CustomCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.theme.colors.graySecondary};
  border-radius: 100%;
  transition: 0.3s all ease-in-out;

  ${StyledCheckbox}:checked + & {
    border: 5px solid #333;
    border-color: ${(props) => props.theme.colors.gray};
  }
`;
