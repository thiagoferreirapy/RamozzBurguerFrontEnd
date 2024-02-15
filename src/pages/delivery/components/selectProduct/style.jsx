import styled from 'styled-components'


export const ContentSelect = styled.select`
    width: 180px;
    height: 45px;
    padding: 8px;
    border: 1px solid ${(props) => props.theme.colors.graySecondary};
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.gray};
    text-align: center;
    
`;