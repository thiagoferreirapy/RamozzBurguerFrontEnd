import styled, { keyframes } from 'styled-components';

const slideDownAnimation = keyframes`
  0%{
    transform: translateY(-100%);
    opacity: 0;
  }
  20%{
    transform: translateY(-0);
    opacity: 1;
  }
  80%{
    transform: translateY(0);
    opacity: 1;
  }
  90%{
    transform: translateY(-100%);
    opacity: 0;
    display: none;
  }
`;


export const MenssageAlert = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${(props) => props.theme.colors.black};
    position: fixed;
    top: 0px;
    left: 0;
    z-index: 2000;
    display: ${(props) => (props.show ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;

    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.white};
    animation: ${slideDownAnimation} 10s ease-in-out;
    
    span{
        font-size: 30px;
        margin-right: 50px;
    }
`;