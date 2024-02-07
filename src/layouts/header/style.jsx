import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.section`
    /* background-color: #1a1a1a83; */
    width: 1500px;
    height: 140px;
    padding: 15px 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    z-index: 1;
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

    &:hover{
        color: #365C32;
        font-weight: 600;
    }
`;

