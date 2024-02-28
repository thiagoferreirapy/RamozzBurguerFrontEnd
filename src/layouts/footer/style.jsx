import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const FooterContainer = styled.section`
    width: 100%;
    background-color: ${(props) => props.theme.colors.black};
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    

    /* @media (max-width: 1200px){
        background-color: #ff00c8;
    }
    @media (max-width: 1150px){
        background-color: #0051ff;
    } */



`
export const ContentFooter = styled.section`
    width: 100%;
    background-color: ${(props) => props.theme.colors.black};
    padding-top: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (min-width: 1550px){
        width: 70%; 
    }

    @media (max-width: 760px){
        flex-direction: column;
        justify-content: center;
    }
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

    @media (max-width: 880px){
        font-size: 10px;
    }
    @media (max-width: 760px){
        flex-direction: column;
        justify-content: center;
        font-size: 16px;
        height: 200px;
    }
`

export const ContentInformations = styled.div`
    width: 400px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h3`
    font-family: 'Road Rage';
    font-size: 50px;
    font-weight: 400;

    @media (max-width: 880px){
        font-size: 40px;
    }

    @media (max-width: 760px){
        font-size: 60px;
        text-align: center;
        
    }
`
export const SubTitle = styled.h4`
    font-size: 20px;
    font-weight: 900;
    text-transform: uppercase;
    
    @media (max-width: 1200px){
        font-size: 16px;
    }
    @media (max-width: 1150px){
        text-align: center;
    }

    @media (max-width: 760px){
        font-size: 20px;
        text-align: center;
        width: 100%;
    }
`

export const Informations = styled.div`
    width: 55%;
    margin-top: 30px;
    
    @media (max-width: 1200px){
        /* background-color: #ff00c8; */
        width: 75%;
    }

    @media (max-width: 880px){
        width: 80%;
        
    }

    @media (max-width: 760px){
        text-align: center;
    }


`
export const Text = styled.p`
    font-size: 16px;
    font-weight: 600;
    margin-top: 5px;
    @media (max-width: 880px){
        font-size: 15px;
    }

    @media (max-width: 760px){
        font-size: 18px;
    }
    
`
export const TextNormal = styled.p`
    font-size: 16px;
    font-weight: 600;
    @media (max-width: 880px){
        font-size: 15px;
    }
    @media (max-width: 760px){
        font-size: 18px;
    }
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

    @media (max-width: 880px){
        width: 80%;
    }
    @media (max-width: 760px){
        font-size: 16px;
    }
`


export const ContentLinksInstitucional = styled.div`
    width: 450px;
    height: 300px;
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
    @media (max-width: 760px){
        align-items: center;
       
    }
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
    font-size: 16px;
    font-weight: 600;
    margin-top: 15px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    &:hover{
        color: ${(props) => props.theme.colors.green};
        border-bottom: 2px solid #fff;
    }

    @media (max-width: 880px){
        font-size: 15px;
    }

    @media (max-width: 760px){
        font-size: 18px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: blue; */

    @media (max-width: 1200px){
        /* background-color: #15ff00; */
        padding: 0 50px;
    }
    @media (max-width: 1200px){
        /* background-color: #ff00c8; */
        padding: 0 20px;
    }

    @media (max-width: 880px){
        padding: 0 5px;
    }
   

`
export const ContentIconsTextAlign = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    @media (max-width: 760px){
        width: 100%;
        text-align: center;
    }
`

export const ImgIcon = styled.img`
    width: 20px;
    margin-right: 20px;
    object-fit: cover;
    @media (max-width: 760px){
        display: none;
    }
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