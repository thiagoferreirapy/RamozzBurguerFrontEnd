import styled from 'styled-components'

// content: { zIndex: 1001, backgroundColor: 'transparent', border: 'none', width: 'auto'},
export const Teste = [
    {zIndex: 1001, },
    {backgroundColor: 'transparent', },
    {border: 'none',}, 
    {width: '950px'},
    {height: '700px'},
    {position: 'absolute'},
    {top: '5%'},
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
  /* position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%); */
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


export const Close = styled.img`
    cursor: pointer;
    margin: 0 25px;
`;


export const ContentModalForm = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
`;
export const ContentInform = styled.div`
    width: 440px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
`;

export const ImageProduct = styled.img`
    width: 380px;
    height: 320px;
    object-fit: cover;
    border-radius: 20px;
    background-color: blue;
    margin: 0;
`;

export const ContainerItemSelector = styled.div`
    width: 410px;
    height: 600px;
    border-radius: 0 0 10px 0;
    border-left: 1px solid ${(props) => props.theme.colors.graySecondary};
    position: relative;
    overflow: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 5px;
        border-radius: 10px;
        background-color: ${(props) => props.theme.colors.graySecondary};
    }
    &::-webkit-scrollbar-thumb{
        width: 5px;
        border-radius: 10px;
        background-color: ${(props) => props.theme.colors.gray};
    }
`;

export const ContentTitleSelector = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.whiteSecondary};
    border-bottom: 1px solid ${(props) => props.theme.colors.graySecondary};
`;
export const ContentAlign = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const AlertSelector = styled.p`
    font-size: 12px;
    font-weight: 500;
    padding: 5px 15px;
    border-radius: 10px;
    width: auto;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.gray};
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
