import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.img`
    width: auto;

    @media (max-width: 490px){
        width: 70px;
    }

    
`

export default function ImageLogo({src}){
    return(
        <>
            <Link to="/">
                <Logo src={src} alt="Imagem da logo da Ramozz Burguer"/>
            </Link>
        </>
    );
}