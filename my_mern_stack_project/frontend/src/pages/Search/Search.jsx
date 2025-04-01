import React, { useState } from 'react';
import './Search.css';
import { menu_list } from '../../assets/assets'; 

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');  // State to hold the search query
  const [filteredItems, setFilteredItems] = useState(menu_list); // State to store filtered items

  // Handle input change and filter menu items
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query === '') {
      setFilteredItems(menu_list); // If query is empty, show all items
    } else {
      // Filter items based on the search query (case-insensitive)
      const filtered = menu_list.filter(item =>
        item.menu_name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

  // Handle search when the user presses Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();  // Prevent form submission on enter
      setSearchQuery(e.target.value);
    }
  };

  return (
    <div className="search-page">
      <h2>Search for Menu Items</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKeyPress}
        placeholder="Search for a dish..."
        className="search-input"
      />
      <div className="search-results">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index} className="search-item">
              <img src={item.menu_image} alt={item.menu_name} className="search-item-img" />
              <p>{item.menu_name}</p>
            </div>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
