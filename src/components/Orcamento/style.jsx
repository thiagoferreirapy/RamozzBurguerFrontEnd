import styled from 'styled-components'
import { Link } from 'react-router-dom';


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
export const ContentButton = styled.div`
    width: 630px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Button = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    width: auto;
    height: 45px;
    border: none;
    border-radius: 10px;
    background-color: #4a6a46;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 16px;
    font-weight: 800;
    padding: 0 30px;
    transition: 0.3s all ease-in-out;
    &:hover{
        background-color: ${(props) => props.theme.colors.green};
        filter: none;
        opacity: 100%;
    }
`