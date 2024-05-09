import styled, { keyframes } from 'styled-components';

export const Teste = [
    {zIndex: 1001, },
    {backgroundColor: 'transparent', },
    {border: 'none',}, 
    {width: '950px'},
    {height: '700px'},
    {position: 'absolute'},
    {top: '3%'},
    {left: '50%'},
    {transform: 'translate(-50%)'},
    {display: 'flex'},
    {alignItems: 'center'},
    {justifyContent: 'center'},
]



export const ModalWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white}; 
  border-radius: 10px;
  width: 850px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ContentTitleModal = styled.div`
  background-color: ${(props) => props.theme.colors.whiteSecondary};
  border-radius: 8px 8px 0px 0px;
  border-bottom: 1px solid ${(props) => props.theme.colors.graySecondary};
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: left;
`

export const TitleModal = styled.h1`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.black};
`;

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.black};
    text-align: left;
    width: 85%;
    margin-top: 20px;
`;
export const TitleSelector = styled.h3`
    font-size: 18px;
    font-weight: 600;
    text-transform: initial;
    color: ${(props) => props.theme.colors.black};
    text-align: left;
`;
export const SubTitleSelector = styled.h4`
    font-size: 16px;
    font-weight: 400;
    text-transform: initial;
    color: ${(props) => props.theme.colors.gray};
    text-align: left;
`;

export const Text = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.gray};
    width: 85%;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: justify;

    strong{
        color: ${(props) => props.theme.colors.green}; 
    }

    span{
        color: ${(props) => props.theme.colors.gray};
        text-decoration: line-through;   
    }
`;


export const Close = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 25px;
    border-radius: 50%;
    border: none;
    font-size: 18px;
    background-color: ${(props) => props.theme.colors.gray};
    transition: 0.3s all ease-in-out;
    &:hover{
        background-color: ${(props) => props.theme.colors.black};
    }

`;

export const ContainerOrder = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    border-radius: 0px 0px 8px 8px;
`;
export const OrderInformations = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid ${(props) => props.theme.colors.graySecondary};
    padding: 30px;
    border-radius: 0px 0px 0px 8px;
`;
export const ImageOrder = styled.img`
    width: 100%;
    height: 310px;
    background-color: #858585;
    border: none;
    border-radius: 20px;
    overflow: hidden;
    object-fit: cover;
`;

export const TitleOrder = styled.h4`
    width: 95%;
    font-size: 18px;
    font-weight: 700;
    text-transform: initial;
    color: ${(props) => props.theme.colors.black};
    text-align: left;
    margin-top: 10px;
`;

export const TextInformationOrder = styled.p`
    width: 95%;
    font-size: 14px;
    font-weight: 500;
    text-transform: initial;
    color: ${(props) => props.theme.colors.black};
    text-align: justify;
    margin-top: 5px;
`;

export const ValueOrder = styled.p`
    width: 95%;
    font-size: 16px;
    font-weight: 700;
    text-transform: initial;
    color: ${(props) => props.theme.colors.green};
    text-align: justify;
    margin-top: 10px;
`;

export const FormOrder = styled.div`
    width: 50%;
    height: 100%;
    border-radius: 0px 0px 8px 0px;
    overflow: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 7px;
        border-radius: 0px 0px 10px;
        background-color: transparent
    }
    &::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: ${(props) => props.theme.colors.graySecondary};
    }
`;
