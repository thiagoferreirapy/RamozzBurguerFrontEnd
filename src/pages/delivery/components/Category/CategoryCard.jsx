import React, { useState } from 'react';

import {
  CategorysCards,
  TitleCategory,
  ContentCards,
  Card,
  ContentInformation,
  ContentImage,
  Nameproduct,
  DescriptionProduct,
  ValueProduct

} from "./style";
import PedidoModal from '../../../../components/PedidoModal/PedidoModal';

export default function CategoryCard({category_name, data}) { 
  const [selectedItem, setSelectedItem] = useState(null);
  const handleCardClick = (item) => {
    setSelectedItem(item);
  };
  const closeModal = () => {
    setSelectedItem(null);
  };

    return (
      <CategorysCards>
        <TitleCategory>{category_name}</TitleCategory>
        <ContentCards>
        {data.map((item, index) => (
          <Card key={index} onClick={() => handleCardClick(item)}>
            <ContentInformation>
              <Nameproduct>{item.name}</Nameproduct>
              <DescriptionProduct>
              {item.description}
              </DescriptionProduct>
              <ValueProduct>
                R$ {item.value}
              </ValueProduct>
            </ContentInformation>
            <ContentImage src={'http://127.0.0.1:800/' + item.image} alt="Imagem do produto"/>
            <div className="plus-icon">+</div>
          </Card>
        ))}{selectedItem && (

          <PedidoModal isOpen={true} onRequestClose={closeModal} productInfo={selectedItem} />
        )}
          
        </ContentCards>
      </CategorysCards>
    );
}