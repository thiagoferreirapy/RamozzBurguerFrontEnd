import styled from 'styled-components'
import background from '../../images/background2.svg'

export const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    width: 100%;

    @media (min-width: 1550px){
        width: 70%; 
    }
    @media (max-width: 650px){
        height: 850px;
    }
    @media (max-width: 900px) and (orientation: landscape){
        height: 800px;
    }
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

    @media (max-width: 650px){
        font-size: 90px;
    }
    @media (max-width: 490px){
        font-size: 70px;
        margin: 50px 0 20px;
    }
`

export const SubTitle = styled.h2`
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;

    @media (max-width: 650px){
        font-size: 25px;
    }

    @media (max-width: 550px){
        font-size: 21px;
    }
    @media (max-width: 550px){
        font-size: 21px;
    }
    @media (max-width: 490px){
        font-size: 20px;
    }
    @media (max-width: 391px){
        font-size: 18px;
    }
    @media (max-width: 360px){
        font-size: 16px;
    }
`
export const TextTitle = styled.p`
    font-size: 16px;
    font-weight: 600;

    @media (max-width: 1050px){
        width: 900px;
        text-align: center;
    }
    @media (max-width: 900px){
        width: 700px;
        text-align: center;
        margin-top: 15px;
    }
    @media (max-width: 700px){
        width: 550px;
        text-align: center;
        margin-top: 15px;
    }

    @media (max-width: 650px){
        width: 500px;
        text-align: center;
        margin-top: 15px;
    }
    @media (max-width: 560px){
        width: 400px;
        text-align: center;
        margin-top: 15px;
    }
    @media (max-width: 475px){
        width: 380px;
        text-align: center;
        margin-top: 15px;
    }
    @media (max-width: 391px){
        width: 340px;
        text-align: center;
        margin-top: 15px;
    }
    @media (max-width: 360px){
        width: 330px;
        text-align: center;
        margin-top: 15px;
    }
    @media (max-width: 350px){
        width: 300px;
        text-align: center;
        margin-top: 15px;
    }

`
export const ContentButtons = styled.div`
    display: flex;
    width: 500px;
    align-items: center;
    justify-content: space-around;
    margin-top: 40px;
    @media (max-width: 750px){
        flex-direction: column;
        height: 150px;
    }
`
export const ContainerCardapio = styled.section`
    width: 100%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
   
    align-items: center;
    
    @media (min-width: 1500px){
        width: 70%; 
    }
`

export const CardapioNavbar = styled.div`
    width: 60%;
    padding: 30px;
    /* background-color: #00ff00; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1000px){
        width: 100%;
        flex-wrap: wrap;
    }
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

    @media (max-width: 1000px){
        margin: 10px;
    }
    `

export const ContentCardapioProducts = styled.div`
        width: 60%;
        /* background-color: #00e1ff; */
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;

        @media (max-width: 1150px){
            width: 70%;
        }
        @media (max-width: 1000px){
            width: 70%;
        }
        @media (max-width: 600px){
            width: 80%;
        }
        @media (max-width: 400px){
            width: 90%;
        }
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