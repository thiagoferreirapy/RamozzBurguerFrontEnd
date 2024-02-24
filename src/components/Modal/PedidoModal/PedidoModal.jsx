import React, { useState, useEffect, useRef } from 'react';
import { animateScroll as scroll, scroller } from 'react-scroll';
import Modal from 'react-modal';
import {
  Teste,
  ModalWrapper,
  ContentTitleModal,
  ContentModalForm,
  Title,
  Text,
  TitleModal,
  Close,
  ContentInform,
  ImageProduct,
  ContainerItemSelector,
  ContentTitleSelector,
  ContentAlign,
  AlertSelector,
  TitleSelector,
  SubTitleSelector,
  Input,
  Button,
} from "./style";

import iconClose from '../../../images/icons/buttonClose.svg'
import MeatSelector from './components/MeatSelector';
import SauceSelector from './components/SauceSelector';
import AdicionaisSelector from './components/AdicionaisSelector';
import getAdicionaisItems from '../../../service/api/AdicionaisItems';
import ProductObservation from './components/ProductObservation';
import ContentButtonValue from './components/ContentButtonValue';
import PorcaoSelector from './components/PorcaoSelector';
import creat_products from '../../../service/api/create_products';

export default function PedidoModal({ isOpen, onRequestClose, productInfo = {} }){
    const [modalAberto, setModalAberto] = useState(false);
    const [adicionaisData, setAdicionaisData] = useState([]);
    const [adicionaisDataPorcao, setAdicionaisDataPorcao] = useState([]);
    const { productId, productName, productDescription, productValue, productValuePromotion, productImage, category } = productInfo || {};
    console.log(productId,productName, productDescription, productValue)

    const abrirModal = () => {
        setModalAberto(true);
    };

    const fecharModal = () => {
        // Chame a função onRequestClose para fechar o modal
        onRequestClose();
    };

    const typecarne = [
        {
            name: "Mal passada",
            description: '',
          },
          {
            name: "Bem passada",
            description: '',
          },
          {
            name: "Ao ponto",
            description: '',
          }
    ]

    const sauceTypes = [
        {
          name: "Ketchup Burguês",
          description: 'Molho adicionado ao lanche',
        },
        {
          name: "Maionese de Bacon",
          description: 'Molho adicionado ao lanche',
        },
        {
          name: "Molho Barbecue",
          description: 'Molho adicionado ao lanche',
        },
        {
          name: "Não desejo adicionar molho!",
        }
      ];

    const porcaoTypes = [
        {
          name: "Porção Prquena",
          description: '',
        },
        {
          name: "Porção Média",
          description: '',
        },
        {
          name: "Porção Grande",
          description: '',
        }
      ];
    
      const fetchDataAdicionais = async () => {
        try {
          const response = await getAdicionaisItems("Burguer");
          setAdicionaisData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        fetchDataAdicionais();
      }, []); 


      const fetchDataAdicionaisPorcao = async () => {
        try {
          const response = await getAdicionaisItems("Porcao");
          setAdicionaisDataPorcao(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        fetchDataAdicionaisPorcao();
      }, []); 
    

      const [hasErrorMeat, setHasErrorMeat] = useState(false);
      const [hasErrorSauce, setHasErrorSauce] = useState(false);
      const [hasErrorPorcao, setHasErrorPorcao] = useState(false);
      const [meatObject, setMeatObject] = useState([]);
      const [sauceObject, setSauceObject] = useState([]);
      const [porcaoObject, setPorcaoObject] = useState([]);

      const handleSelectionChangePorcao = (selectedItems) => {
        if (selectedItems) {
          const typeopcao = selectedItems.name;
          setHasErrorPorcao(false);
          setPorcaoObject(typeopcao)

        } else {
          setHasErrorPorcao(true);
        }
      
      };
      const handleSelectionChangeCarne = (selectedItems) => {
        if (selectedItems) {
          const nomeDaCarne = selectedItems.name;
          setHasErrorMeat(false);
          setMeatObject(nomeDaCarne)
        } else {
          setHasErrorMeat(true);
        }
      };

      const handleSelectionChangeMolho = (selectedItem) => {
        if (selectedItem) {
          const nomeDoMolho = selectedItem.name;
          setHasErrorSauce(false);
          setSauceObject(nomeDoMolho);
        } else {
          setHasErrorSauce(true);
        }
      };

      const [valueSelectedAdicionais, setValueSelectedAdicionais] = useState([]);

      const handleAdicionaisChange = (adicionaisSelecionados) => {
        setValueSelectedAdicionais(adicionaisSelecionados);
      };

      const [observation, setObservation] = useState('');
      const handleObservationChange = (value) => {
        setObservation(value);
      };
      
      const scrollToItem = (itemId) => {
        const element = document.getElementById(itemId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      const handleButtonClick = (quantidade) => {
        if (hasErrorMeat){
          alert('adicione a carne')
          scrollToItem('selectedMeat');
        }else if (hasErrorSauce){
          alert('adicione um molho')
          scrollToItem('selectedSauce')
        }else{

          const jsonData = {
            product: productId,
            quantity: quantidade,
            observations: observation ? observation : false,
            extras: valueSelectedAdicionais.length === 0 ? false : valueSelectedAdicionais.map(item => item.id_product),
            meat: meatObject,
            sauces: sauceObject,
            value: parseFloat(
              quantidade * (productValuePromotion ? productValuePromotion : productValue) +
              (valueSelectedAdicionais.length === 0 ? 0 : valueSelectedAdicionais.reduce((total, item) => total + parseFloat(item.value), 0))
            )
          };
          
          // Convertendo o objeto JSON para uma string para exibir no console.log
          const jsonString = JSON.stringify(jsonData);
          
          // Exibindo no console.log
          console.log('Enviando itens ao servidor teste: ' + jsonString);

          console.log('Enviando itens: ', productId)
          //console.log('Enviando itens ao servidor: ' + `Ponto da Carne: ${meatObject}, Molho: ${sauceObject} `, 'Observações: ', observation ? observation :  false, 'Adicionais: ', valueSelectedAdicionais.length === 0 ? false : valueSelectedAdicionais , "Nome do pedido:" , productName, "Quantidade: " , quantidade)
          
          fetchDataBurguers(jsonData);
        }
      };

      const fetchDataBurguers = async (jsonData) => {
        try {
          const response = await creat_products(jsonData);
          // Atualiza o estado com os dados dos produtos
          console.log(response.status);
           if (response.status === 200 || response.status === 201){
            fecharModal()
           }
          
        } catch (error) {
          console.error(error);
        }
      };

      const handleButtonClickProductPorcao = (quantidade) => {


        if(hasErrorPorcao){
          alert('selecione o tamaNHO da porção')
          scrollToItem('selectedPorcao')
        }else{
          console.log('enviando itens selecionados ao servidor: ', 'Tamanho da porção: ', porcaoObject, 'observações:' , observation ? `${observation}` : false, 'Adicionais:', valueSelectedAdicionais ? `${valueSelectedAdicionais}` : false, "Nome do pedido:" , productName, "Quantidade: " , quantidade)
        }
      }

      const handleButtonClickProductBebida = (quantidade) => {

        console.log('enviando itens selecionados ao servidor: ',  'observações:' , observation ? `${observation}` : false, productName, "Quantidade: " , quantidade)

      };
    


  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={fecharModal}
        contentLabel="Exemplo de Modal"
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.164)", zIndex: 1000 },
          content: { ...Teste.reduce((acc, obj) => ({ ...acc, ...obj }), {}) },
        }}
      >
        <ModalWrapper>
          <ContentTitleModal>
            <Close src={iconClose} onClick={fecharModal} />
            <TitleModal>Detalhes do pedido</TitleModal>
          </ContentTitleModal>
          <ContentModalForm>
            <ContentInform>
              <ImageProduct src={`http://127.0.0.1:800${productImage}`} />
              <Title>{productName}</Title>
              <Text>{productDescription}</Text>
              <Text>
                {productValuePromotion ? (
                  <>
                    <strong>R$ {productValuePromotion}</strong> /{" "}
                    <span>R$ {productValue}</span>
                  </>
                ) : (
                  <strong>R$ {productValue}</strong>
                )}
              </Text>
            </ContentInform>
            <ContainerItemSelector  >
              {(category === "Burguer" || category === "Combo") && (
                <>
                  <MeatSelector id={'selectedMeat'} typecarne={typecarne} quantidade={1} onSelectionChange={handleSelectionChangeCarne} hasErrorMeat={hasErrorMeat}/>
                  <SauceSelector id={'selectedSauce'} sauceTypes={sauceTypes} quantidade={1} onSelectionChange={handleSelectionChangeMolho} hasErrorSauce={hasErrorSauce}/>
                  <AdicionaisSelector adicionais={adicionaisData} quantidade={5} onSelectionChange={handleAdicionaisChange}/>
                  <ContentButtonValue value={productValue} promotionValue={productValuePromotion} maxQuantity={10} adicionais={valueSelectedAdicionais} onClickValue={handleButtonClick}/>
                </>
              )}

              {category === "Porcao" && (
                <>
                  <PorcaoSelector typecarne={porcaoTypes} quantidade={1} onSelectionChange={handleSelectionChangePorcao} hasErrorPorcao={hasErrorPorcao} id={'selectedPorcao'}/>
                  <AdicionaisSelector adicionais={adicionaisDataPorcao} quantidade={5} onSelectionChange={handleAdicionaisChange}/>
                  <ContentButtonValue value={productValue} promotionValue={productValuePromotion} maxQuantity={10} adicionais={valueSelectedAdicionais} onClickValue={handleButtonClickProductPorcao}/>
                </>
              )}

              {(category === "Bebida" || category == "Sobremesa") && (
                <>
                  <ContentButtonValue value={productValue} promotionValue={productValuePromotion} maxQuantity={10} adicionais={valueSelectedAdicionais} onClickValue={handleButtonClickProductBebida}/>
                </>
              )}
              <ProductObservation onObservationChange={handleObservationChange}/>
              
            </ContainerItemSelector>
          </ContentModalForm>
        </ModalWrapper>
      </Modal>
    </div>
  );
};

