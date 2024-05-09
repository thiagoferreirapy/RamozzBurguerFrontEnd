import styled from "styled-components";
import { Link as Scroll, Element } from 'react-scroll';

const Select = styled.select`
    width: 180px;
    height: 40px;
    padding: 8px;
    border: 1px solid ${(props) => props.theme.colors.graySecondary};
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.gray};
    text-align: center;
    cursor: pointer;
    outline: none;
`;

const Option = styled.option`
  height: 30px;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 10px;
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


export default function SelectCategory({ title }) {
  return (
    <Select>
        <Option value="" disabled selected> {title} </Option>
        <Option value="promocao"><Scroll to="promocao" smooth={true} duration={100} offset={-150}>Promoção</Scroll></Option>
        <Option value="burguer"><Scroll to="burguer" smooth={true} duration={100} offset={-150}>Burguers</Scroll></Option>
        <Option value="combo"><Scroll to="combo" smooth={true} duration={100} offset={-150}>Combos</Scroll></Option>
    </Select>
  );
}
