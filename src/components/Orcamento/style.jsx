import styled from 'styled-components'

export const ImageRound = styled.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 50%;
`
export const ContentInformations = styled.div`
    width: 700px; 
    margin-left :60px ;
`
export const Title = styled.h1`
    color: ${(props) => props.theme.colors.green};
    font-size: 50px;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 40px;
`
export const Text = styled.p`
    color: ${(props) => props.theme.colors.black};
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: justify;
    width: 630px;
`