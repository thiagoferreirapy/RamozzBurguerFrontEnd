import styled from "styled-components";
import icon from "../images/icons/pesquisa.svg";

const LabelInput = styled.label`
  width: 300px;
  height: 40px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.graySecondary};
  cursor: pointer;
`;

const Input = styled.input`
  width: 90%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 10px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};

  font-size: 16px;
  font-weight: 500;
  &::placeholder {
    color: ${(props) => props.theme.colors.gray};
  }
`;

const Icon = styled.img`
  width: auto;
`;

export default function InputProduct({ type, placeholder }) {
  return (
    <LabelInput>
      <Icon src={icon} />
      <Input type={type} placeholder={placeholder} />
    </LabelInput>
  );
}
