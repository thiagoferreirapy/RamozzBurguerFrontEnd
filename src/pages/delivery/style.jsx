import styled from 'styled-components'
import background from '../../images/background2.svg'

export const Main = styled.main`
    width: 100%;
    margin-bottom: 150px;
    background-color: #fafafa;
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
    height: 80vh;
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
export const ContainerProducts = styled.section`
    width: 100%;
    display: flex;

    justify-content: space-between;
    padding: 50px 100px;
`
export const ContentProducts = styled.div`
    width: 770px;
    display: flex;
    flex-direction: column;
`
export const ContentTitleProducts   = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
`
export const ProductsText   = styled.div`
    width: 100%;
    display: flex;
    
    justify-content: space-around;
    flex-direction: column;
    margin-left: 20px;
`
export const TitleProducts   = styled.h3`
    font-size: 60px;
    font-family: 'Road Rage';
    font-weight: 400;
    color: ${(props) => props.theme.colors.black};
`
export const ContentTextProducts   = styled.div`
    display: flex;
    align-items: center;
`
export const TextInform   = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.green};
`

export const TextProducts   = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.black};
`

export const Icon   = styled.img`
   margin: 0 20px;
`


export const ContentSelectProducts   = styled.div`
   margin-top: 120px;
   display: flex;
   flex-direction: column;
`
export const ContentSelectSearch   = styled.div`
   margin-bottom: 60px;
   width: 100%;
   display: flex;
   justify-content: space-between;
`

export const Products   = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const SectionTitleProducts   = styled.h4`
   font-size: 35px;
   font-weight: 800;
   color: ${(props) => props.theme.colors.black};
   text-transform: uppercase;
   margin-bottom: 20px;
   margin-top: 50px;
`
export const SectionProducts = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
`


export const ContentCart = styled.div`
    width: 440px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ff00d4;
`
