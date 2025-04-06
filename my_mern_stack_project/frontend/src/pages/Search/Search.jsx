import React, { useState } from 'react';
import './Search.css';
import { menu_list, stall_list } from '../../assets/assets'; // Import both lists
import { Link } from 'react-router-dom';  // Import Link for navigation

const Search = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query
  const [filteredItems, setFilteredItems] = useState([...menu_list, ...stall_list]); // State to store both filtered stalls and menu items

  // Handle input change and filter items (both stalls and dishes)
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query === '') {
      setFilteredItems([...menu_list, ...stall_list]); // Show all items if query is empty
    } else {
      // Filter menu items based on the search query (case-insensitive)
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

  // Handle search when the user presses Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission on enter
      setSearchQuery(e.target.value);
    }
  };

  return (
    <div className="search-page">
      <h2>Search for Dishes or Stalls</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKeyPress}
        placeholder="Search for a dish or stall..."
        className="search-input"
      />
      <div className="search-results">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.menu_name ? `/stall-details/${item.stallId}` : `/stall-details/${item.id}`} // Conditional Link based on whether it's a dish or a stall
              className="search-item-link"
            >
              <div className="search-item">
                {item.menu_name ? (
                  // Displaying dish
                  <>
                    <img src={item.menu_image} alt={item.menu_name} className="search-item-img" />
                    <p>{item.menu_name}</p>
                  </>
                ) : (
                  // Displaying stall
                  <>
                    <img src={item.stall_image} alt={item.stall_name} className="search-item-img" />
                    <p>{item.stall_name}</p>
                    <p>{item.location}</p>
                  </>
                )}
              </div>
            </Link>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
