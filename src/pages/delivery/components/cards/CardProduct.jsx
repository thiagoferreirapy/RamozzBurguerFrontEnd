import React, { useState } from "react";
import {
  Card,
  ContainerTextCard,
  Title,
  Description,
  Value,
  ImgBurguer,
} from "./style";

export default function CardProduct({
  productId,
  productName,
  productDescription,
  productValue,
  productValuePromotion,
  productImage,
  typecard,
  category,
  abrirModal,
}) {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleClick = () => {
    abrirModal({
      productId,
      productName,
      productDescription,
      productValue,
      productValuePromotion,
      productImage,
      category,
    });
  };

  return (
    <Card typecard={typecard} onClick={handleClick}>
      <ContainerTextCard>
        <Title>{productName}</Title>
        <Description>{productDescription}</Description>
        <Value>
          {productValuePromotion ? (
            <>
              R$ {productValuePromotion} / <span>R$ {productValue}</span>
            </>
          ) : (
            `R$ ${productValue}`
          )}
        </Value>
      </ContainerTextCard>
      <ImgBurguer
        src={`http://127.0.0.1:800${productImage}`}
        alt={productImage}
        typecard={typecard}
      />
    </Card>
  );
}
