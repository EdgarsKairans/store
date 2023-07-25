import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import NewAndFeatured from '../pages/NewAndFeatured';
import MensClothing from '../pages/MensClothing';
import WomensClothing from '../pages/WomensClothing';
import Jewelery from '../pages/Jewelery';
import Electronics from '../pages/Electronics';
import ProductDetails from '../productDetails/ProductDetails';
import FavoritesPage from '../pages/favoritesPage/FavoritesPage';
import BagsPage from '../pages/bagsPage/BagsPage';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import Page404 from '../pages/404'; 

import './App.css';

function App() {
  const [bagsList, setBagsList] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

  useEffect(() => {
    const savedBagsList = JSON.parse(localStorage.getItem('bagsList')) || [];
    const savedFavoritesList = JSON.parse(localStorage.getItem('favoritesList')) || [];

    setBagsList(savedBagsList);
    setFavoritesList(savedFavoritesList);
  }, []);

  console.log(bagsList);
  console.log(favoritesList);
  return (
    <Router>
      <ErrorBoundary>
        <AppHeader favoritesList={favoritesList} bagsList={bagsList} />
      </ErrorBoundary>
      
      <Routes>
        <Route path="/" element={<ErrorBoundary><NewAndFeatured /></ErrorBoundary>} />
        <Route path="/mens-clothing" element={<ErrorBoundary><MensClothing /></ErrorBoundary>} />
        <Route path="/womens-clothing" element={<ErrorBoundary><WomensClothing /></ErrorBoundary>} />
        <Route path="/jewelery" element={<ErrorBoundary><Jewelery /></ErrorBoundary>} />
        <Route path="/electronics" element={<ErrorBoundary><Electronics /></ErrorBoundary>} />
        <Route
          path="/product/:id"
          element={
            <ErrorBoundary>
              <ProductDetails
                favoritesList={favoritesList}
                setFavoritesList={setFavoritesList}
                bagsList={bagsList}
                setBagsList={setBagsList}
              />
            </ErrorBoundary>
          }
        />
        <Route path="/favorites" element={<ErrorBoundary><FavoritesPage favoritesList={favoritesList}/></ErrorBoundary>} />
        <Route path="/bags" element={<ErrorBoundary><BagsPage  bagsList={bagsList}/></ErrorBoundary>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;


