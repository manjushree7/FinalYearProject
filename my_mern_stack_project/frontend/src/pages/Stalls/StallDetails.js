import React from 'react';
import { useParams } from 'react-router-dom';
import { stall_list } from '../../assets/assets'; 

const StallDetails = () => {
  const { id } = useParams();  // Get the stall ID from the URL
  const stall = stall_list.find((stall) => stall.id === parseInt(id));  // Find the stall by ID

  if (!stall) {
    return <h2>Stall not found</h2>;  // Show a message if the stall is not found
  }

  return (
    <div className="stall-details">
      <h1>{stall.stall_name}</h1>
      <p><strong>Location:</strong> {stall.location}</p>
      <p><strong>Operating Hours:</strong> {stall.operating_hours}</p>
      <img src={stall.stall_image} alt={stall.stall_name} />
      {/* You can add more details as needed */}
    </div>
  );
};

export default StallDetails;
