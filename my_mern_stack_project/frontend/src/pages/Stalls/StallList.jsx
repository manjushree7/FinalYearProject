import React from 'react';
import './Stalls.css';
import { stall_list } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const StallList = () => {
  const navigate = useNavigate();

  return (
    <div className='stalls' id='stalls'>
      <h1>All Local Stalls</h1>
      <p className='stalls-text'>Browse through all the stalls available in our network.</p>
      <div className='stalls-list'>
        {stall_list.map((stall) => (
          <div 
            key={stall.id} 
            className='stalls-list-item'
            onClick={() => navigate(`/stall/${stall.id}`)} // Navigate to Stall Details Page
            style={{ cursor: 'pointer' }}
          >
            <img 
              src={stall.stall_image} 
              alt={stall.stall_name} 
              className="stall-image" // Optionally add a class for styling the image
            />
            <p>{stall.stall_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default StallList;
