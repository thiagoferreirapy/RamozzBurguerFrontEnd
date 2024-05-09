import { Link } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components'

const Links = styled(Link)`
    font-size: 16px;
    font-weight: 600;
    
    color: #FFF;
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

export function LinksHeader({ to, pageHome, color, borderBottom, label }){
    return (
        <>
            <Links to={to} style={{ color, borderBottom}} >
                {label}
            </Links>
        </>
    )
}
    
