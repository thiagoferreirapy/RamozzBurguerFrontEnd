import { Link } from 'react-router-dom';
import  { HeaderContainer, ImgLogo, Links, MenuBar } from './style';
import logo from '../../images/logo.svg'
import ImageLogo from '../../components/ImageLogo';


export default function Header(){
    return (
        <HeaderContainer>
            <ImageLogo src={logo}/>
            
            <MenuBar>
               <Links to={'/'}>INÍCIO</Links> 
               <Links to={'/'}>QUEM SOMOS</Links> 
               <Links to={'/'}>CARDÁPIO</Links> 
               <Links to={'/'}>DELIVERY</Links> 
               <Links to={'/'}>PEDIDOS</Links> 
               <Links to={'/'}>ENTRE OU CADASTRE-SE</Links> 
            </MenuBar>
        </HeaderContainer>
    )
}
