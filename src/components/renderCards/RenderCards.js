import { useState, Fragment, useEffect } from 'react';
import sortArray from './sortUtils/sortUtils';
import { Link } from 'react-router-dom';
import './renderCards.css';

const RenderCards = (arr, categoryName) => {
    const [sortType, setSortType] = useState('');
    const [productList, setProductList] = useState([]);

    useEffect(() => {
      const sortedArray = sortArray(arr, sortType);
      setProductList(sortedArray);
  }, [sortType, arr]);

    const handeSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSortType(selectedValue);
    }

    const renderCardsResult = productList.map((item) => {
        return (
          <div className="main_product" key={item.id}>
          <Link to={`/product/${item.id}`}>
            <div className="main_product_img">
              <img src={item.image} alt={item.title} />
            </div>
          </Link>
          <div className="main__product_info">
            <Link to={`/product/${item.id}`}>
              <h4>{item.title}</h4>
            </Link>
            <p className="product_category">{item.category}</p>
            <div className="product_price">${item.price}</div>
            <div className="product_rating">rating: {item.rating.rate} ({item.rating.count})</div>
          </div>
        </div>
        )
    })

    return (
        <section className="main">
            <div className="container">
                <div className="main_info">
                    <div className="category_Name">{categoryName} ({arr.length})</div>
                    <div className="main_sort">
                        <select id="sort" onChange={handeSelectChange}>
                        <option value="default">Sort by: Default</option>
                            <option value="nameAscending">Name (A-Z)</option>
                            <option value="nameDescending">Name (Z-A)</option>
                            <option value="priceAscending">Price: Low to High</option>
                            <option value="priceDescending">Price: High to Low</option>
                            <option value="ratingAscending">Rating: Low to High</option>
                            <option value="ratingDescending">Rating: High to Low</option>
                            <option value="reviewCountAscending">Review Count: Low to High</option>
                            <option value="reviewCountDescending">Review Count: High to Low</option>
                            <option value="categoryAscending">Category (A-Z)</option>
                            <option value="categoryDescending">Category (Z-A)</option>
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                        </select>
                    </div>
                </div>
                <div className="main_Products_List">
                    {renderCardsResult}
                </div>
            </div>
        </section>
    )
}

export default RenderCards;
