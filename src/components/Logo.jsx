import { Link } from "react-router-dom";
import styled from "styled-components";

const ImageLogo = styled.img`
    width: auto;

    @media (max-width: 490px){
        width: 130px;
    }

    @media (max-width: 390px){
        width: 120px;
    }

    @media (max-width: 370px){
        width: 110px;
    }

    @media (max-width: 350px){
        width: 100px;
    }
`

export default function Logo({src}){
    return(
        <>
            <Link to="/">
                <ImageLogo src={src} alt="Imagem da logo da Ramozz Burguer"/>
            </Link>
        </>
    );
}