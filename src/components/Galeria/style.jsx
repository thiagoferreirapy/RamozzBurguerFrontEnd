import styled from 'styled-components'


export const TextTitle = styled.p`
    color: ${(props) => props.theme.colors.green};
    font-size: 30px;
    font-weight: 900;
    text-transform: uppercase;

    @media (max-width: 500px){
        font-size: 25px;
    }

    @media (max-width: 490px){
        font-size: 20px;
    }

    @media (max-width: 380px){
        font-size: 18px;
    }

    @media (max-width: 350px){
        font-size: 16px;
    }
    
`
export const Title = styled.h1`
    color: ${(props) => props.theme.colors.white};
    font-size: 50px;
    font-weight: 900;
    text-transform: uppercase;

    @media (max-width: 600px){
        font-size: 40px;
    }
    @media (max-width: 500px){
        font-size: 35px;
    }
    @media (max-width: 490px){
        font-size: 30px;
    }
    @media (max-width: 380px){
        font-size: 25px;
    }
    @media (max-width: 350px){
        font-size: 20px;
    }

`
export const SubTitle = styled.h2`
    color: ${(props) => props.theme.colors.white};
    font-size: 30px;
    font-weight: 900;
    text-transform: uppercase;

    @media (max-width: 500px){
        font-size: 25px;
    }
    @media (max-width: 490px){
        font-size: 20px;
    }
    @media (max-width: 380px){
        font-size: 18px;
    }

    @media (max-width: 350px){
        font-size: 16px;
    }
`

export const ContentSliderImage = styled.div`
    width: 100%;
    margin-top: 50px;
`

export const ContainerImagesGalery = styled.div`
    width: 100%;
    height: 400px;
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    @media (max-width: 1350px){
        display: none;
    }
`
export const ContainerImagesGaleryConvert = styled.div`
    width: 100%;
    column-count: 4;
    display: none;
    margin-top: 50px;
    @media (max-width: 1350px){
        display: flex;
    }
`

export const ContentImages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 380px;

    /* margin: 10px 0 0 0; */
    
`
export const DivImg = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const Image = styled.img`
    width: auto;
    height: ${(props) => (props.altura ? props.altura : 'auto')};

`


