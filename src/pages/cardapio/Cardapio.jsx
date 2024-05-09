import Button from "../../components/Button";
import Header from "../../layouts/header/Header";
import ProductsTextValue from "../../service/ProductsTextValue";
import Products from "./components/Products";
import {
  Main,
  ContainerInicial,
  ContentTitle,
  Title,
  SubTitle,
  TextTitle,
  ContentButtons,
  ContainerCardapio,
  CardapioNavbar,
  LinkNavbar,
  ContentCardapioProducts,
  ContentTitleProducts,
} from "./style";

import { Link as Scroll } from "react-scroll";

export default function Cardapio() {
  return (
    <Main>
      <ContainerInicial>
        <Header currentPage="cardapio" />
        <ContentTitle>
          <Title>Cardápio</Title>
          <SubTitle>Encontre o seu lanche preferido!</SubTitle>
          <br />
          <br />
          <br />
          <TextTitle>
            Nossos hambúrgueres são feitos com ingredientes frescos e
            selecionados, e cada um tem seu próprio tema divertido.
          </TextTitle>
          <TextTitle>
            Oferecemos apetitosas opções de petiscos, sanduíches variados e uma
            ampla seleção de bebidas, incluindo nossos irresistíveis milk
            shakes.
          </TextTitle>
          <TextTitle>
            Entre em contato conosco para tirar suas dúvidas ou fazer uma
            reserva.
          </TextTitle>
          <ContentButtons>
            <Button
              label={"Fale Conosco"}
              link={"https://web.whatsapp.com/send?phone=5561994162084"}
            />
            <Button label={"Faça já o seu pedido"} link={"delivery"} />
          </ContentButtons>
        </ContentTitle>
      </ContainerInicial>
      <ContainerCardapio>
        <CardapioNavbar>
          <Scroll to="burguers" smooth={true} duration={100} offset={-150}>
            <LinkNavbar>Burguers</LinkNavbar>
          </Scroll>
          <Scroll to="porcoes" smooth={true} duration={100} offset={-150}>
            <LinkNavbar>Porções</LinkNavbar>
          </Scroll>
          <Scroll to="combos" smooth={true} duration={100} offset={-150}>
            <LinkNavbar>Combos</LinkNavbar>
          </Scroll>
          <Scroll to="bebidas" smooth={true} duration={100} offset={-150}>
            <LinkNavbar>Bebidas</LinkNavbar>
          </Scroll>
          <Scroll to="sobremesas" smooth={true} duration={100} offset={-150}>
            <LinkNavbar>Sobremesas</LinkNavbar>
          </Scroll>
        </CardapioNavbar>
        <ContentCardapioProducts>
          <ContentTitleProducts id="burguers">Burguers</ContentTitleProducts>
          {ProductsTextValue[0].burgers.map((burger, index) => (
            <Products
              key={index}
              name={burger.name}
              description={burger.description}
              value={burger.value}
            />
          ))}
          <ContentTitleProducts id="porcoes">Porções</ContentTitleProducts>
          {ProductsTextValue[0].porcoes.map((porcao, index) => (
            <Products
              key={index}
              name={porcao.name}
              description={porcao.description}
              value={porcao.value}
            />
          ))}
          <ContentTitleProducts id="combos">Combos</ContentTitleProducts>
          {ProductsTextValue[0].combos.map((combo, index) => (
            <Products
              key={index}
              name={combo.name}
              description={combo.description}
              value={combo.value}
            />
          ))}
          <ContentTitleProducts id="bebidas">Bebidas</ContentTitleProducts>
          {ProductsTextValue[0].bebidas.map((bebida, index) => (
            <Products key={index} name={bebida.name} value={bebida.value} />
          ))}
          <ContentTitleProducts id="sobremesas">
            Sobremesas
          </ContentTitleProducts>
          {ProductsTextValue[0].sobremesas.map((sobremesa, index) => (
            <Products
              key={index}
              name={sobremesa.name}
              description={sobremesa.description}
              value={sobremesa.value}
            />
          ))}
        </ContentCardapioProducts>
      </ContainerCardapio>
    </Main>
  );
}
