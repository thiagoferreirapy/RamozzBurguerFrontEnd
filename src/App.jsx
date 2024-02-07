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
// Swiper
import 'swiper/swiper-bundle.css';
import Footer from './layouts/footer/Footer';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
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
          </Route>
        </Routes>
       <Footer/>
      </Router>
    </ThemeProvider>
  )
}

export default App
