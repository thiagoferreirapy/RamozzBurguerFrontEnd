import styled, { keyframes, css } from 'styled-components'
import { Link } from 'react-router-dom';

export const alturaMobile = keyframes`
    from {
        height: 140px;
    }
    to {
        height: 100%;
    }
    
`;
export const opacityStyle = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 100%;
    }
    
`;
// #202021dd
export const MenuMobile = styled.section`
    background-color: ${(props) => (props.menuAberto === true ? '#202021' : '#202021dd')};
    width: 100%;
    height: ${(props) => (props.menuAberto === true ? '100%' : '100px')};
    display: none;
    flex-direction: column;
    position: ${(props) => (props.menuAberto === true ? 'fixed' : 'absolute')};
    touch-action: manipulation;
    top: 0;
    z-index: 2;
    transition: 0.5s all linear;
    /* ${(props) => props.menuAberto && css`animation: ${alturaMobile} 0.3s ease-in-out;`} */
    

    @media (max-width: 750px){
        display: flex;
        padding-bottom: 30px
    }

    
    /* background-color: blue; */
`;


export const ContentmenuMobile = styled.div`
    background-color: ${(props) => (props.menuAberto === true ? '#202021' : '#2020210')};
    max-width: 1500px;
    width: 100%;
    height: 100px;
    padding: 15px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

export const MenuBarMobile = styled.div`
    background-color: transparent;
    width: 100%;
    display: flex;
    
    ${(props) => (props.menuAberto === true ? 'display: flex;' : 'display: none;')}
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 0px;
    font-size: 50px;
    ${(props) =>
        props.menuAberto &&
        css`
            animation: ${opacityStyle} 1.5s ease-in-out;
        `};
    /* ${(props) => props.menuAberto && css`animation: ${opacityStyle} 0.10s ease-in-out;`} */
    /* background-color: red; */

    @media (max-width: 850px) and (orientation: landscape){
        margin-top: 0px;
        padding: 0px 50px;
    }

    @media (max-width: 750px) and (orientation: landscape){
        position: absolute;
        bottom: 10px;
        padding: 0px 50px;
    }
    
`;

export const ContentSpaceMenu = styled.div`
    background-color: transparent;
    width: 100%;
    height: 55%;
    ${(props) => (props.menuAberto === true ? 'opacity: 100%;' : 'opacity: 0%;')};
    padding: 15px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const LinksMobile = styled(Link)`
    font-size: 16px;
    font-weight: 600;
    color: #ffff;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    border-bottom: 2px solid transparent;
    /* background-color: yellow; */
    margin: 25px ;
    &:hover{
        color: #365C32;
        font-weight: 600;
        border-bottom: 2px solid #fff;
    }
    &:focus {
        color: #365C32;
        font-weight: 600;
        border-bottom: 2px solid #fff;
    }

    @media (max-width: 750px){
        font-size: 20px;
        
    }
    @media (max-width: 350px){
        font-size: 16px;
        
    }
`;
























export const HeaderContainer = styled.section`
    background-color: ${(props) => (props.isScrolled ? '#1a1a1a83' : 'transparent')};
    max-width: 1500px;
    width: 100%;
    height: 140px;
    padding: 15px 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    top: 0;
    z-index: 2;

    @media (max-width: 750px){
        display: none;
        
    }
    /* background-color: blue; */
`;

export const ContentPosition = styled.div`
    position: relative;
    
    /* ${({ posicao }) => posicao === 'left' ? 'left: 100px;' : 'right: 100px;'} */
    /* background-color: green; */
`;


export const MenuBar = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    /* background-color: red; */
`;

export const Links = styled(Link)`
    /* margin-left: 50px; */
    font-size: 16px;
    font-weight: 600;
    
    color: #FFF;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    border-bottom: 2px solid transparent;
    /* background-color: yellow; */
    
    &:hover{
        color: #365C32;
        font-weight: 600;
        border-bottom: 2px solid #fff;
    }
    &:focus {
        color: #365C32;
        font-weight: 600;
        border-bottom: 2px solid #fff;
    }
`;


export const ContentButton = styled.button`
    text-decoration: none;
    color: #fff;
    width: 230px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: #4a6a46;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;

    transition: 0.3s all ease-in-out;
    &:hover{
        background-color: ${(props) => props.theme.colors.green};
        filter: none;
        opacity: 100%;
    }
`
