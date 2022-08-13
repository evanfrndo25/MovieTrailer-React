import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'; 
import Header from './components/layouts/HeaderComponents'
import Footer from './components/layouts/FooterComponents';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/detail/Detail';
import './App.scss';
import 'swiper/swiper.min.css';

function App() {
  return (
    <div>
          <Router>
          <Header />
              <Routes>
                  <Route path='/' exact element={<Home />} />
                  <Route path='/:category/search/:keyword' element={<Catalog />} />
                  <Route path='/:category/:id'  element={<Detail />} />
                  <Route path='/:category' element={<Catalog />} />
              </Routes>
            <Footer />
          </Router>
      </div>
  );
}

export default App;
