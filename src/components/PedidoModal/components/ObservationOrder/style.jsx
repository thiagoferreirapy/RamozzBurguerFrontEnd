import styled from "styled-components";

export const ContentOption = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.colors.white};
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContentTitleOption = styled.div`
    width: 100%;
    height: 50px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: ${(props) => props.theme.colors.blueSecondary};
    border-bottom: 1px solid ${(props) => props.theme.colors.blackBorder};
`;

export const Separator = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TitleOption = styled.h5`
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.black};
`;
export const ContentTextObservation = styled.textarea`
    min-width: 95%;
    max-width: 95%;
    max-height: 120px;
    min-height: 40px;
    width: 95%;
    height: 70px;
    margin-top: 10px;
    padding: 7px;
    border-radius: 10px;
    border: 2px solid ${(props) => props.theme.colors.graySecondary};
    outline: none;
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.black};
    background-color: transparent;

    &:focus{
        border: 2px solid ${(props) => props.theme.colors.gray};
    }
`;
