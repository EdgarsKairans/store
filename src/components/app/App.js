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
      <AppHeader favoritesList={favoritesList} bagsList={bagsList} />
      <Routes>
        <Route path="/" element={<NewAndFeatured />} />
        <Route path="/mens-clothing" element={<MensClothing />} />
        <Route path="/womens-clothing" element={<WomensClothing />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route
          path="/product/:id"
          element={
            <ProductDetails
              favoritesList={favoritesList}
              setFavoritesList={setFavoritesList}
              bagsList={bagsList}
              setBagsList={setBagsList}
            />
          }
        />
        <Route path="/favorites" element={<FavoritesPage favoritesList={favoritesList}/>} />
        <Route path="/bags" element={<BagsPage  bagsList={bagsList}/>} />
      </Routes>
    </Router>
  );
}

export default App;



