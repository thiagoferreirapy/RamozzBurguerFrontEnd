import styled from 'styled-components'

export const LabelForm = styled.label`
    display: flex;
    flex-direction: column;
    flex-direction: column;
    margin-bottom: 20px;
`

export const Text = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.gray};
    margin: 5px;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid ${(props) => props.theme.colors.graySecondary};
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


export const AlignText = styled.div`
    text-align: center;
    margin-bottom: 25px;
`

export const ContentButtons = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

`;
export const AlertCode = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;


export const MsgAlert = styled.p`
    background-color: ${(props) => props.theme.colors.danger};
    width: auto;
    height: 40px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 30px;
    border-radius: 10px;

    font-size: 16px;
    font-weight: 600;
`;
