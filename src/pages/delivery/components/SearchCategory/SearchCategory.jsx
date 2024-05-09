import styled from 'styled-components'
import InputProduct from '../../../../components/InputProduct';
import SelectCategory from '../../../../components/SelectCategory';

const ConatinerCategory = styled.div`
    width: 100%;
    height: 100px;
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;


`;

export default function SearchCategory() { 
    return (
        <ConatinerCategory>
            <SelectCategory title={'Categorias'}/>
            <InputProduct type={'text'} placeholder={'Procurar produto'}/>
        </ConatinerCategory>
    );
}
  
  