import React from 'react';
import './Categories.css';

const Categories = ({ onSelectCategory, activeCategory }) => {
  const categories = [
    'Salad', 'Rolls', 'Deserts', 'Sandwich', 
    'Cake', 'Pure Veg', 'Pasta', 'Noodles'
  ];

  return (
    <div className="categories-section">
      <h2 className="section-title">Categories</h2>
      <div className="categories-container">
        {categories.map((category) => (
          <button 
            key={category} 
            className={`category-chip ${activeCategory === category ? 'active' : ''}`}
            onClick={() => onSelectCategory(category)} 
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;