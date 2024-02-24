import { Link } from "react-router-dom";
import styled from "styled-components";

const ContentButton = styled.button`
    width: 230px;
    height: 45px;
    border: none;
    border-radius: 10px;
    background-color: #4a6a46;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 16px;
    font-weight: 800;

    transition: 0.3s all ease-in-out;
    &:hover{
        background-color: ${(props) => props.theme.colors.green};
        filter: none;
        opacity: 100%;
    }
`

export default function Button({label, link, target}){
    return(
        <>
            <Link to={target ? link : '/' + link} target={target ? "_blank" : '_parent'}>
                <ContentButton>{label}</ContentButton>
            </Link>
          
        </>
    );
}