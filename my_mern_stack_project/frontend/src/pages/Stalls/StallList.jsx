import React from 'react';
import './Stalls.css';
import { stall_list } from '../../assets/assets';

const StallList = () => {
  return (
    <div className='stalls' id='stalls'>
      <h1>All Local Stalls</h1>
      <p className='stalls-text'>Browse through all the stalls available in our network.</p>
      <div className='stalls-list'>
        {stall_list.map((stall, index) => (
          <div key={index} className='stalls-list-item'>
            <img src={stall.stall_image} alt={stall.stall_name} />
            <p>{stall.stall_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default StallList;
