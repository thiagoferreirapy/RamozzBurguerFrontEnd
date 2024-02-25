import React, { useState } from 'react';
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
      transform: rotate(-45deg) translate(-5px, 6px);
    }

    span:nth-child(2) {
      transform: translateX(-100%);
      opacity: 0;
    }

    span:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  `}
`;

export default function MenuToggle({ onToggle }){
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
      setMenuAberto(!menuAberto);
      onToggle(); // Adicione esta linha para chamar a função onToggle do componente pai
    };

  return (
    <HamburguerMenu menuAberto={menuAberto} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </HamburguerMenu>
  );
};

