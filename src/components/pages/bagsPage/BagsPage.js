import { useState } from 'react';
import './bagsPage.css';

const BagsPage = ({ bagsList }) => {
  const getTotalPrice = () => {
    return bagsList.reduce((total, product) => total + product.price, 0);
  };

  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = () => {
    setIsPaid(true);
  };

  return (
    <div className="page">
      <div className="container">
        <h1>Bags</h1>
        {bagsList.length > 0 ? (
          <>
            <ul className="product-list">
              {bagsList.map((product) => (
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
            <p className="total-price">Total Price: ${getTotalPrice()}</p>
            {isPaid ? (
              <p>Payment successful!</p>
            ) : (
              <button className="pay-button" onClick={handlePayment}>
                Pay Now
              </button>
            )}
          </>
        ) : (
          <p>Your bag is empty.</p>
        )}
      </div>
    </div>
  );
};

export default BagsPage;