import styled from 'styled-components'


export const Card = styled.div`
    width: 370px;
    height: 160px;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.graySecondary};
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.white};
    margin-bottom: 20px;
    cursor: pointer;
    position: relative;
`;
export const ContainerTextCard = styled.div`
    display: flex;
    flex-direction: column; 
`;
export const Title = styled.h1`
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.black};
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export const Description = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.gray};
    text-transform: initial;
    text-align: justify;
    margin-right: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 65px;
`;

export const Value = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.green};
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
`;

export const ImgBurguer = styled.img`
    width: 100px;
    height: 130px;
    object-fit: cover;
    border-radius: 10px;
`;