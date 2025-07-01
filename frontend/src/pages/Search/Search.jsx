import React, { useState } from 'react';
import './Search.css';
import { menu_list, stall_list } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([...menu_list, ...stall_list]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query === '') {
      setFilteredItems([...menu_list, ...stall_list]);
    } else {
      const filtered = [
        ...menu_list.filter(item =>
          item.menu_name.toLowerCase().includes(query.toLowerCase())
        ),
        ...stall_list.filter(stall =>
          stall.stall_name.toLowerCase().includes(query.toLowerCase())
        )
      ];
      setFilteredItems(filtered);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setFilteredItems([...menu_list, ...stall_list]);
  };

  return (
    <div className="search-page">
      <div className="modern-search-wrapper">
        <div className="modern-search-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search food or stalls..."
            className="modern-search-input"
          />
          {searchQuery && (
            <FiX className="clear-icon" onClick={handleClearSearch} />
          )}
        </div>
      </div>

      <div className="category-section">
        <h3>Categories</h3>
        <div className="category-grid">
          {['Salad', 'Rolls', 'Deserts', 'Sandwich', 'Cake', 'Pure Veg', 'Pasta', 'Noodles'].map((category) => (
            <div key={category} className="category-box">
              {category}
            </div>
          ))}
        </div>
      </div>

      <div className="food-grid">
        {filteredItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.menu_name ? `/stall-details/${item.stallId}` : `/stall-details/${item.id}`}
            className="food-item"
          >
            <div className="food-item-content">
              <img 
                src={item.menu_name ? item.menu_image : item.stall_image} 
                alt={item.menu_name || item.stall_name} 
              />
              <div className="food-info">
                <h4>{item.menu_name || item.stall_name}</h4>
                {item.location && <p>{item.location}</p>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
