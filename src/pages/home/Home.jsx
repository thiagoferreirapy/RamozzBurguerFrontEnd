import ImageLogo from '../../components/ImageLogo';
import Header from '../../layouts/header/Header';
import  {Main, ContainerInicial, ContentTitle,
    Title, SubTitle, ContentButtonLink,
    Text, Button, ContainerSobre, ContainerGalery, ContainerOrcamento } from './style';

import logo from '../../images/logo.svg'

import ContentSobre from '../../components/Sobre/ContentSobre';
import ContentGalery from '../../components/Galeria/ContentGalery';

// Swiper
import 'swiper/swiper-bundle.css';
import ContentOrcamento from '../../components/Orcamento/ContentOrcamento';


export default function Home() { 
    
    return (
        <Main>
            <Header/>
            <ContainerInicial>
                <ContentTitle>
                    <ImageLogo src={logo} />
                    <Title>Ramozz Burguers</Title>
                    <SubTitle>HAMBÚRGUER QUE TE DEIXA LOUCO!</SubTitle>
                </ContentTitle>
                <ContentButtonLink>
                    <Text>Delivery em funcionamento até as 22h</Text>
                    <Button>Peça já o seu!</Button>
                </ContentButtonLink>
            </ContainerInicial>
            <ContainerSobre>
                <ContentSobre/>
            </ContainerSobre>
            <ContainerGalery>
                <ContentGalery/>
            </ContainerGalery>
            <ContainerOrcamento>
                <ContentOrcamento />
            </ContainerOrcamento>
        </Main>
    );
}
  
  