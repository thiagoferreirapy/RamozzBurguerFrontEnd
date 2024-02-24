import styled from 'styled-components'
import img from '../../images/icons/buttonClose.svg'
import { useState } from 'react'


const ContentCart = styled.div`
    width: 100%;
    height: 500px;

    border: 1px solid ${(props) => props.theme.colors.blueTerciary};
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 0px 1px 2px #00000011;
`
const ContentTitleCart = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.blueTerciary};
    border-radius: 10px 10px 0px 0px;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 0px 1px 2px #00000011;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.black};
    position: relative;
    cursor: pointer;
`
const Title = styled.h3`
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.black};
    margin-top: ${(props) => props.Newtitle ? '15px' : '0px'};;
    margin-bottom: ${(props) => props.Newtitle ? '15px' : '0px'};;
`
const SubTitle = styled.h3`
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.black};
`
const Text = styled.p`
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.gray};
    margin-top: 7px;
`
const ContentOptionTypeEntrega = styled.div`
    width: 80%;
    padding: 20px 10px;
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.blueTerciary};
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 0px 1px 2px #00000011;
    text-align: left;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: -239px;
    left: 0;
    transition: 0.10s all linear;
    display: ${(props) => props.display ? 'flex' : 'none'};
    
`
const OptionTypeEntrega = styled.div`
    width: 100%;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: left;
    cursor: pointer;
    &:hover{
        background-color: ${(props) => props.theme.colors.blueSecondary};
    }
`
const Image = styled.img`
    margin-right: 20px;
`

const AlignItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: self-start;
`

const ContentBagProducts = styled.div`
    width: 100%;
    height: 300px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    background-color: #f9fafb;
`
const ContentTitleBag = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
`

const ContainerCardsBag = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: blue; */
    
`
const ProductCard = styled.div`
    width: 95%;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${(props) => props.theme.colors.white};
    padding: 10px;
    border-radius: 10px;
`
const SectionCard = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    padding-top: 20px;
    justify-content: space-around;
    /* background-color: #c8ff00; */
    position: relative;
`
const ImageCard = styled.img`
    width: 60px;
    height: 70px;
    object-fit: cover;

`
const Buttons = styled.div`
    object-fit: cover;
    position: absolute;
    display: flex;
    bottom: 10px;
    right: 20px;
    justify-content: space-between;
`

export default function Cart(){
    const [display, setDisplay] = useState(false)

    const handleOndisplay = () => {
        if(display){
            setDisplay(false)
        }else{
            setDisplay(true)
        }
        
    }

    return (
        <ContentCart>
            <ContentTitleCart onClick={handleOndisplay}>
                <Title>Calcular tempo e taxa de entrega</Title>
                <ContentOptionTypeEntrega display={display}>
                    <Title Newtitle>Como deseja receber o seu pedido?</Title>
                    <OptionTypeEntrega>
                        <Image src={img}/>
                        <AlignItens>
                            <SubTitle>Entrega</SubTitle>
                            <Text>A gente leva até você</Text>
                        </AlignItens>
                    </OptionTypeEntrega>
                    <OptionTypeEntrega>
                        <Image src={img}/>
                        <AlignItens>
                            <SubTitle>Retirada</SubTitle>
                            <Text>Você retira no local</Text>
                        </AlignItens>
                    </OptionTypeEntrega>
                </ContentOptionTypeEntrega>
                
            </ContentTitleCart>

            <ContentBagProducts>
                <ContentTitleBag>
                    <Title>SUA SACOLA</Title>
                    <Title>LIMPAR</Title>
                </ContentTitleBag>
                    
                <ContainerCardsBag>
                    <ProductCard>
                            
                            <AlignItens>
                                <ImageCard src={img}/>
                                <Text>R$ 17,00</Text>
                            </AlignItens>
                            <SectionCard>
                                <AlignItens>
                                    <SubTitle>Entrega</SubTitle>
                                    <Text>A gente leva até você</Text>
                                </AlignItens>
                                
                                <Buttons>editar remover</Buttons>
                            </SectionCard>
                            
                        </ProductCard>
                </ContainerCardsBag>
            </ContentBagProducts>
        </ContentCart>
    )
}