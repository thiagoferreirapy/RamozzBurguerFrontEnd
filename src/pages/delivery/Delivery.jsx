import React, { useState, useEffect } from "react";
import {
  Main,
  ContainerInicial,
  ContentTitle,
  Title,
  SubTitle,
  ContentButtonLink,
  Text,
  ContainerDelivery,
  ContainerProducts,
  ContainerProductsBag,
  ContainerCategoryProducts,
  ContentOptionBag,
  ContentBag,
  ContentLocationDelivery,
  BagProducts,
  TitleBag,
  ContentItensBag,
  CardBag,
  ContentImgItem,
  ContentInformationBag,
  InformationsBag,
  Itemsdescriptions,
  ItemsValue,
  ContentButtonsCard,
  ContainerBagValues,
  ContentValue,
  ButtonFinalizeOrder,
  ImageOrder,
} from "./style";

import Button from "../../components/Button";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import TitleDelivery from "./components/TitleDelivery";
import SearchCategory from "./components/SearchCategory/SearchCategory";
import CategoryCard from "./components/Category/CategoryCard";
import getProductsCategory from "../../service/api/GetProductsAPI";
import getProductsBag from "../../service/api/GetProductsbag";

export default function Delivery() {
  const [burgersData, setBurgersData] = useState([]);
  const [comboData, setComboData] = useState([]);
  const [bebidaData, setBebidaData] = useState([]);
  const [sobremesaData, setSobremesaData] = useState([]);
  const [productsBag, setProductsBag] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchData = async (category, setData) => {
    try {
      const response = await getProductsCategory(category);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData("burguer", setBurgersData);
    fetchData("combo", setComboData);
    fetchData("drink", setBebidaData);
    fetchData("dessert", setSobremesaData);
  }, []);

  const fetchDataProductsBag = async () => {
    try {
      const response = await getProductsBag();
      setProductsBag(response.data);
      sumValues(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataProductsBag();
  }, []);

  const sumValues = (items) => {
    let result = 0;
    items.forEach((item) => {
      result += parseFloat(item.value);
    });
    setTotal(result);
  };

  return (
    <Main>
      <Header currentPage="delivery" />
      <ContainerInicial>
        <ContentTitle>
          <br />
          <br />
          <Title>DELIVERY</Title>
          <SubTitle>PEÇA O SEU LANCHE SEM SAIR DE CASA!</SubTitle>
        </ContentTitle>
        <ContentButtonLink>
          <Text>Delivery em funcionamento até as 22h</Text>
          <Button
            label={"PEÇA PELO WHATSAPP"}
            link={"https://web.whatsapp.com/send?phone=5561994162084"}
            target={"blank"}
          />
        </ContentButtonLink>
      </ContainerInicial>
      <ContainerDelivery>
        <ContainerProducts>
          <TitleDelivery />
          <SearchCategory />
          <ContainerCategoryProducts>
            <CategoryCard
              category_name={"BURGUERS DELICIOSOS"}
              data={burgersData}
            />
            <CategoryCard
              category_name={"COMBOS PROMOCIONAIS"}
              data={comboData}
            />
            <CategoryCard
              category_name={"UMA BEBIDA PARA REFRESCAR?"}
              data={bebidaData}
            />
            <CategoryCard
              category_name={"VAI UMA SOBREMESA AÍ"}
              data={sobremesaData}
            />
          </ContainerCategoryProducts>
        </ContainerProducts>

        <ContainerProductsBag>
          <ContentOptionBag>
            <p>@ PROMOÇÃO</p>
            <p># SACOLA</p>
          </ContentOptionBag>

          <ContentBag>
            <ContentLocationDelivery>
              @ <p>Calcular tempo e taxa de entrega</p> %
            </ContentLocationDelivery>
            <BagProducts>
              <TitleBag>
                <p>SUA SACOLA</p>
                <span>LIMPAR</span>
              </TitleBag>
              <ContentItensBag>
                {productsBag.map((item, index) => (
                  <CardBag key={index}>
                    <ContentImgItem>
                      <ImageOrder src={"http://127.0.0.1:800/" + item.image} />
                    </ContentImgItem>
                    <ContentInformationBag>
                      <InformationsBag>
                        <Itemsdescriptions>
                          <h5>{item.name}</h5>
                          <p>{item.type_meat}</p>
                          <p>{item.quantity}x</p>
                        </Itemsdescriptions>
                        <ItemsValue>R$ {item.value}</ItemsValue>
                      </InformationsBag>
                      <ContentButtonsCard>
                        <button>Editar</button>
                        <button>Remover</button>{" "}
                      </ContentButtonsCard>
                    </ContentInformationBag>
                  </CardBag>
                ))}
              </ContentItensBag>
            </BagProducts>
            <ContainerBagValues>
              <ContentValue>
                <p>Subtotal</p>
                <p>R$ {total.toFixed(2).replace(".", ",")}</p>
              </ContentValue>
              <ContentValue>
                <p>Taxa de entrega</p>
                <p>R$ 5,00</p>
              </ContentValue>
              <ContentValue>
                <h6>Total</h6>
                <h6>R$ {(total + 5).toFixed(2).replace(".", ",")}</h6>
              </ContentValue>
              <ButtonFinalizeOrder>Finalizar pedido</ButtonFinalizeOrder>
            </ContainerBagValues>
          </ContentBag>
        </ContainerProductsBag>
      </ContainerDelivery>
      <Footer />
    </Main>
  );
}
