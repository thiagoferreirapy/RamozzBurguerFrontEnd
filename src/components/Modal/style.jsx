import styled from "styled-components";

export const BackgroundModal = styled.section`
    background-color: #00000055;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`
export const Modal = styled.div`
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 10px;
    width: 520px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) ;

    @media (max-width: 750px){
        width: 100%;
        height: 100vh;
        border-radius: 0px;
        overflow: hidden;
        overflow-y: scroll;
    }

`

export const ContentTitleModal = styled.div`
  background-color: ${(props) => props.theme.colors.whiteSecondary};
  border-radius: 8px 8px 0px 0px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const TitleModal = styled.h1`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.black};
`;

export const Close = styled.img`
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translate(0,-50%);
    cursor: pointer;
`;


export const Title = styled.h2`
    font-size: 25px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.black};
`;

export const Text = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.gray};
    margin: 5px;
`;
export const TextRegister = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.gray};
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Link = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.gray};
    margin: 0px 5px;
    text-align: right;
    cursor: pointer;
    &:hover{

        color: ${(props) => props.theme.colors.blue};
    }
`;


export const ContentModalForm = styled.div`
    width: 100%;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    text-align: center;
`;
export const ContentForm = styled.div`
    width: 100%;
    margin-top: 26px;
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid ${(props) => props.theme.colors.graySecondary};
    border-radius: 10px;
    background-color: transparent;
    padding-left: 10px;
    margin-bottom: 20px;

    color: ${(props) => props.theme.colors.black};
    font-size: 16px;
    font-weight: 500;
    outline: none;

    &:focus{
        border: 2px solid ${(props) => props.theme.colors.gray};
    }
`;


export const ContentInputPAssaword = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    position: relative;
    background-color: green;
`;

export const IconPassword = styled.div`
    width: 15px;
    height: 15px;
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translate(-50%, -50%);
`;



export const ContentRegisterRoute = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
    
`;

export const Button = styled.button`
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 10px;
    background-color: #4a6a46;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 16px;
    font-weight: 800;

    transition: 0.3s all ease-in-out;
    &:hover{
        background-color: ${(props) => props.theme.colors.green};
        filter: none;
        opacity: 100%;
    }
`;
