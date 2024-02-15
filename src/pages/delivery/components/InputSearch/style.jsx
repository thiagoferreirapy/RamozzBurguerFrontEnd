import styled from 'styled-components'


export const ContentInput = styled.label`
    width: 300px;
    height: 45px;
    border: 1px solid ${(props) => props.theme.colors.graySecondary};
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.gray};
    text-align: center;
    display: flex;
    overflow: hidden;
`;
export const Input = styled.input`
    width: 300px;
    height: 45px;
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.gray};

`;
export const Icon = styled.img`
    width: 18px;
    margin: 0 10px;
`;