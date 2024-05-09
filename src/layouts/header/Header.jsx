import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useScroll } from "../../service/ScrollContext";

import {
  HeaderContainer,
  Links,
  MenuBar,
  ContentPosition,
  MenuMobile,
  ContentmenuMobile,
  MenuBarMobile,
  LinksMobile,
  ContentSpaceMenu,
  ContentButton,
} from "./style";
import logo from "../../images/logo.svg";
import ImageLogo from "../../components/ImageLogo";
import MenuToggle from "../../components/MenuToggle";
import { UserModal } from "../../components/Modal/UserModal";
import { LinksHeader } from "../../components/LinksHeader";

export default function Header({ currentPage }) {
  const { isScrolled, setScroll } = useScroll();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScroll(scrollPosition > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuAberto, setMenuAberto] = useState(false);

  const toggleModal = () => {
    setMenuAberto(!menuAberto);
  };

  const [isPaisagem, setIsPaisagem] = useState(
    window.matchMedia("(orientation: landscape)").matches
  );
  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
    onToggle();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (menuAberto && isPaisagem && window.scrollY > 600) {
        setMenuAberto(false);
      } else if (menuAberto && !isPaisagem) {
        setMenuAberto(false);
      }
    };

    const handleOrientationChange = () => {
      setIsPaisagem(window.matchMedia("(orientation: landscape)").matches);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, [menuAberto, isPaisagem]);

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <HeaderContainer isScrolled={isScrolled}>
        <ContentPosition posicao="left">
          <ImageLogo src={logo} />
        </ContentPosition>

        <MenuBar>
          <LinksHeader
            to={"/"}
            currentPage={currentPage}
            color={currentPage === "home" && "#365C32"}
            borderBottom={currentPage === "home" && "2px solid #fff"}
            label={"INÍCIO"}
          />
          <LinksHeader
            to={"/sobre"}
            currentPage={currentPage}
            color={currentPage === "sobre" && "#365C32"}
            borderBottom={currentPage === "sobre" && "2px solid #fff"}
            label={"QUEM SOMOS"}
          />
          <LinksHeader
            to={"/cardapio"}
            currentPage={currentPage}
            color={currentPage === "cardapio" && "#365C32"}
            borderBottom={currentPage === "cardapio" && "2px solid #fff"}
            label={"CARDÁPIO"}
          />
          <LinksHeader
            to={"/delivery"}
            currentPage={currentPage}
            color={currentPage === "delivery" && "#365C32"}
            borderBottom={currentPage === "delivery" && "2px solid #fff"}
            label={"DELIVERY"}
          />
        </MenuBar>
        <ContentPosition>
          <ContentButton onClick={() => setOpenModal(!openModal)}>
            entre / cadastre-se
          </ContentButton>
          <UserModal isOpenModal={openModal} setOpenModal={setOpenModal} />
        </ContentPosition>
      </HeaderContainer>
      <MenuMobile menuAberto={menuAberto}>
        <ContentmenuMobile>
          <ImageLogo src={logo} />
          <MenuToggle onToggle={toggleModal} />
        </ContentmenuMobile>
        <MenuBarMobile menuAberto={menuAberto}>
          <ContentSpaceMenu menuAberto={menuAberto}>
            <LinksMobile to={"/"}>INÍCIO</LinksMobile>
            <LinksMobile to={"/sobre"}>QUEM SOMOS</LinksMobile>
            <LinksMobile to={"/cardapio"}>CARDÁPIO</LinksMobile>
            <LinksMobile to={"/cardapio"}>DELIVERY</LinksMobile>
          </ContentSpaceMenu>
          <ContentButton onClick={() => setOpenModal(!openModal)}>
            entre / cadastre-se
          </ContentButton>
          <UserModal isOpenModal={openModal} setOpenModal={setOpenModal} />
          {/* <Modal/>
                  <ButtonIfood label={'peça pelo Ifood'} link={'https://www.ifood.com.br/'} target={'blank'}/>  */}
        </MenuBarMobile>
      </MenuMobile>
    </>
  );
}
