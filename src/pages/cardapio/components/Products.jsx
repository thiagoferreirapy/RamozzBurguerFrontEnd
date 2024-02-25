import styled from 'styled-components'
export default function Products({ name, description, value }){
    
    const ContainerProducts = styled.div`
        width: 100%;
        display: flex;
        padding: 10px;
        flex-direction: column;
    `
    const ContentNameValue = styled.div`
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    `
    const NameProduct = styled.h4`
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        color: ${(props) => props.theme.colors.black};
        width: auto;
        flex-wrap: nowrap;
        display: block;

        @media (max-width: 600px){
            font-size: 16px;
        }
        @media (max-width: 600px){
            font-size: 15px;
        }
        
    `

    const ValueProduct = styled.h4`
        font-size: 19px;
        font-weight: 700;
        text-transform: uppercase;
        color: ${(props) => props.theme.colors.black};
        width: auto;
        flex-wrap: nowrap;
        @media (max-width: 400px){
            font-size: 16px;
        }
    `
    const Description = styled.p`
        font-size: 16px;
        font-weight: 500;
        color: ${(props) => props.theme.colors.black};
        width: auto;
        flex-wrap: nowrap;
    `
    const Separator = styled.div`
        height: 20px;
        border-bottom: 2px dashed black;
        width: auto;
    `


    return (
        <ContainerProducts>
            <ContentNameValue>
                <NameProduct>{name}</NameProduct>
                <Separator/>
                <ValueProduct>{value}</ValueProduct>
            </ContentNameValue>
            <Description>{description}</Description>
        </ContainerProducts>
    )
}
