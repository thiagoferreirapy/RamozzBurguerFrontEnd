import { Link } from 'react-router-dom';
import  { FooterContainer, ContentFooter, ContentDirectedFooter, ContentInformations, Title, SubTitle, Informations, Text,Strong, ContentLinksInstitucional, Links , AlertMsg, ContentAlingText, ContentContato, ContentIconsTextAlign, ImgIcon, ContentAling, TextNormal, ContentRedesSociais, RedesSociais, ImgIconRedes, TextLink } from './style';
import logo from '../../images/logo.svg'
import loc from '../../images/icons/locIcon.svg'
import phone from '../../images/icons/phoneIcon.svg'
import whats from '../../images/icons/whatsIcon.svg'
import facebook from '../../images/icons/instagram.svg'
import instagram from '../../images/icons/facebook.svg'
import tiktok from '../../images/icons/tiktok.svg'
import pinterest from '../../images/icons/pinterest.svg'

import ImageLogo from '../../components/ImageLogo';


export default function Footer(){
    return (
        <FooterContainer>
            <ContentFooter>
                <ContentInformations>
                    <ImageLogo src={logo}/>
                    <Title>Ramozz Bursguer</Title>
                    <Informations>
                        <Text><Strong>Horário de funcionamento:</Strong></Text>
                        <Text>Segunda – Fechado</Text>
                        <Text>Terça a Sexta – 18:30 às 23:00</Text>
                        <Text>Sábado – 13:00 às 22:30</Text>
                        <Text>Domingo – 13:00 às 22:00</Text>

                    </Informations>
                    <AlertMsg>*Observação: A cozinha encerra 30 min antes do estabelecimento fechar.</AlertMsg>
                </ContentInformations>
                <ContentLinksInstitucional>
                    <ContentAlingText>
                        <SubTitle>Institucional</SubTitle>
                        <Links to={'/'}>Home</Links>
                        <Links to={'/sobre'}>Quem Somos</Links>
                        <Links to={'/cardapio'}>Cardápio</Links>
                        <Links to={'/'}>Delivery</Links>
                        <Links to={'/'}>Orçamentos</Links>
                        <Links to={'/'}>Contato</Links>
                    </ContentAlingText>
                </ContentLinksInstitucional>

                <ContentContato>
                    <ContentAling>
                        <SubTitle>Institucional</SubTitle>
                        <ContentIconsTextAlign>
                            <ImgIcon src={loc}/>
                            <TextNormal>Rua Artur de Azevedo, 898 Pinheiros, São Paulo/SP</TextNormal>
                        </ContentIconsTextAlign>
                        <ContentIconsTextAlign>
                            <ImgIcon src={phone}/>
                            <TextNormal>(11) 994162084</TextNormal>
                        </ContentIconsTextAlign>
                        <ContentIconsTextAlign>
                            <ImgIcon src={whats}/>
                            <TextNormal>(11) 994162084</TextNormal>
                        </ContentIconsTextAlign>

                        <ContentRedesSociais>
                            <SubTitle>Siga as nossas redes sociais</SubTitle>
                            <RedesSociais>
                                <ImgIconRedes src={instagram}/>
                                <ImgIconRedes src={facebook}/>
                                <ImgIconRedes src={tiktok}/>
                                <ImgIconRedes src={pinterest}/>
                            </RedesSociais>
                        </ContentRedesSociais>
                    </ContentAling>
            
                </ContentContato>
            </ContentFooter>
            <ContentDirectedFooter>
                
                <ContentIconsTextAlign>
                    <TextNormal>Hamburgueria RAMOZZ BURGUERS 2023 - Todos os direitos reservados</TextNormal>
                </ContentIconsTextAlign>
                <ContentIconsTextAlign>
                    <TextLink>Termos de uso</TextLink>
                    <TextNormal>|</TextNormal>
                    <TextLink>Políticas de Privacidade</TextLink>
                </ContentIconsTextAlign>
            </ContentDirectedFooter>
        </FooterContainer>
    )
}