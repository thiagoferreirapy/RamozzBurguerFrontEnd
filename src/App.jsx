// libs of react
import './App.css'
// libs 
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
// pages
import Home from './pages/home/Home';
import Container from './layouts/container/Container';
// thems
import theme from '../theme';
import { ThemeProvider } from 'styled-components';
import {ScrollProvider, useScroll } from './service/ScrollContext.jsx';
// Swiper
import 'swiper/swiper-bundle.css';
import Footer from './layouts/footer/Footer';
import Sobre from './pages/sobre/Sobre'
import Cardapio from './pages/cardapio/Cardapio.jsx';
import Delivery from './pages/delivery/Delivery.jsx';
import Modal from 'react-modal';


Modal.setAppElement('#root');
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollProvider>
          {/* <Header/> */}
          <Routes>
            <Route
              path="/"
              element={
                <Container customClass='min-height'>
                  <Outlet />
                </Container>
              }
            >
              <Route index element={<Home />} />
              <Route path="sobre" element={<Sobre />} />
              <Route path="cardapio" element={<Cardapio />} />
              <Route path="delivery" element={<Delivery />} />
            </Route>
          </Routes>
          <Footer />
        </ScrollProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App
