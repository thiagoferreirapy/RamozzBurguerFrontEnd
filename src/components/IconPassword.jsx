import styled from "styled-components";
import { useState } from "react";
import eye from '../images/icons/eye.svg'
import eye_close from '../images/icons/eye_close.svg'

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid ${(props) => props.theme.colors.graySecondary};
    border-radius: 10px;
    background-color: transparent;
    padding-left: 10px;
    margin-bottom: 20px;

    color: ${(props) => props.theme.colors.black};
    border: 1px solid ${(props) => props.theme.colors.graySecondary};
    border: 1px solid ${(props) => (props.isValid ? props.theme.colors.graySecondary : props.theme.colors.danger)};
    font-size: 16px;
    font-weight: 500;
    outline: none;

    &:focus{
        border: 2px solid ${(props) => props.theme.colors.gray};
    }
`;


export const ContentInputPAssaword = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    position: relative;
`;

export const IconPassword = styled.img`
    position: absolute;
    background-color: transparent;
    top: 50%;
    right: 0.5%;
    transform: translate(-50%, -50%);
    cursor: pointer;
`;



export function InputPassword({value, onChange, placeholder, required, isValid}){
    const [typeInput, settypeInput] = useState('password')
    const handleTypePassword = () => {
        if(typeInput == 'password'){
            settypeInput('text')
        }else{
            settypeInput('password')
        }
        
    }
    return(
        <>
            <ContentInputPAssaword>
                <Input type={typeInput} placeholder={placeholder} value={value} required={required} onChange={onChange}/>
                <IconPassword onClick={handleTypePassword} src={typeInput == 'password' ? eye_close: eye}/>
            </ContentInputPAssaword>
        </>
    );
}