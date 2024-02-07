import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
    width: auto;
    max-height: 320px;
    /* padding: 7px 10px; */
    margin-top: ${(props) => (props.margintp ? props.margintp : '0')};
    margin-left: ${(props) => (props.marginlft ? props.marginlft : '0')};
    object-fit: cover;
`

export default function ImageBurguer({src, marginlft, margintp}){
    return(
        <>
         
            <Image src={src} marginlft={marginlft} margintp={margintp} alt="Imagem da logo da Ramozz Burguer"/>
          
        </>
    );
}