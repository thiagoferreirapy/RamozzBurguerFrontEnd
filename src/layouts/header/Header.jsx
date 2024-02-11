import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useScroll } from '../../service/ScrollContext';

import  { HeaderContainer, ImgLogo, Links, MenuBar } from './style';
import logo from '../../images/logo.svg'
import ImageLogo from '../../components/ImageLogo';
import LoginModal from '../../components/Modal/LoginUserModal/LoginModal';
import RegisterModal from '../../components/Modal/RegisterUserModal/RegisterModal';


export default function Header(){
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

    return (
        <HeaderContainer isScrolled={isScrolled}>
            <ImageLogo src={logo}/>
            
            <MenuBar>
               <Links to={'/'}>INÍCIO</Links> 
               <Links to={'/sobre'}>QUEM SOMOS</Links> 
               <Links to={'/cardapio'}>CARDÁPIO</Links> 
               <Links to={'/'}>DELIVERY</Links> 
               <Links to={'/'}>PEDIDOS</Links> 
               <RegisterModal/>
            </MenuBar>
        </HeaderContainer>
    )
}
