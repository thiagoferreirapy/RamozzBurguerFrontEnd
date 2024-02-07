import styled from 'styled-components'


export const ContentTextInformation = styled.div`
    width: 650px;
    height: 320px;
    display: flex;
    flex-direction: column;
    align-items: self-start;



`
export const TitleInformation = styled.h2`
    color: ${(props) => props.theme.colors.black};
    font-size: 25px;
    font-weight: 800;
    text-transform: uppercase;
`
export const SubTitleInformation = styled.h3`
    color: ${(props) => props.theme.colors.green};
    font-size: 30px;
    font-weight: 800;
    text-transform: uppercase;
`

export const Text = styled.p`
    color: ${(props) => props.theme.colors.black};
    font-size: 16px;
    font-weight: 600;
    margin-top: 20px;
    text-align: justify;
    width: 550px;
`
export const Button = styled.button`
margin-top: 15px;
    width: 230px;
    height: 45px;
    border: none;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.green};
    cursor: pointer;

    font-size: 16px;
    font-weight: 800;
    text-transform: uppercase;

    transition: 0.3s all ease-in-out;
    
`
export const ContainerGalery = styled.div`
    width: 500px;
    height: 320px;
    column-count: 2;
    column-gap: 10px;
`
export const ImageBackgroundBurguer = styled.img`
    position: absolute;
    bottom: -100px;
    left: -150px;
    z-index: -1;
`
