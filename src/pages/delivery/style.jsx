import styled, { keyframes } from 'styled-components'
import background from '../../images/background2.svg'


export const Main = styled.main`
    /* background: red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


export const ContainerInicial = styled.div`
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* filter: brightness(0.9) grayscale(0.5); */
    width: 100%;
    height: 80vh;

    @media (min-width: 1550px){
        width: 70%; 
    }
    
    @media (max-width: 1100px) and (orientation: landscape){
        height: 800px;  
    }
    @media (max-width: 900px) and (orientation: landscape){
        height: 800px;  
    }
    @media (max-width: 700px) and (orientation: landscape){
        height: 800px;             
    }
    @media (max-width: 500px) and (orientation: landscape){
        height: 800px;
        
    }
    @media (max-width: 350px) and (orientation: landscape){
        height: 800px;
        
    }

    @media (max-width: 380px){
        height: 800px;
        
    }
`;

export const ContentTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
`

export const Title = styled.h1`
    color: ${(props) => props.theme.colors.white};;
    font-size: 100px;
    font-family: 'Road Rage';
    font-weight: 400;
    line-height: 40px;
    text-transform: uppercase;
    margin: 50px 0 30px;

    @media (max-width: 650px){
        font-size: 80px;
    }

    @media (max-width: 490px){
        font-size: 70px;
    }
    @media (max-width: 390px){
        font-size: 60px;
        margin: 50px 0 15px;
    }

    @media (max-width: 370px){
        font-size: 57px;
        margin: 50px 0 15px;
    }

    @media (max-width: 350px){
        font-size: 50px;
        margin: 50px 0 15px;
    }
`

export const SubTitle = styled.h2`
    color: ${(props) => props.theme.colors.white};
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 50px;
    @media (max-width: 650px){
        font-size: 24px;
    }

    @media (max-width: 490px){
        font-size: 20px;
    }

    @media (max-width: 390px){
        font-size: 18px;
        margin-bottom: 60px;
    }

    @media (max-width: 370px){
        font-size: 17px;
        margin-bottom: 60px;
    }

    @media (max-width: 350px){
        font-size: 15px;
        margin-bottom: 100px;
    }

`
export const ContentButtonLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    @media (max-width: 350px){
        bottom: -30px;
        
    }
`

export const Text = styled.p`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 25px;

    @media (max-width: 350px){
        font-size: 14px;
        
    }
`


export const ContainerDelivery = styled.section`
    width: 100%;
    background-color: ${(props) => props.theme.colors.whiteQuartenary};
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
    @media (min-width: 1550px){
        width: 70%; 
    }
`

export const ContainerProducts = styled.div`
    width: 875px;
    padding: 50px 100px 0 0;
    background-color: ${(props) => props.theme.colors.whiteQuartenary};
    display: flex;
    flex-direction: column;
`
export const ContainerCategoryProducts = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

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
    font-size: 14px;
    font-weight: 400;
    text-align: justify;
    line-height: 18px;
    color: ${(props) => props.theme.colors.gray};
`

export const ValueProduct = styled.p`
    font-size: 16px;
    text-transform: capitalize;
    font-weight: 600;
    color: ${(props) => props.theme.colors.green};
    margin-top: 5px;
    span{
        color: ${(props) => props.theme.colors.gray};
    }
`

export const ContentImage = styled.div`
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
export const ImageOrder = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
















export const ContainerProductsBag = styled.div`
    width: 430px;
    display: flex;
    flex-direction: column;

`
export const ContentOptionBag = styled.div`
    width: 100%;
    height: 100px;
    margin-top: 50px;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: black;
    font-size: 18px;
    font-weight: 600;
`
export const ContentBag = styled.div`
    width: 100%;
    margin-top: 20px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`

export const ContentLocationDelivery = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 10px 10px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    gap: 10px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    p{
        font-size: 16px;
        font-weight: 600;
        color: ${(props) => props.theme.colors.black};

    }
`
export const BagProducts = styled.div`
    width: 100%;
    padding: 18px;
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
    color: black;
    gap: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    p{
        font-size: 16px;
        font-weight: 600;
        color: ${(props) => props.theme.colors.black};

    }
`

export const TitleBag = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
    padding: 0 10px;
    margin-bottom: 5px;
    p{
        font-size: 16px;
        font-weight: 600;
        color: ${(props) => props.theme.colors.black};
    }
    span{
        font-size: 16px;
        font-weight: 500;
        color: ${(props) => props.theme.colors.black};
        cursor: pointer;
    }
`
export const ContentItensBag = styled.div`
    width: 100%;
    max-height: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 7px;
        border-radius: 0px 0px 10px;
        background-color: transparent
    }
    &::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: ${(props) => props.theme.colors.graySecondary};
    }

`

export const CardBag = styled.div`
    width: 100%;
    height: auto;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`

export const ContentImgItem = styled.div`
    width: 60px;
    height: 80px;
    overflow: hidden;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.gray};
`

export const ContentInformationBag = styled.div`
    width: 300px;
    height: 80px;
    display: flex;
    flex-direction: column;
`

export const InformationsBag = styled.div`
    width: 300px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Itemsdescriptions = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    
    h5{
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
        color: ${(props) => props.theme.colors.black};
    }
    p{
        font-size: 14px;
        font-weight: 500;
        text-transform: capitalize;
        color: ${(props) => props.theme.colors.gray};
    }
`

export const ItemsValue = styled.h5`
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.black};
`

export const ContentButtonsCard = styled.div`
    width: 100%;
    display: flex;
    align-items: end;
    justify-content: flex-end;
    gap: 20px;

    button{
        background-color: transparent;
        border: none;
        color: ${(props) => props.theme.colors.black};
        font-size: 14px;
        font-weight: 600;
    }
`

export const ContainerBagValues = styled.div`
    width: 100%;
    height: 185px;
    padding: 18px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    color: black;
    gap: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    border-radius: 0 0 10px 10px;
`

export const ContentValue = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        font-size: 16px;
        font-weight: 500;
        color: ${(props) => props.theme.colors.gray};
        margin: 0;
        line-height: 20px;
    }
    h6{
        font-size: 18px;
        font-weight: 600;
        color: ${(props) => props.theme.colors.black};
        margin: 0;
    }
`
export const ButtonFinalizeOrder = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: none;
    background-color: ${(props) => props.theme.colors.green};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
`