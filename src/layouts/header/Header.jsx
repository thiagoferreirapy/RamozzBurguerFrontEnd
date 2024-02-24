import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useScroll } from '../../service/ScrollContext';

import  { HeaderContainer, Links, MenuBar, ContentPosition } from './style';
import logo from '../../images/logo.svg'
import ImageLogo from '../../components/ImageLogo';
import LoginModal from '../../components/Modal/LoginUserModal/LoginModal';
import RegisterModal from '../../components/Modal/RegisterUserModal/RegisterModal';
import ButtonIfood from '../../components/ButtonIfood';


export default function Header({ currentPage }){
  const { isScrolled, setScroll } = useScroll();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScroll(scrollPosition > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };


    return (
        <HeaderContainer isScrolled={isScrolled}>
            <ContentPosition posicao="left">
              <ImageLogo src={logo}/>
            </ContentPosition>
            
            <MenuBar>
               <Links to={'/'}>INÍCIO</Links> 
               <Links to={'/sobre'}>QUEM SOMOS</Links> 
               <Links to={'/cardapio'}>CARDÁPIO</Links>
               
               
               {/* <Links onClick={abrirModal}>ENTRE OU CADASTRE-SE</Links> */}

                {/* Renderize o componente LoginModal e passe as funções de abrir e fechar modal como propriedades */}
                {/* <LoginModal isOpen={modalAberto} onRequestClose={fecharModal} /> */}
            </MenuBar>
            <ContentPosition posicao="rigth">
               <ButtonIfood label={'peça pelo Ifood'} link={'https://www.ifood.com.br/'} target={'blank'}/> 

              </ContentPosition>
        </HeaderContainer>
    )
}
