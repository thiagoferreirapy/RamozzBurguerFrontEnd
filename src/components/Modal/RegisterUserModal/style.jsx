import styled from 'styled-components'

// content: { zIndex: 1001, backgroundColor: 'transparent', border: 'none', width: 'auto'},
export const Teste = [
    {zIndex: 1001, },
    {backgroundColor: 'transparent', },
    {border: 'none',}, 
    {width: '600px'},
    {height: 'auto'},
    {position: 'absolute'},
    {top: '10%'},
    {left: '50%'},
    {transform: 'translate(-50%)'},
    {display: 'flex'},
    {alignItems: 'center'},
    {justifyContent: 'center'},
]



export const ModalWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white}; 
  border-radius: 10px;
  width: 520px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%); */
`;

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


export const ActiveModal = styled.a`
    margin-left: 50px;
    font-size: 16px;
    font-weight: 600;
    color: #ffff;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    border-bottom: 2px solid transparent;
    &:hover{
        color: #365C32;
        font-weight: 600;
        border-bottom: 2px solid #fff;
    }
`;

export const TitleModal = styled.h1`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.black};
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


export const Close = styled.img`
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translate(0,-50%);
    cursor: pointer;
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


export const ContentProgressRegister = styled.div`
    width: 100%;
    height: 45px;
    padding: 0 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: red; */
`;
export const Progress = styled.div`
    width: 25px;
    height: 25px;
    text-align: center;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: ${(props) => props.theme.colors.gray}; */
    background-color: ${(props) => (props.progress === 1 ? 'green' : 'black')};
    z-index: 5;
    
    font-size: 12px;
    font-weight: 600;
`;
export const ProgressBar = styled.div`
    width: 60%;        
    height: 3px; 
    text-align: center;
    border-radius: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.graySecondary};
    position: absolute;
    z-index: 2;
`;

export const Bar = styled.div`
    width: ${(props) => {
    switch (props.progress) {
      case 1:
        return '20%'; // ou qualquer valor desejado para a etapa 1
      case 2:
        return '60%'; // ou qualquer valor desejado para a etapa 2
      case 3:
        return '100%'; // ou qualquer valor desejado para a etapa 3
      default:
        return '0%'; // ou qualquer valor padrão
    }
  }};        
    height: 3px; 
    text-align: center;
    border-radius: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.green};
    position: absolute;
    left: 0;
    z-index: 2;
    transition: 0.3s all linear;
`;


export const ContentButtons = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

`;
