import styled from 'styled-components'


export const ContentTextInformation = styled.div`
    width: 650px;
    height: 320px;
    display: flex;
    flex-direction: column;
    align-items: self-start;

    @media (max-width: 1300px){
        width: 550px;
        margin-right: 50px;
    }

    @media (max-width: 1200px){
        width: 500px;
        margin-right: 30px;
    }
    @media (max-width: 1050px){
        width: 450px;
        margin-right: 20px;
    }
    @media (max-width: 990px){
        width: 500px;
        margin-right: 20px;
        align-items: center;
    }

    @media (max-width: 700px){
        margin: 0px;
        width: 450px;
        margin-right: 20px;
    }

    @media (max-width: 490px){
        margin: 0px;
        width: 400px;
    }

    @media (max-width: 391px){
        margin: 0px;
        width: 350px;
    }

    @media (max-width: 360px){
        margin: 0px;
        width: 330px;
    }

    @media (max-width: 350px){
        margin: 0px;
        width: 300px;

    }

    
    

`
export const TitleInformation = styled.h2`
    color: ${(props) => props.theme.colors.black};
    font-size: 25px;
    font-weight: 800;
    text-transform: uppercase;

    @media (max-width: 490px){
        font-size: 20px;
    }
    @media (max-width: 391px){
        font-size: 18px;
    }
    @media (max-width: 350px){
        font-size: 15px;
    }
    
`
export const SubTitleInformation = styled.h3`
    color: ${(props) => props.theme.colors.green};
    font-size: 30px;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 20px;

    @media (max-width: 490px){
        font-size: 25px;
    }

    @media (max-width: 391px){
        font-size: 22px;
    }
    @media (max-width: 320px){
        font-size: 20px;
    }
`

export const Text = styled.p`
    color: ${(props) => props.theme.colors.black};
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: justify;
    width: 550px;

    @media (max-width: 1200px){
        width: 500px;
    }

    @media (max-width: 1050px){
        width: 450px;
    }
    @media (max-width: 990px){
        width: 450px;
    }
    @media (max-width: 490px){
        width: 400px;
    }

    @media (max-width: 391px){
        width: 350px;
    }

    @media (max-width: 360px){
        width: 330px;
    }
    @media (max-width: 350px){
        width: 300px;
    }
`

export const ContainerGalery = styled.div`
    width: 500px;
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 700px){
        margin: 0px;
    }
    @media (max-width: 530px){
        display: none;
    }
    
`
export const ImageBackgroundBurguer = styled.img`
    position: absolute;
    bottom: -100px;
    left: -150px;
    z-index: -1;

    @media (max-width: 650px){
        display: none;
    }
`
