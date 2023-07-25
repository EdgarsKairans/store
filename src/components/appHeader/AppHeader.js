import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import bags from '../../resources/img/bag.svg';
import nikeLogo from '../../resources/img/nikeLogo.svg';
import searchIcon from '../../resources/img/searchIcon.svg';
import favorites from '../../resources/img/favorites.svg';

import './appHeader.css';

const AppHeader = ({ favoritesList, bagsList }) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  // const [searchQuery, setSearchQuery] = useState('');

  // const handleSearch = (e) => {
  //   if (e.key === 'Enter') {
  //     console.log('Searching for:', searchQuery);
  //   }
  // };
  const handleHamburgerClick = () => {
    setHamburgerActive(!hamburgerActive);
  };

  useEffect(() => {
    localStorage.setItem('bagsList', JSON.stringify(bagsList));
    localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
  }, [bagsList, favoritesList]);


  return (
    <header className="header">
      <div className="container">
        <div className="wrapper">
          <div className="logo">
            <Link to="/">
              <img className="nike_Logo_Svg" src={nikeLogo} alt="nike logo" />
            </Link>
          </div>
          <div className={`header_hamburger ${hamburgerActive ? "active" : ""}`} onClick={handleHamburgerClick}>
            <div className="hamburger_line"></div>
            <div className="hamburger_line"></div>
            <div className="hamburger_line"></div>
          </div>
          <nav className={`header_category ${hamburgerActive ? "active" : ""}`}>
            <ul>
              <li>
                <Link to="/">New & Featured</Link>
              </li>
              <li>
                <Link to="/mens-clothing">Men's clothing</Link>
              </li>
              <li>
                <Link to="/womens-clothing">Women's clothing</Link>
              </li>
              <li>
                <Link to="/jewelery">Jewelery</Link>
              </li>
              <li>
                <Link to="/electronics">Electronics</Link>
              </li>
            </ul>
          </nav>
          <div className="header_panel">
            <div className="header_search">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <img src={searchIcon} alt="search icon" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="header_favorites">
              <Link to="/favorites">
                <img src={favorites} alt="favorites" />
              </Link>
              <span className="header_list_count">{favoritesList.length}</span>
            </div>
            <div className="header_bags">
              <Link to="/bags">
                <img src={bags} alt="bag" />
              </Link>
              <span className="header_list_count">{bagsList.length}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;