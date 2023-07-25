import { useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritesPage.css';

const FavoritesPage = ({ favoritesList, onRemoveFromFavorites }) => {
  return (
    <div className="page">
      <div className="container">
        <h1>Favorites</h1>
        {favoritesList.length > 0 ? (
          <ul className="product-list">
            {favoritesList.map((product) => (
              <li key={product.id} className="product-item">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.title} />
                </Link>
                <div className="product-info">
                  <h3>
                    <Link to={`/product/${product.id}`}>{product.title}</Link>
                  </h3>
                  <p>Category: {product.category}</p>
                  <p>Price: ${product.price}</p>
                  <p>Rating: {product.rating.rate} ({product.rating.count})</p>
                </div>
                <button className="remove-button" onClick={() => onRemoveFromFavorites(product.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No favorites added yet.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;