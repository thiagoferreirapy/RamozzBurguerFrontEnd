import {ImageRound, ContentInformations,Title,  Text, ContentButton, Button } from './style'
import elipse from '../../images/Ellipse.svg'


export default function ContentOrcamento(){
    return (
        <>
            <ImageRound src={elipse}/>
            <ContentInformations>
                <Title>Comemore a sua festa com hamburgueres</Title>
                <Text>Não se preocupe em preparar comida hoje, pois preparamos um Banquete de Hambúrgueres especialmente para você! 🎉🍔</Text>
                <Text>Delicie-se com um Bifê de Hambúrgueres completo, com opções suculentas que certamente vão agradar seu paladar. Aproveite o sabor irresistível sem sair de casa.</Text>
                <Text>Nossa equipe preparou cada detalhe com carinho para garantir uma experiência única. Afinal, todos merecem um mimo de vez em quando, não é mesmo?</Text>
                <ContentButton>
                    <Button to='https://web.whatsapp.com/send?phone=5561994162084' target="_blank">PEÇA UM ORÇAMENTO GRÁTIS</Button>
                </ContentButton>
            </ContentInformations>
        </>
    )
}