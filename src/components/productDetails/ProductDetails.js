import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFakeStoreApi from '../../services/FakeStoreApi';
import './productDetails.css';
import Spinner from '../spinner/Spinner';

const ProductDetails = ({ favoritesList, setFavoritesList, bagsList, setBagsList }) => {
  const { id } = useParams();
  const { getSingleProduct } = useFakeStoreApi();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productData = await getSingleProduct(id);
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id, getSingleProduct]);

  const addToFavorites = () => {
    if (!favoritesList.some((item) => item.id === product.id)) {
      setFavoritesList([...favoritesList, product]);
    }
  };

  const addToBag = () => {
    if (!bagsList.some((item) => item.id === product.id)) {
      setBagsList([...bagsList, product]);
    }
  };

  if (!product) {
    return <Spinner />;
  }

  const { title, image, category, price, rating } = product;

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h2>{title}</h2>
        <p>Category: {category}</p>
        <p>Price: ${price}</p>
        <p>Rating: {rating.rate} ({rating.count})</p>
      </div>
      <div className="product-buttons">
        <button className='addToFavorites' onClick={addToFavorites}>Add to Favorites</button>
        <button className='addToBag' onClick={addToBag}>Add to Bag</button>
      </div>
    </div>
  );
};

export default ProductDetails;