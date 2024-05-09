import styled, { keyframes } from 'styled-components'

export const CategorysCards = styled.div`
    width: 100%;
    margin: 40px 0;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;


`
export const TitleCategory = styled.h3`
    font-size: 35px;
    color: ${(props) => props.theme.colors.black};
    font-weight: bold;
    margin-bottom: 15px;

`
export const ContentCards = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
`
const myAnim = keyframes`
  0% {
    transform: scale(0.5);
  }

  100% {
    transform: scale(1);
  }
`;

export const Card = styled.div`
    width: 380px;
    height: 150px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    position: relative;
    transition: 0.3s all ease;


    .plus-icon{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        right: -9px;
        top: -9px;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 19px;
        background-color: ${(props) => props.theme.colors.green};
        color: ${(props) => props.theme.colors.white
        };
        animation: ${myAnim} 0.5s ease 0s 1 normal forwards;
    }
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.305) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

        .plus-icon {
            display: flex;
        }
    }
`


export const ContentInformation = styled.div`
    width: 240px;
    height: 130px;
    border-radius: 10px;
    display: flex;
    align-items: start;
    justify-content: space-evenly;
    flex-direction: column;
    cursor: pointer;
    
`

export const Nameproduct = styled.h5`
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    color: ${(props) => props.theme.colors.black};
`
export const DescriptionProduct = styled.p`
    font-size: 12px;
    font-weight: 400;
    text-align: justify;
    line-height: 18px;
    color: ${(props) => props.theme.colors.gray};

    width: 103%;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    
`

export const ValueProduct = styled.p`
    font-size: 16px;
    text-transform: capitalize;
    font-weight: 600;
    color: ${(props) => props.theme.colors.green};
    margin-top: 7px;
    span{
        color: ${(props) => props.theme.colors.gray};
    }
`

export const ContentImage = styled.img`
    width: 100px;
    height: 130px;
    overflow: hidden;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.gray};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`






