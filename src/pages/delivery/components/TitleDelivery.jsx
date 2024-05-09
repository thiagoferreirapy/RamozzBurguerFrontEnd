import styled from 'styled-components'
import Logo from '../../../components/Logo';
import imglogo from '../../../images/logoBlack.svg'

const ConatinerTitle = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: start;
`;
const ContentTitleInformations = styled.div`
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: space-around;
    margin-left: 20px;
    flex-direction: column;
`;

const Title = styled.h2`
    font-family: 'Road Rage';
    font-size: 50px;
    color: ${(props) => props.theme.colors.black};
`;
const Informations = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    
`;

const EstablishmentOpen = styled.h3`
   font-size: 18px;
   font-weight: 600;
   color: ${(props) => props.theme.colors.green};
   margin-right: 10px;
`;

const Location = styled.h3`
   font-size: 18px;
   font-weight: 600;
   color: ${(props) => props.theme.colors.black};
   margin: 0px 10px;
`;

const Options = styled.h3`
   font-size: 18px;
   font-weight: 600;
   color: ${(props) => props.theme.colors.black};
   margin-left: 10px;
   cursor: pointer;
`;

export default function TitleDelivery() { 
    
    return (
        <ConatinerTitle>
            <Logo src={imglogo} />
            <ContentTitleInformations>
                <Title>Ramozz Burguers</Title>
                <Informations>
                    <EstablishmentOpen>Estabelecimento Aberto</EstablishmentOpen>
                    <p style={{'color': 'black'}}>#</p>
                    <Location>Cururupu - MA</Location>
                    <p style={{'color': 'black'}}>-</p>
                    <Options>Mais informações</Options>
                </Informations>
            </ContentTitleInformations>
        </ConatinerTitle>
    );
}
  
  