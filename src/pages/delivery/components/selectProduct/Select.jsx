import React, { useState } from 'react';
import { Link as Scroll, Element } from 'react-scroll';
import {ContentSelect} from './style'

export default function Select(){
  
  return (
    <>
        <ContentSelect>
            <option value="" disabled selected>Categorias</option>
            
            <option value="promocao"><Scroll to="promocao" smooth={true} duration={100} offset={-150}>Promoção</Scroll></option>
            <option value="burguer"><Scroll to="burguer" smooth={true} duration={100} offset={-150}>Burguers</Scroll></option>
            <option value="combo"><Scroll to="combo" smooth={true} duration={100} offset={-150}>Combos</Scroll></option>

        </ContentSelect>
    </>
  );
};

