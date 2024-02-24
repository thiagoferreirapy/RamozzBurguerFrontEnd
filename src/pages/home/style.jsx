import styled from 'styled-components'
import background from '../../images/background2.svg'


export const Main = styled.main`
    max-width: 1500px;
    width: 100vw;
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
    height: 100vh;
    max-width: 1500px;
    width: 100vw;

    @media (max-width: 800px), (landscape){
        height: 800px;
    }
    @media (max-width: 700px), (landscape){
        height: 700px;
    }
    @media (max-width: 500px), (landscape){
        height: 500px;
    }
    @media (max-width: 350px), (landscape){
        height: 600px;
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

// export const Button = styled.button`
//     width: 230px;
//     height: 45px;
//     border: none;
//     border-radius: 10px;
//     background-color: #4a6a46;
//     cursor: pointer;

//     font-size: 16px;
//     font-weight: 800;
//     text-transform: uppercase;

//     transition: 0.3s all ease-in-out;
//     &:hover{
//         background-color: ${(props) => props.theme.colors.green};
//         filter: none;
//         opacity: 100%;
//     }
// `


export const ContainerSobre = styled.section`
    width: 100%;
    height: 750px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;

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
    width: 100%;
    /* height: 750px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 30px 30px 30px;
    background-color: ${(props) => props.theme.colors.black};
`


export const ContainerOrcamento = styled.section`
    width: 100%;
    height: 700px;
    /* height: 750px; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 30px;
`