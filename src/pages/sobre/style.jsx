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
    height: 90vh;
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
export const ContentInformationsSobre = styled.div`
    height: 950px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ContentInformations = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const ContentTextSobre = styled.div`
    height: 500px;
    width: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const TitleInformation = styled.h3`
    font-size: 25px;
    font-weight: 900;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.black};
    
`
export const SubTitleInformation = styled.h4`
    font-size: 30px;
    font-weight: 800;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.green};
    
`
export const ParagraphInformation = styled.p`
    margin-top: 30px;
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.black};
    text-align: justify;
`
export const ContentImages = styled.div`
    height: 500px;
    width: 490px;
    display: flex;
    justify-content: space-between;
`
export const ContentColumOne = styled.div`
    width: 280px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const ContentColumtwo = styled.div`
    width: 190px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const Img = styled.img`
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 10px;
`
export const Imgtwo = styled.img`
    width: 100%;
    height: 310px;
`
