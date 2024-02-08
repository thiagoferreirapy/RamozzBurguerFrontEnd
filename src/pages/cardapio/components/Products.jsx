import styled from 'styled-components'
export default function Products({ name, description, value }){
    
    const ContainerProducts = styled.div`
        width: 100%;
        display: flex;
        padding: 20px;
        flex-direction: column;
    `
    const ContentNameValue = styled.div`
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: nowrap;
    `
    const NameProduct = styled.h4`
        font-size: 19px;
        font-weight: 700;
        text-transform: uppercase;
        color: ${(props) => props.theme.colors.black};
        width: auto;
        flex-wrap: nowrap;

    `

    const ValueProduct = styled.h4`
        font-size: 19px;
        font-weight: 700;
        text-transform: uppercase;
        color: ${(props) => props.theme.colors.black};
        width: auto;
        flex-wrap: nowrap;
    `
    const Description = styled.p`
        font-size: 16px;
        font-weight: 500;
        color: ${(props) => props.theme.colors.black};
        width: auto;
        flex-wrap: nowrap;
    `
    const Separator = styled.div`
        width: 60%;
        height: 20px;
        border-bottom: 2px dashed black;
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
