import React, { useState } from 'react';
import {Card,ContainerTextCard,Title, Description, Value, ImgBurguer} from './style'
import img from '../../../../images/imgBurguers/burguerCheddar.svg'


export default function CardProduct({productName, productDescription, productValue, productImage}){
  
  return (
        <Card>
            <ContainerTextCard>
                <Title>{productName}</Title>
                <Description>{productDescription}</Description>
                <Value>R$ {productValue}</Value>
            </ContainerTextCard>
            <ImgBurguer src={`http://127.0.0.1:800${productImage}`} alt={productImage}/>
        </Card>
  );
};

