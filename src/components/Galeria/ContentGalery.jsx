import {TextTitle, Title, SubTitle, ContentSliderImage, ContainerImagesGalery, ContentImages, DivImg, Image, ContainerImagesGaleryConvert } from './style'
import imgburguer1 from '../../images/ImagesGalery/imageBurguer1.svg'
import imgburguer2 from '../../images/ImagesGalery/imageBurguer2.svg'
import imgburguer3 from '../../images/ImagesGalery/imageBurguer3.svg'
import imgburguer4 from '../../images/ImagesGalery/imageBurguer4.svg'
import imgburguer5 from '../../images/ImagesGalery/imageBurguer5.svg'
import imgburguer6 from '../../images/ImagesGalery/imageBurguer6.svg'
import imgburguer7 from '../../images/ImagesGalery/imageBurguer7.svg'



import 'swiper/swiper-bundle.css';
import Slider from '../Sliders/SliderImage/Slider'
import SliderImages from '../Sliders/SliderImagesCount/SliderImages'

export default function ContentGalery(){
    return (
        <>
            <TextTitle>Variedades</TextTitle>
            <Title>Sabores Deliciosos</Title>
            <SubTitle>Conheça Nossos Sabores</SubTitle>
            <ContentSliderImage>
                <Slider/>
                <ContainerImagesGalery>
                    <Image src={imgburguer1} altura={'380px'}/>
                    <ContentImages>
                        <Image src={imgburguer2} />
                        <Image src={imgburguer3} />
                    </ContentImages>
                    <ContentImages>
                        <DivImg>
                            <Image src={imgburguer4} />
                            
                            <Image src={imgburguer5} />
                        </DivImg>
                        <Image src={imgburguer6} />
                        
                    </ContentImages>

                    
                    
                    <Image src={imgburguer7} altura={'380px'}/>
                    
                </ContainerImagesGalery>
                <ContainerImagesGaleryConvert>
                    <SliderImages/>
                </ContainerImagesGaleryConvert>
            </ContentSliderImage>
        </>
    )
}