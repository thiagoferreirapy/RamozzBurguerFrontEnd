import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const ImageRound = styled.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 50%;

    @media (max-width: 500px){
        width: 350px;
        height: 350px;
    }

    @media (max-width: 380px){
        width: 320px;
        height: 320px
    }
    @media (max-width: 350px){
        width: 280px;
        height: 280px
    }
`
export const ContentInformations = styled.div`
    width: 700px; 
    margin-left :60px ;

    @media (max-width: 1150px){
        width: 600px;
    }

    @media (max-width: 1100px){
        width: 500px;
    }
    @media (max-width: 900px){
        margin-left : 0px ;
    }

    @media (max-width: 500px){
        width: 360px;
    }
    @media (max-width: 380px){
        width: 300px;
    }
    @media (max-width: 350px){
        width: 280px;
    }
`
export const Title = styled.h1`
    color: ${(props) => props.theme.colors.green};
    font-size: 50px;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 40px;

    @media (max-width: 1150px){
        font-size: 40px;
    }
    @media (max-width: 1100px){
        font-size: 30px;
    }
    @media (max-width: 900px){
        text-align: center;
    }

    @media (max-width: 500px){
        font-size: 25px;
    }

    @media (max-width: 380px){
        font-size: 20px;
    }
`
export const Text = styled.p`
    color: ${(props) => props.theme.colors.black};
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: justify;
    width: 630px;
    @media (max-width: 1150px){
        width: 600px;
    }

    @media (max-width: 1100px){
        width: 500px;
    }

    @media (max-width: 500px){
        width: 360px;
    }

    @media (max-width: 380px){
        width: 300px;
    }

    @media (max-width: 350px){
        width: 280px;
    }
`
export const ContentButton = styled.div`
    width: 630px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1100px){
        width: 500px;
    }

    @media (max-width: 500px){
        width: 350px;
    }

    @media (max-width: 380px){
        width: 300px;
    }
    @media (max-width: 350px){
        width: 280px;
    }
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

    @media (max-width: 500px){
        font-size: 14px;
        font-weight: 700;
    }
`