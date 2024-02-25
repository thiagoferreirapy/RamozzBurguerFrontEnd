import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HamburguerMenu = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.3s ease;

  span {
    width: 100%;
    height: 3px;
    background-color: #fff;
    transition: transform 0.3s ease;
  }

  ${(props) => props.menuAberto && `
    span:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 7px);
      background-color: #ffffff;
    }

    span:nth-child(2) {
      transform: translateX(-100%);
      opacity: 0;
      
    }

    span:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -7px);
      background-color: #ffffff;
    }
  `}
`;

export default function MenuToggle({ onToggle }){
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
      setMenuAberto(!menuAberto);
      onToggle(); // Adicione esta linha para chamar a função onToggle do componente pai
    };

    useEffect(() => {
        // Adiciona uma classe ao body para desabilitar o scroll ao abrir o modal
        if (menuAberto) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
    
        // Remove a classe ao desmontar o componente ou fechar o modal
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [menuAberto]);

  return (
    <HamburguerMenu menuAberto={menuAberto} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </HamburguerMenu>
  );
};

