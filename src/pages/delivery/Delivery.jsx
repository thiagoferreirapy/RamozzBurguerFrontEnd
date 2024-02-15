import { Link as Scroll } from 'react-scroll';
import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Header from '../../layouts/header/Header';
import {
  Main,
  ContainerInicial,
  ContentTitle,
  Title,
  SubTitle,
  TextTitle,
  ContentButtons,
  ContainerProducts,
  ContentProducts,
  ContentCart,
  ContentTitleProducts,
  ProductsText,
  TitleProducts,
  ContentTextProducts,
  TextInform,
  TextProducts,
  Icon,
  ContentSelectProducts,
  ContentSelectSearch,
  Products,
  SectionTitleProducts,
  SectionProducts,

} from "./style";
import ImageLogo from '../../components/ImageLogo';
import logo from '../../images/logoBlack.svg'
import iconLoc from '../../images/icons/iconLocGray.svg'
import Select from './components/selectProduct/Select';
import Search from './components/InputSearch/Search';
import CardProduct from './components/cards/CardProduct';
import getProducts from '../../service/api/Products';
import getProductsCategory from '../../service/api/Productscategory';


export default function Delivery() { 
    const [burgersData, setBurgersData] = useState([]);
    const [porcaoData, setPorcaoData] = useState([]);
    const [comboData, setComboData] = useState([]);
    const [bebidaData, setBebidaData] = useState([]);
    const [sobremesaData, setSobremesaData] = useState([]);

    const handleClick = async () => {
        try {
          const response = await getProducts();
          // Manipule a resposta aqui
          console.log(response.data);  // A resposta do Axios está disponível em response.data
        } catch (error) {
          // Manipule os erros aqui
          console.error(error);
        }
      };
      

      const fetchDataBurguers = async () => {
        try {
          const response = await getProductsCategory('Burguer');
          // Atualiza o estado com os dados dos produtos
          setBurgersData(response.data);
          
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        // Chama a função fetchDataBurguers apenas uma vez quando o componente monta
        fetchDataBurguers();
      }, []);

      const fetchDataCombo = async () => {
        try {
          const response = await getProductsCategory('Combo');
          // Atualiza o estado com os dados dos produtos
          setComboData(response.data);
          
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        // Chama a função fetchDataBurguers apenas uma vez quando o componente monta
        fetchDataCombo();
      }, []);
      const fetchDataPorcao = async () => {
        try {
          const response = await getProductsCategory('Porcao');
          // Atualiza o estado com os dados dos produtos
          setPorcaoData(response.data);
          
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        // Chama a função fetchDataBurguers apenas uma vez quando o componente monta
        fetchDataPorcao();
      }, []);
      const fetchDataBebida = async () => {
        try {
          const response = await getProductsCategory('Bebida');
          // Atualiza o estado com os dados dos produtos
          setBebidaData(response.data);
          
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        // Chama a função fetchDataBurguers apenas uma vez quando o componente monta
        fetchDataBebida();
      }, []);
      const fetchDataSobremesa = async () => {
        try {
          const response = await getProductsCategory('Sobremesa');
          // Atualiza o estado com os dados dos produtos
          setSobremesaData(response.data);
          
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        // Chama a função fetchDataBurguers apenas uma vez quando o componente monta
        fetchDataSobremesa();
      }, []);


    return (
        <Main>
            <ContainerInicial>
                <Header/>
                <ContentTitle>
                    <Title>DELIVERY</Title>
                    <SubTitle>PEÇA O SEU LANCHE SEM SAIR DE CASA!</SubTitle>
                    <br/><br/><br/>
                    <TextTitle>Deivery em funcionamento até as 22h</TextTitle>
                    <ContentButtons>
                        <Button label={'Fale Conosco'} link={'https://web.whatsapp.com/send?phone=5561994162084'}/>
                        <button onClick={handleClick}>teste</button>
                    </ContentButtons>
                </ContentTitle>
            </ContainerInicial>
            <ContainerProducts>
                <ContentProducts>
                    <ContentTitleProducts>
                        <ImageLogo src={logo} />
                        <ProductsText>
                            <TitleProducts>Ramozz Burguers</TitleProducts>
                            <ContentTextProducts>
                                <TextInform>Estabelecimento Aberto</TextInform>
                                    <Icon src={iconLoc}/>
                                <TextProducts>Cururupu - MA</TextProducts>
                            </ContentTextProducts>
                        </ProductsText>
                    </ContentTitleProducts>
                    <ContentSelectProducts>
                       <ContentSelectSearch>
                            <Select/>
                            <Search type={'text'} placeholder={'Procurar produto'}/>
                       </ContentSelectSearch>
                       <Products>
                            <SectionTitleProducts>Promoção</SectionTitleProducts>
                            <SectionProducts>
                            {burgersData.map(product => (
                                <CardProduct
                                key={product.id} // Certifique-se de ter uma chave única para cada CardProduct
                                productName={product.name_product} // Substitua 'productName' pelos nomes reais dos campos do produto
                                productDescription={product.description}
                                productValue={product.value}
                                productImage={product.image}
                                />
                            ))}

                            </SectionProducts>

                            <SectionTitleProducts>BURGUERS DELICIOSOS</SectionTitleProducts>
                            <SectionProducts>
                            {burgersData.map(product => (
                                <CardProduct
                                key={product.id} // Certifique-se de ter uma chave única para cada CardProduct
                                productName={product.name_product} // Substitua 'productName' pelos nomes reais dos campos do produto
                                productDescription={product.description}
                                productValue={product.value}
                                productImage={product.image}
                                />
                            ))}

                            </SectionProducts>
                            <SectionTitleProducts>COMBOS PROMOCIONAIS</SectionTitleProducts>
                            <SectionProducts>
                            {comboData.map(product => (
                                <CardProduct
                                key={product.id} // Certifique-se de ter uma chave única para cada CardProduct
                                productName={product.name_product} // Substitua 'productName' pelos nomes reais dos campos do produto
                                productDescription={product.description}
                                productValue={product.value}
                                productImage={product.image}
                                />
                            ))}


                            </SectionProducts>
                            <SectionTitleProducts>PORÇÕES SUCULENTAS</SectionTitleProducts>
                            <SectionProducts>
                            {porcaoData.map(product => (
                                <CardProduct
                                key={product.id} // Certifique-se de ter uma chave única para cada CardProduct
                                productName={product.name_product} // Substitua 'productName' pelos nomes reais dos campos do produto
                                productDescription={product.description}
                                productValue={product.value}
                                productImage={product.image}
                                />
                            ))}


                            </SectionProducts>
                            <SectionTitleProducts>UMA BEBIDA PARA REFRESCAR?</SectionTitleProducts>
                            <SectionProducts>
                            {bebidaData.map(product => (
                                <CardProduct
                                key={product.id} // Certifique-se de ter uma chave única para cada CardProduct
                                productName={product.name_product} // Substitua 'productName' pelos nomes reais dos campos do produto
                                productDescription={product.description}
                                productValue={product.value}
                                productImage={product.image}
                                />
                            ))}


                            </SectionProducts>
                            <SectionTitleProducts>VAI UMA SOBREMESA AÍ</SectionTitleProducts>
                            <SectionProducts>
                            {sobremesaData.map(product => (
                                <CardProduct
                                key={product.id} // Certifique-se de ter uma chave única para cada CardProduct
                                productName={product.name_product} // Substitua 'productName' pelos nomes reais dos campos do produto
                                productDescription={product.description}
                                productValue={product.value}
                                productImage={product.image}
                                />
                            ))}


                            </SectionProducts>
                       </Products>
                    </ContentSelectProducts>
                </ContentProducts>
                <ContentCart>

                </ContentCart>
            </ContainerProducts>
        </Main>
    );
}
  
  