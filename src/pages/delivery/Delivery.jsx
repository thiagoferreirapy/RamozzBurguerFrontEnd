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
  ContentSelectCart,
  ButtonSelectCart,
  ContainerModalCart

} from "./style";
import ImageLogo from '../../components/ImageLogo';
import logo from '../../images/logoBlack.svg'
import iconLoc from '../../images/icons/iconLocGray.svg'
import Select from './components/selectProduct/Select';
import Search from './components/InputSearch/Search';
import CardProduct from './components/cards/CardProduct';
import getProducts from '../../service/api/Products';
import getProductsCategory from '../../service/api/Productscategory';
import PedidoModal from '../../components/Modal/PedidoModal/PedidoModal';
import Cart from '../../components/CartModals/Cart';


export default function Delivery() { 
    const [burgersData, setBurgersData] = useState([]);
    const [porcaoData, setPorcaoData] = useState([]);
    const [comboData, setComboData] = useState([]);
    const [bebidaData, setBebidaData] = useState([]);
    const [sobremesaData, setSobremesaData] = useState([]);
    const [promotionData, setPromotionData] = useState([]);

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
        fetchDataPorcao();
      }, []);
      const fetchDataBebida = async () => {
        try {
          const response = await getProductsCategory('Bebida');
          
          setBebidaData(response.data);
          
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
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
        fetchDataSobremesa();
      }, []);

      const fetchDataPromotion = async () => {
        try {
          const response = await getProductsCategory('Promocao');
          setPromotionData(response.data);
          
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        fetchDataPromotion();
      }, []);

      const [modalAberto, setModalAberto] = useState(false);
      const [productInfo, setProductInfo] = useState(null);

  const abrirModal = (productInfo) => {
    setProductInfo(productInfo);
    // console.log('teste',productInfo, 'teste')
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

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
                        <Button label={'Fale Conosco'} link={'https://web.whatsapp.com/send?phone=5561994162084'} target={true}/>
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
                            <SectionProducts  name='promocao'>
                            {promotionData.map(product => (
                                <CardProduct
                                key={product.id_product}
                                productId={product.id_product} 
                                productName={product.name_product} 
                                productDescription={product.description}
                                productValue={product.value}
                                productValuePromotion={product.value_promotion}
                                productImage={product.image}
                                abrirModal={abrirModal}
                                category={product.category}
                                typecard={'promocao'}
                                />
                            ))}

                            </SectionProducts>

                            <SectionTitleProducts >BURGUERS DELICIOSOS</SectionTitleProducts>
                            <SectionProducts name='burguer'>
                            {burgersData.map(product => (
                                <CardProduct
                                key={product.id_product} 
                                productId={product.id_product} 
                                productName={product.name_product} 
                                productDescription={product.description}
                                productValue={product.value}
                                productValuePromotion={product.value_promotion}
                                productImage={product.image}
                                category={product.category}
                                abrirModal={abrirModal}
                                
                                />

                                
                            ))}
                            
                            

                            </SectionProducts>

                            <SectionTitleProducts name='combo'>COMBOS PROMOCIONAIS</SectionTitleProducts>
                            <SectionProducts>
                            {comboData.map(product => (
                                <CardProduct
                                key={product.id_product}
                                productId={product.id_product} 
                                productName={product.name_product} 
                                productDescription={product.description}
                                productValue={product.value}
                                productValuePromotion={product.value_promotion}
                                productImage={product.image}
                                category={product.category}
                                abrirModal={abrirModal}
                                />
                            ))}


                            </SectionProducts>

                            <SectionTitleProducts name='porcao'>PORÇÕES SUCULENTAS</SectionTitleProducts>
                            <SectionProducts>
                            {porcaoData.map(product => (
                                <CardProduct
                                key={product.id_product}
                                productId={product.id_product} // Certifique-se de ter uma chave única para cada CardProduct
                                productName={product.name_product} // Substitua 'productName' pelos nomes reais dos campos do produto
                                productDescription={product.description}
                                productValue={product.value}
                                productValuePromotion={product.value_promotion}
                                productImage={product.image}
                                abrirModal={abrirModal}
                                category={product.category}
                                typecard={'cardmin'}
                                />
                            ))}


                            </SectionProducts>

                            <SectionTitleProducts name='bebida'>UMA BEBIDA PARA REFRESCAR?</SectionTitleProducts>
                            <SectionProducts>
                            {bebidaData.map(product => (
                                <CardProduct
                                key={product.id_product}
                                productId={product.id_product} // Certifique-se de ter uma chave única para cada CardProduct
                                productName={product.name_product} // Substitua 'productName' pelos nomes reais dos campos do produto
                                productDescription={product.description}
                                productValue={product.value}
                                productValuePromotion={product.value_promotion}
                                productImage={product.image}
                                abrirModal={abrirModal}
                                category={product.category}
                                typecard={'cardmin'}
                                />
                            ))}


                            </SectionProducts>
                              
                            <SectionTitleProducts name='sobremesa'>VAI UMA SOBREMESA AÍ</SectionTitleProducts>
                            <SectionProducts>
                            {sobremesaData.map(product => (
                                <CardProduct
                                key={product.id_product}
                                productId={product.id_product} // Certifique-se de ter uma chave única para cada CardProduct
                                productName={product.name_product} // Substitua 'productName' pelos nomes reais dos campos do produto
                                productDescription={product.description}
                                productValue={product.value}
                                productValuePromotion={product.value_promotion}
                                productImage={product.image}
                                abrirModal={abrirModal}
                                category={product.category}
                                typecard={'cardmin'}
                                />
                            ))}


                            </SectionProducts>
                            <PedidoModal isOpen={modalAberto} onRequestClose={fecharModal} productInfo={productInfo}/>
                       </Products>
                    </ContentSelectProducts>
                </ContentProducts>

                <ContentCart>
                  <ContentSelectCart>
                    <ButtonSelectCart>Promoções</ButtonSelectCart>
                    <ButtonSelectCart>Sacola</ButtonSelectCart>
                  </ContentSelectCart>

                  <ContainerModalCart>
                    <Cart/>
                  </ContainerModalCart>
                </ContentCart>
            </ContainerProducts>
        </Main>
    );
}
  
  