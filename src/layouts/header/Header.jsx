import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useScroll } from '../../service/ScrollContext';

import  { HeaderContainer, ImgLogo, Links, MenuBar } from './style';
import logo from '../../images/logo.svg'
import ImageLogo from '../../components/ImageLogo';
import LoginModal from '../../components/Modal/LoginUserModal/LoginModal';
import RegisterModal from '../../components/Modal/RegisterUserModal/RegisterModal';


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
            <ImageLogo src={logo}/>
            
            <MenuBar>
               <Links to={'/'}>INÍCIO</Links> 
               
               <Links to={'/sobre'}>QUEM SOMOS</Links> 
               <Links to={'/cardapio'}>CARDÁPIO</Links> 
               <Links to={'/delivery'}>DELIVERY</Links> 
               <Links to={'/'}>PEDIDOS</Links>
               {/* <LoginModal/> */}
               <Links onClick={abrirModal}>ENTRE OU CADASTRE-SE</Links>

                {/* Renderize o componente LoginModal e passe as funções de abrir e fechar modal como propriedades */}
                <LoginModal isOpen={modalAberto} onRequestClose={fecharModal} />
            </MenuBar>
        </HeaderContainer>
    )
}
