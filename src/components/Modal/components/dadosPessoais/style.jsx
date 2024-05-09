import styled from 'styled-components'

export const LabelForm = styled.label`
    display: flex;
    flex-direction: column;
    flex-direction: column;
    margin-bottom: 10px;
`

export const Text = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.gray};
    margin: 5px;
`;
export const MsgAlert = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.danger};
    margin: 5px;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid ${(props) => props.theme.colors.graySecondary};
    border: 1px solid ${(props) => (props.isNameValid) ? props.theme.colors.graySecondary : props.theme.colors.danger};
    border-radius: 10px;
    background-color: transparent;
    padding-left: 10px;
    

    color: ${(props) => props.theme.colors.black};
    font-size: 16px;
    font-weight: 500;
    outline: none;

    &:focus{
        border: 2px solid ${(props) => props.theme.colors.gray};
    }
`;
export const InputEmail = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid ${(props) => props.theme.colors.graySecondary};
    border: 1px solid ${(props) => (props.isEmailValid) ? props.theme.colors.graySecondary : props.theme.colors.danger};
    border-radius: 10px;
    background-color: transparent;
    padding-left: 10px;

    color: ${(props) => props.theme.colors.black};
    font-size: 16px;
    font-weight: 500;
    outline: none;

    &:focus{
        border: 2px solid ${(props) => props.theme.colors.gray};
    }
`;

export const ContentButtons = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

`;

