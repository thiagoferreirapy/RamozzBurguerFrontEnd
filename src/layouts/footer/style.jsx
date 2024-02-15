import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const FooterContainer = styled.section`
    width: 100%;
    background-color: ${(props) => props.theme.colors.black};
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    position: relative;
`
export const ContentFooter = styled.section`
    width: 100%;
    background-color: ${(props) => props.theme.colors.black};
    padding-top: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const ContentDirectedFooter = styled.div`
    width: 100%;
    height: 100px;
    padding-bottom: 20px;
    background-color: ${(props) => props.theme.colors.black};
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid #fff;
`

export const ContentInformations = styled.div`
    width: 400px;
    height: 500px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: blue; */
`

export const Title = styled.h3`
    font-family: 'Road Rage';
    font-size: 50px;
    font-weight: 400;
`
export const SubTitle = styled.h4`
    font-size: 20px;
    font-weight: 900;
    text-transform: uppercase;
    
`

export const Informations = styled.div`
    width: 55%;
    margin-top: 30px;
`
export const Text = styled.p`
    font-size: 16px;
    font-weight: 600;
    margin-top: 5px;
    
`
export const TextNormal = styled.p`
    font-size: 16px;
    font-weight: 600;
`
export const Strong = styled.strong`
    font-weight: 700;
    margin-bottom: 10px;
`
export const AlertMsg = styled.strong`
    font-size: 14px;
    font-weight: 500;
    width: 70%;
    text-align: center;
    margin-top: 30px;
`


export const ContentLinksInstitucional = styled.div`
    width: 400px;
    height: 500px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: yellow; */
`
export const ContentAlingText = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: self-start;
    margin-top: 50px;

`

export const ContentAling = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: self-start;
    margin-top: 50px;
`


export const Links = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    margin-top: 15px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    &:hover{
        color: ${(props) => props.theme.colors.green};
        border-bottom: 2px solid #fff;
    }
`
export const TextLink = styled.a`
    margin: 0 10px;
    text-decoration: none;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    &:hover{
        color: ${(props) => props.theme.colors.green};
        border-bottom: 2px solid #fff;
    }
`

export const ContentContato = styled.div`
    width: 400px;
    height: 500px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const ContentIconsTextAlign = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

export const ImgIcon = styled.img`
    width: 20px;
    margin-right: 20px;
    object-fit: cover;
`
export const ImgIconRedes = styled.img`
    width: 30px;
    object-fit: cover;
`


export const ContentRedesSociais = styled.div`
    width: 100%;
    margin-top: 40px;
    border-top: 3px solid #fff;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
`
export const RedesSociais = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
`