import styled from 'styled-components'
import background from '../../images/background2.svg'


export const Main = styled.main`
    width: 100%;
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
`

export const SubTitle = styled.h2`
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;

`
export const ContentButtonLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    bottom: 100px;
`

export const Text = styled.p`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 25px;
`

export const Button = styled.button`
    width: 230px;
    height: 45px;
    border: none;
    border-radius: 10px;
    background-color: #4a6a46;
    cursor: pointer;

    font-size: 16px;
    font-weight: 800;
    text-transform: uppercase;

    transition: 0.3s all ease-in-out;
    &:hover{
        background-color: ${(props) => props.theme.colors.green};
        filter: none;
        opacity: 100%;
    }
`


export const ContainerSobre = styled.section`
    width: 100%;
    height: 750px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
`
export const ContainerGalery = styled.section`
    width: 100%;
    /* height: 750px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 30px;
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