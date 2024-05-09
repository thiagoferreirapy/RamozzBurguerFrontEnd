import React, { useState, useEffect } from "react";
import styled from "styled-components";

const HamburguerMenu = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.3s ease;
  touch-action: manipulation;
  span {
    width: 100%;
    height: 3px;
    background-color: #fff;
    transition: transform 0.3s ease;
  }

  ${(props) =>
    props.menuAberto &&
    `
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

export default function MenuToggle({ onToggle }) {
  const [menuAberto, setMenuAberto] = useState(false);
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

  return (
    <HamburguerMenu menuAberto={menuAberto} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </HamburguerMenu>
  );
}
