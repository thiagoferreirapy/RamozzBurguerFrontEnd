import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  Teste,
  ModalWrapper,
  ContentTitleModal,
  TitleModal,
  Close,
  ContainerOrder,
  OrderInformations,
  ImageOrder,
  TitleOrder,
  TextInformationOrder,
  ValueOrder,
  FormOrder,
} from "./style";

import OptionOrder from "./components/OptionOrder/OptionOrder";
import Observation from "./components/ObservationOrder/Observation";
import FinalizationOrder from "./components/FinalizationOrder/FinalizationOrder";
import MenssageAlertOption from "./components/MenssageAlertOption/MenssageAlertOption";

import getAdditionalFree from "../../service/api/GetAdditionalFree";
import postProductsBag from "../../service/api/PostProductsBag";

export default function PedidoModal({
  isOpen,
  onRequestClose,
  productInfo = {},
}) {
  const [modalAberto, setModalAberto] = useState(false);
  const [meatData, setMeatData] = useState([]);
  const [sauceData, setSauceData] = useState([]);
  const [checkOptionMeat, setCheckOptionMeat] = useState([]);
  const [checkOptionSauce, setCheckOptionSauce] = useState([]);
  const [show, setShow] = useState(false);
  const [observationValue, setObservationValue] = useState("");
  const [postBag, setPostBag] = useState([]);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    onRequestClose();
  };

  const fetchData = async (type, setter) => {
    try {
      const response = await getAdditionalFree(type);
      setter(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData("MEAT", setMeatData);
    fetchData("SAUCE", setSauceData);
  }, []);

  const fetchDataBag = async (jsonData) => {
    try {
      const response = await postProductsBag(jsonData);
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  const handleFinalization = (valuePrice, valueQuantity) => {
    if (checkOptionMeat.length === 0 || checkOptionSauce.length === 0) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 9200);
    } else {
      setShow(false);
      const DataOrder = {
        quantity: valueQuantity,
        observation: observationValue,
        value: valuePrice,
        finished: false,
        product_id: `${productInfo.id}`,
        additional_meat: `${checkOptionMeat}`,
        additional_sauce: `${checkOptionSauce}`,
      };

      const jsonData = JSON.stringify(DataOrder);
      console.log("JSON enviado:", jsonData);
      try {
        fetchDataBag(jsonData);
        fecharModal();
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    }
  };

  const handleSelectedValuesMeat = (index, id) => {
    setCheckOptionMeat(index === 1 ? id : "");
  };

  const handleSelectedValuesSauce = (index, id) => {
    setCheckOptionSauce(index === 1 ? id : "");
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
            <Close onClick={fecharModal}>
              <FontAwesomeIcon icon={faTimes} />
            </Close>
            <TitleModal>Detalhes do pedido</TitleModal>
          </ContentTitleModal>
          <ContainerOrder>
            <OrderInformations>
              <ImageOrder
                src={"http://127.0.0.1:800" + productInfo.image}
                alt="Imagem do pedido"
              />
              <TitleOrder>{productInfo.name}</TitleOrder>
              <TextInformationOrder>
                {productInfo.description}
              </TextInformationOrder>
              <TextInformationOrder>
                {productInfo.ingredients}
              </TextInformationOrder>
              <ValueOrder>R$ {productInfo.value}</ValueOrder>
            </OrderInformations>
            <FormOrder>
              <OptionOrder
                Title={"Escolha o ponto da carne"}
                Data={meatData}
                onSelectedValue={handleSelectedValuesMeat}
              />
              <OptionOrder
                Title={"Escolha o molho"}
                Data={sauceData}
                onSelectedValue={handleSelectedValuesSauce}
              />
              <Observation onObservationChange={setObservationValue} />
              <FinalizationOrder
                valueOrder={productInfo.value}
                onFinalization={handleFinalization}
              />
            </FormOrder>
          </ContainerOrder>
        </ModalWrapper>
      </Modal>
      <MenssageAlertOption
        showMsg={show}
        text={
          "Antes de prosseguir, é necessário escolher todos os itens obrigatórios."
        }
      />
    </div>
  );
}
