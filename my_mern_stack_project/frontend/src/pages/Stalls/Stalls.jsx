import React from 'react';
import './Stalls.css';
import { stall_list } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Stalls = ({ selectedStall, setSelectedStall }) => {
  return (
    <div className='stalls' id='stalls'>
      <h1>Explore Local Stalls</h1> 
      <p className='stalls-text'>Discover a variety of local stalls offering fresh, organic, and chemical-free food items. Support small businesses and enjoy high-quality products.</p>
      <div className='stalls-list'>
        {stall_list.slice(0, 6).map((stall, index) => (  
          <div 
            key={index} 
            onClick={() => setSelectedStall(prev => (prev === stall.stall_name ? "All" : stall.stall_name))} 
            className='stalls-list-item'
          >
            <img 
              className={selectedStall === stall.stall_name ? 'active' : ''} 
              src={stall.stall_image} 
              alt={stall.stall_name} 
            />
            <p>{stall.stall_name}</p>
          </div>
        ))}
      </div>

      <div className="stalls-button-container">
        <Link to="/stall-list" className="view-more-btn">View More Stalls</Link>
      </div>

      <hr />
    </div>
  );
};

export default Stalls;
