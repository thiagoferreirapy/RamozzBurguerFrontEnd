import styled from 'styled-components'
import background from '../../images/background2.svg'

export const Main = styled.main`
    width: 100%;
    margin-bottom: 150px;
`;

export const ContainerInicial = styled.div`
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* filter: brightness(0.9) grayscale(0.5); */
    height: 90vh;
`;

export const ContentTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
    margin-top: 100px;
`

export const Title = styled.h1`
    font-size: 100px;
    font-family: 'Road Rage';
    font-weight: 400;
    line-height: 40px;
    text-transform: uppercase;
    margin: 50px 0 30px;
`

export const SubTitle = styled.h2`
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;

`
export const TextTitle = styled.p`
    font-size: 16px;
    font-weight: 600;

`
export const ContentButtons = styled.div`
    display: flex;
    width: 500px;
    align-items: center;
    justify-content: space-around;
    margin-top: 40px;
`
export const ContainerCardapio = styled.section`
    width: 100%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
   
    align-items: center;
    
`

export const CardapioNavbar = styled.div`
    width: 60%;
    padding: 30px;
    /* background-color: #00ff00; */
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const LinkNavbar = styled.a`
   font-size: 18px;
   font-weight: 600;
   text-transform: uppercase;
   color:  ${(props) => props.theme.colors.black};
   cursor: pointer;
   border-bottom: 2px solid transparent;
   transition: 0.3s all ease-in-out;
   &:hover{
       color: #365C32;
       font-weight: 600;
       border-bottom: 2px solid ${(props) => props.theme.colors.black};
    }
    `

export const ContentCardapioProducts = styled.div`
        width: 60%;
        /* background-color: #00e1ff; */
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
`
export const ContentTitleProducts = styled.div`
        width: 100%;
        height: 50px;
        border-radius: 20px;
        padding-left: 20px;
        background-color: ${(props) => props.theme.colors.secondary};
        display: flex;
        margin-top: 50px;

        align-items: center;
        font-size: 25px;
        font-weight: 800;
        text-transform: uppercase;
`