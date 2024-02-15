import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.section`
    background-color: ${(props) => (props.isScrolled ? '#1a1a1a83' : 'transparent')};
    width: 1500px;
    height: 140px;
    padding: 15px 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    top: 0;
    z-index: 2;
`;

export const ImgLogo = styled.img`
    width: 90px;
    margin-right: 140px;
`;

export const MenuBar = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
`;

export const Links = styled(Link)`
    margin-left: 50px;
    font-size: 16px;
    font-weight: 600;
    color: #ffff;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    border-bottom: 2px solid transparent;

    
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

