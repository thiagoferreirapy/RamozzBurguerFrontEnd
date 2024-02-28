import styled from 'styled-components'
import background from '../../images/background2.svg'

export const Main = styled.main`
    /* background: red; */
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

    @media (max-width: 490px){
        height: 100vh;
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

    @media (max-width: 390px){
        font-size: 80px;
        margin: 100px 0 30px;
    }
`

export const SubTitle = styled.h2`
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;

    @media (max-width: 800px){
        font-size: 25px;
        text-align: center;
    }
    @media (max-width: 390px){
        font-size: 20px;
        text-align: center;
    }
`
export const ContentInformationsSobre = styled.div`
    height: 950px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    @media (min-width: 1550px){
        width: 70%; 
    }
    @media (max-width: 1200px){
        flex-direction: column;
        height: 1200px;
    }

    
    @media (max-width: 600px){
        flex-direction: column;
        height: 1500px;
        
    }
    @media (max-width: 490px){
        flex-direction: column;
        height: 1700px;
        
    }
    @media (max-width: 390px){
        flex-direction: column;
        height: 1900px;
        
    }
`

export const ContentInformations = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    @media (max-width: 1200px){
        flex-direction: column;
        
    }
    @media (max-width: 700px){
        flex-direction: column;
        
    }
    @media (max-width: 600px){
        flex-direction: column;
        
    }
    @media (max-width: 550px){
        flex-direction: column; 
        
    }
    @media (max-width: 490px){
        flex-direction: column; 
        
    }
    @media (max-width: 391px){
        flex-direction: column; 
    }
`
export const ContentTextSobre = styled.div`
    height: 500px;
    width: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1200px){
        text-align: center;
        margin: 60px 0px ;
    }

    @media (max-width: 700px){
        flex-direction: column;
        width: 550px;
    }
    @media (max-width: 600px){
        flex-direction: column;
        width: 500px;
    }
    @media (max-width: 550px){
        flex-direction: column;
        width: 450px;
        margin-bottom: 90px;
    }

    @media (max-width: 490px){
        flex-direction: column;
        width: 380px;
        height: 800px;
    }
    @media (max-width: 391px){
        flex-direction: column;
        width: 350px;
        height: 850px;
        
    }
    @media (max-width: 375px){
        flex-direction: column;
        width: 320px;
        height: 850px;
        
    }

    @media (max-width: 350px){
        flex-direction: column;
        width: 300px;
        height: 850px;
        
    }
    
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
    
    @media (max-width: 800px){
        font-size: 25px;
        
    }
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

    @media (max-width: 550px){
        flex-direction: column;
        width: 450px;
        height: 750px;
        margin: 30px 0;
    }

    @media (max-width: 490px){
        flex-direction: column;
        width: 380px; 
        height: 800px;
    }
    @media (max-width: 391px){
        flex-direction: column;
        width: 350px;
        height: 850px;
        
    }
    @media (max-width: 375px){
        flex-direction: column;
        width: 320px;
        height: 850px;
        
    }
    @media (max-width: 350px){
        flex-direction: column;
        width: 300px;
        height: 850px;
        
    }
`
export const ContentColumOne = styled.div`
    width: 280px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (max-width: 550px){
        width: 100%;  
        height: 1000px;
    }
`
export const ContentColumtwo = styled.div`
    width: 190px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (max-width: 550px){
        display: none;
 
    }
`
export const Img = styled.img`
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: 550px){
        height: 200px;
        margin-top: 20px ;
    }
    @media (max-width: 490px){
        height: 230px;
        margin-top: 0px ;
    }
`
export const Imgtwo = styled.img`
    width: 100%;
    height: 310px;
`
