
import ImageBurguer from '../ImageBurguer'
import {ContentTextInformation, TitleInformation, SubTitleInformation, ContainerGalery, Text, Button, ImageBackgroundBurguer } from './style'
import imgburguer1 from '../../images/imgBurguers/burguerCheddar.svg'
import imgburguer2 from '../../images/imgBurguers/burguerTicken.svg'
import imgburguer3 from '../../images/imgBurguers/saltBurguer.svg'
import backgroundBurguer from '../../images/imgBurguers/imgBackgrounBurguer.svg'


export default function ContentSobre(){
    return (
        <>
            <ContentTextInformation>
                <TitleInformation>Ramozz Burguers</TitleInformation>
                <SubTitleInformation>Conheça a nossa história</SubTitleInformation>
                <Text>A Ramozz Burguer nasceu do sonho de levar felicidade em forma de hamburguer, fazer alguém feliz e apaixonadopor hamburguer na primeira mordida.</Text>
                <Text>Está na hora de mergulhar em um mundo de sabor e diversão.</Text>
                <Button>Saiba Mais</Button>
            </ContentTextInformation>
            <ContainerGalery>
                <ImageBurguer src={imgburguer1}/>
                <ImageBurguer src={imgburguer2} margintp="8px"/>
                <ImageBurguer src={imgburguer3} marginlft="35px"/>
            </ContainerGalery>
            <ImageBackgroundBurguer src={backgroundBurguer}/>
        </>
    )
}