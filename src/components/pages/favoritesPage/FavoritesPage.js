import './favoritesPage.css';

const FavoritesPage = ({ favoritesList }) => {
    return (
      <div className="page">
        <div className="container">
        <h1>Favorites</h1>
        {favoritesList.length > 0 ? (
          <ul className="product-list">
            {favoritesList.map((product) => (
              <li key={product.id} className="product-item">
                <img src={product.image} alt={product.title} />
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p>Category: {product.category}</p>
                  <p>Price: ${product.price}</p>
                  <p>Rating: {product.rating.rate} ({product.rating.count})</p>
                </div>
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