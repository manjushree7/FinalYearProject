import React, { useState } from 'react';
import './Stalls.css';
import { stall_list } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Stalls = () => {
  const [selectedStall, setSelectedStall] = useState(null); // Initialize the state for selected stall

  // Function to handle the stall click, toggle selection state
  const handleStallClick = (stall) => {
    setSelectedStall(prev => (prev === stall.stall_name ? null : stall.stall_name)); // Toggle the selected stall
  };

  return (
    <div className='stalls' id='stalls'>
      <h1>Explore Local Stalls</h1>
      <p className='stalls-text'>
        Discover a variety of local stalls offering fresh, organic, and chemical-free food items.
        Support small businesses and enjoy high-quality products.
      </p>
      
      <div className='stalls-list'>
        {stall_list.slice(0, 6).map((stall, index) => (  // Display the first 6 stalls
          <div 
            key={index} 
            onClick={() => handleStallClick(stall)}  // Handle the click event for each stall
            className='stalls-list-item'
          >
            <img 
              className={selectedStall === stall.stall_name ? 'active' : ''}  // Toggle the active class based on selection
              src={stall.stall_image} 
              alt={stall.stall_name} 
            />
            <p>{stall.stall_name}</p>
          </div>
        ))}
      </div>

      <div className="stalls-button-container">
        <Link to="/stall-list" className="view-more-btn">View More Stalls</Link>  {/* Link to view all stalls */}
      </div>

      <hr />
    </div>
  );
};

export default Stalls;
