import React, { useState } from 'react';
import {ContentInput, Input, Icon} from './style'
import iconSearch from '../../../../images/icons/pesquisa.svg'
export default function Search({type, placeholder}){
  
  return (
    <>
        <ContentInput htmlFor=''>
            <Icon src={iconSearch}/>
            <Input type={type} placeholder={placeholder}/>
        </ContentInput>
    </>
  );
};

