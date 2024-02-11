import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const ContainerTime = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.graySecondary};
  position: relative;
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const clipPathAnimation = keyframes`
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    border: 10px solid ${(props) => props.theme.colors.green};
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    border: 10px solid ${(props) => props.theme.colors.green};
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    border: 10px solid ${(props) => props.theme.colors.green};
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    border: 10px solid ${(props) => props.theme.colors.green};
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    border: 10px solid ${(props) => props.theme.colors.green};
  }
`;

const LoaderContainer = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid ${(props) => props.theme.colors.green};
  border-radius: 50%;
  position: relative;
  transform: rotate(45deg);
  box-sizing: border-box;
  animation: ${rotateAnimation} 60s linear infinite,
    ${(props) =>
      props.isCounting
        ? css`
            ${clipPathAnimation} 60s infinite linear;
          `
        : 'none'};
`;

const Counter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.colors.black};
  font-size: 16px;
  font-weight: 500;
  z-index: 5;
`;

const StyledLoader = () => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ContainerTime>
      <LoaderContainer isCounting={time > 0} />
      <Counter>{time}s</Counter>
    </ContainerTime>
  );
};

export default StyledLoader;
