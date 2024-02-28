import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useScroll } from '../../service/ScrollContext';

import  { HeaderContainer, Links, MenuBar, ContentPosition, MenuMobile, ContentmenuMobile, MenuBarMobile, LinksMobile, ContentSpaceMenu } from './style';
import logo from '../../images/logo.svg'
import ImageLogo from '../../components/ImageLogo';
import ButtonIfood from '../../components/ButtonIfood';
import MenuToggle from '../../components/MenuToggle';


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


  const [menuAberto, setMenuAberto] = useState(false);

  const toggleModal = () => {
    setMenuAberto(!menuAberto);
  };

  const [isPaisagem, setIsPaisagem] = useState(window.matchMedia('(orientation: landscape)').matches);
    const toggleMenu = () => {
      setMenuAberto(!menuAberto);
      onToggle(); // Adicione esta linha para chamar a função onToggle do componente pai
    };

    useEffect(() => {
        const handleScroll = () => {
          // Fecha o menu apenas quando o scroll ultrapassar 300 pixels em modo paisagem
          if (menuAberto && isPaisagem && window.scrollY > 600) {
            setMenuAberto(false);
          }else if(menuAberto && !isPaisagem){
            setMenuAberto(false);
          }
        };
    
        const handleOrientationChange = () => {
          setIsPaisagem(window.matchMedia('(orientation: landscape)').matches);
        };
    
        // Adiciona ouvintes de eventos
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('orientationchange', handleOrientationChange);
    
        // Remove ouvintes de eventos ao desmontar o componente
        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('orientationchange', handleOrientationChange);
        };
      }, [menuAberto, isPaisagem]);

    return (
        <>
            <HeaderContainer isScrolled={isScrolled}>
              <ContentPosition posicao="left">
                <ImageLogo src={logo}/>
              </ContentPosition>
              
              <MenuBar>
                <Links to={'/'}>INÍCIO</Links> 
                <Links to={'/sobre'}>QUEM SOMOS</Links> 
                <Links to={'/cardapio'}>CARDÁPIO</Links>
                
              </MenuBar>
              <ContentPosition >
                <ButtonIfood label={'peça pelo Ifood'} link={'https://www.ifood.com.br/'} target={'blank'}/> 

                </ContentPosition>
          </HeaderContainer>
          <MenuMobile menuAberto={menuAberto}>
              <ContentmenuMobile>
                <ImageLogo src={logo}/>
                <MenuToggle onToggle={toggleModal} />
              </ContentmenuMobile>
              <MenuBarMobile menuAberto={menuAberto}>
                <ContentSpaceMenu>
                  <LinksMobile to={'/'}>INÍCIO</LinksMobile> 
                  <LinksMobile to={'/sobre'}>QUEM SOMOS</LinksMobile> 
                  <LinksMobile to={'/cardapio'}>CARDÁPIO</LinksMobile>
                </ContentSpaceMenu>
                <ButtonIfood label={'peça pelo Ifood'} link={'https://www.ifood.com.br/'} target={'blank'}/> 
              </MenuBarMobile>
          </MenuMobile>
        </>
    )
}
