import styled from 'styled-components'
import background from '../../images/background2.svg'


export const Main = styled.main`
    background: red;
    max-width: 1500px;
`;


export const ContainerInicial = styled.div`
    /* background-image: url(${background}); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* filter: brightness(0.9) grayscale(0.5); */
    width: 100vw;
    height: 100vh;
    background-color: green;
    @media (max-width: 1100px) and (orientation: landscape){
        height: 800px;  
    }
    @media (max-width: 900px) and (orientation: landscape){
        height: 800px;  
    }
    @media (max-width: 700px) and (orientation: landscape){
        height: 800px;             
    }
    @media (max-width: 500px) and (orientation: landscape){
        height: 800px;
        
    }
    @media (max-width: 350px) and (orientation: landscape){
        height: 800px;
        
    }

    @media (max-width: 380px){
        height: 800px;
        
    }
`;

export const ContentTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
`

export const Title = styled.h1`
    color: ${(props) => props.theme.colors.white};;
    font-size: 100px;
    font-family: 'Road Rage';
    font-weight: 400;
    line-height: 40px;
    text-transform: uppercase;
    margin: 50px 0 30px;

    @media (max-width: 650px){
        font-size: 80px;
    }

    @media (max-width: 490px){
        font-size: 70px;
    }
    @media (max-width: 390px){
        font-size: 60px;
        margin: 50px 0 15px;
    }

    @media (max-width: 370px){
        font-size: 57px;
        margin: 50px 0 15px;
    }

    @media (max-width: 350px){
        font-size: 50px;
        margin: 50px 0 15px;
    }
`

export const SubTitle = styled.h2`
    color: ${(props) => props.theme.colors.white};
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 50px;
    @media (max-width: 650px){
        font-size: 24px;
    }

    @media (max-width: 490px){
        font-size: 20px;
    }

    @media (max-width: 390px){
        font-size: 18px;
        margin-bottom: 60px;
    }

    @media (max-width: 370px){
        font-size: 17px;
        margin-bottom: 60px;
    }

    @media (max-width: 350px){
        font-size: 15px;
        margin-bottom: 100px;
    }

`
export const ContentButtonLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    @media (max-width: 350px){
        bottom: -30px;
        
    }
`

export const Text = styled.p`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 25px;

    @media (max-width: 350px){
        font-size: 14px;
        
    }
`




export const ContainerSobre = styled.section`
    width: 100vw;
    height: 750px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    background-color: blue;

    @media (max-width: 1300px){
        justify-content: center;
    }

    @media (max-width: 990px){
        flex-direction: column;
    }

    @media (max-width: 530px){
        height: 600px;
    }

    @media (max-width: 490px){
        height: 550px;
    }

`



export const ContainerGalery = styled.section`
    /* height: 750px; */
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 30px 30px 30px;
    /* background-color: ${(props) => props.theme.colors.black}; */
    background-color: yellow;
`


export const ContainerOrcamento = styled.section`
    height: 700px;
    width: 100vw;
    /* height: 750px; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 30px;
    background-color: green;
    /* @media (max-width: 1150px){
        background-color: red;
    }
    @media (max-width: 1100px){
        background-color: #3cff00;
    } */
    @media (max-width: 900px){
        flex-direction: column;
        justify-content: space-around;
        height: 1000px;
    }
`