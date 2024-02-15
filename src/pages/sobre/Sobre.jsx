import ImageLogo from '../../components/ImageLogo';
import Header from '../../layouts/header/Header';
import  { Main, ContainerInicial, ContentTitle, Title, SubTitle, ContentInformationsSobre, ContentInformations, ContentTextSobre, TitleInformation,SubTitleInformation, ParagraphInformation, ContentImages, ContentColumOne, ContentColumtwo, Img, Imgtwo} from './style';

import logo from '../../images/logo.svg'

import imgburguer1 from '../../images/imgBurguers/burguerCheddar.svg'
import imgburguer2 from '../../images/imgBurguers/burguerTicken.svg'
import imgburguer3 from '../../images/imgBurguers/saltBurguer.svg'
import Button from '../../components/Button';

export default function Sobre() { 
    
    return (
        <Main>
            <Header currentPage="sobre"/>

            <ContainerInicial>
                <ContentTitle>
                    <Title>Sobre Nós</Title>
                    <SubTitle>Conheça um pouco sobre a RAMOZZ BURGUERS</SubTitle>
                </ContentTitle>
            </ContainerInicial>
 
            <ContentInformationsSobre>

                <ContentInformations>
                  <ContentTextSobre>
                    <TitleInformation>Ramozz Burguer</TitleInformation>
                    <SubTitleInformation>Conheça a nossa história</SubTitleInformation>
                    <ParagraphInformation>
                        No ano de 2023, Maria Ramozz, uma mulher destemida com um desejo ardente de empreender, deu vida à Ramozz Burguers, um santuário culinário para os amantes de hambúrgueres. Determinada a criar algo excepcional, Maria mergulhou no mundo dos sabores, explorando combinações únicas e aprimorando suas habilidades na arte de grelhar. Com uma receita singular em mãos, ela inaugurou sua hamburgueria, transformando-a rapidamente em um ponto de encontro popular para entusiastas de todas as idades.
                    </ParagraphInformation>
                    <ParagraphInformation>
                        O segredo do sucesso de Maria não estava apenas na qualidade excepcional dos hambúrgueres, mas também em seu comprometimento em utilizar ingredientes frescos e de alta qualidade. A atmosfera calorosa e acolhedora do local, aliada à dedicação incansável da empreendedora, conquistou os corações dos clientes. A história da Ramozz Burguers não é apenas sobre a deliciosa culinária, mas também sobre a determinação de uma mulher apaixonada, cuja visão empreendedora transformou sonhos em realidade, deixando uma marca irresistível na vida de todos que cruzam as portas dessa hamburgueria única.
                    </ParagraphInformation>
                  </ContentTextSobre>
                  <ContentImages>
                    <ContentColumOne>
                        <Img src={imgburguer1}/>
                        <Img src={imgburguer1}/>
                        <Img src={imgburguer1}/>
                    </ContentColumOne>
                    <ContentColumtwo>
                        <Imgtwo src={imgburguer3}/>
                        <Img src={imgburguer2}/>
                    </ContentColumtwo>
                    
                  
                  </ContentImages>
                </ContentInformations>
                <div style={{ marginTop: '30px', marginLeft: '90px' }}>
                <Button label={'Peça Já!'} link={'delivery'}/>
                </div>
            </ContentInformationsSobre>
        </Main>
    );
}
  
  