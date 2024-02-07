import styled from 'styled-components'


export const TextTitle = styled.p`
    color: ${(props) => props.theme.colors.green};
    font-size: 30px;
    font-weight: 900;
    text-transform: uppercase;
    
`
export const Title = styled.h1`
    color: ${(props) => props.theme.colors.white};
    font-size: 50px;
    font-weight: 900;
    text-transform: uppercase;

`
export const SubTitle = styled.h2`
    color: ${(props) => props.theme.colors.white};
    font-size: 30px;
    font-weight: 900;
    text-transform: uppercase;

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

