import React, { useState } from 'react';
import './Stalls.css';
import { stall_list } from '../../assets/assets'; // Importing the stall data

const Stalls = () => {
    const [stalls, setStalls] = useState(stall_list);

    const handleDelete = (id) => {
        const updatedStalls = stalls.filter(stall => stall.id !== id);
        setStalls(updatedStalls);
    };

    return (
        <div className="stalls-container">
            <h1>Stalls List</h1>
            <table className="stalls-table">
                <thead>
                    <tr>
                        <th>Stall Name</th>
                        <th>Location</th>
                        <th>Operating Hours</th>
                        <th>Food List</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {stalls.map(stall => (
                        <tr key={stall.id}>
                            <td>{stall.stall_name}</td>
                            <td>{stall.location}</td>
                            <td>{stall.operating_hours}</td>
                            <td>{stall.food_list.join(', ')}</td>
                            <td>
                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(stall.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Stalls;
