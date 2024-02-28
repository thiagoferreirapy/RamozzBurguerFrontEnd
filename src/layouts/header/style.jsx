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

export const MenuMobile = styled.section`
    background-color: ${(props) => (props.menuAberto == true ? '#202021' : '#202021dd')};
    width: 100%;
    height: ${(props) => (props.menuAberto == true ? '100%' : '100px')};
    display: none;
    flex-direction: column;
    position: ${(props) => (props.menuAberto == true ? 'fixed' : 'absolute')};
    
    top: 0;
    z-index: 2;
    transition: 0.5s all linear;
    ${(props) => props.menuAberto && css`animation: ${alturaMobile} 0.3s ease-in-out;`}
    

    @media (max-width: 750px){
        display: flex;
        padding-bottom: 30px
    }

    
    /* background-color: blue; */
`;


export const ContentmenuMobile = styled.div`
    background-color: ${(props) => (props.menuAberto == true ? '#202021' : '#2020210')};
    max-width: 1500px;
    width: 100%;
    height: 140px;
    padding: 15px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    
`;

export const MenuBarMobile = styled.div`
    background-color: transparent;
    width: 100%;
    height: 60%;
    
    
    ${(props) => (props.menuAberto === true ? 'display: flex;' : 'display: none;')};
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    font-size: 50px;

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
    padding: 15px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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
    color: #ffff;
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


