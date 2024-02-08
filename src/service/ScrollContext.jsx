import React, { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const setScroll = (value) => {
    setIsScrolled(value);
  };

  return (
    <ScrollContext.Provider value={{ isScrolled, setScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  return useContext(ScrollContext);
};