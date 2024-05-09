import styled from "styled-components";

export const ContentOption = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${(props) => props.theme.colors.white};
    margin-top: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid ${(props) => props.theme.colors.blackBorder};
`;

export const ContentQtdOrder = styled.div`
    width: 140px;
    height: 40px;
    border-radius: 10px;
    border: 2px solid ${(props) => props.theme.colors.graySecondary};
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const ButtonRemoveAddOrder = styled.button`
    width: 33px;
    height: 33px;
    border: none;
    font-size: 16px;
    color: ${(props) => (props.validation === 1 ? props.theme.colors.graySecondary : props.theme.colors.gray)};
    background-color: transparent;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    transition: 0.3s all ease-in-out;
    &:hover{
        background-color: ${(props) => (props.validation === 1 ? 'none' : props.theme.colors.whiteSecondary)};
        
    }
`;

export const DisplayValueQtd = styled.input`
    width: 30px;
    height: auto;
    border: none;
    font-size: 18px;
    color: ${(props) => props.theme.colors.black};
    background-color: transparent;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
    -webkit-appearance: textfield1;
    margin: 0;
  }

  /* Fallback para navegadores Firefox */
  ${({ theme }) => theme.isFirefox && `
    -moz-appearance: textfield;
  `}

   
`;
export const ContentButtonFinalization = styled.button`
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.green};
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
`;
