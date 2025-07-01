import React, { useState, useRef } from 'react';
import { food_list } from '../../assets/assets';
import './MyItems.css';

const MyItems = () => {
  const [foodItems, setFoodItems] = useState(food_list.slice(0, 5));
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    available: true,
    image: null,
    preview: '',
  });

  const fileInputRef = useRef(null);

  const handleAddItem = () => {
    if (!newItem.name || !newItem.price || !newItem.category) {
      alert('Please fill name, price, and category');
      return;
    }

    const newFood = {
      _id: Date.now().toString(),
      name: newItem.name,
      price: Number(newItem.price),
      description: newItem.description,
      category: newItem.category,
      available: newItem.available,
      image: newItem.preview || 'https://via.placeholder.com/150',
    };

    // Add new item at the top of the list
    const updatedItems = [newFood, ...foodItems];
    setFoodItems(updatedItems);
    console.log('Updated Food Items:', updatedItems);

    // Reset form
    setNewItem({
      name: '',
      price: '',
      description: '',
      category: '',
      available: true,
      image: null,
      preview: '',
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewItem({
      ...newItem,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewItem((prev) => ({
          ...prev,
          image: file,
          preview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (_id) => {
    const filtered = foodItems.filter((item) => item._id !== _id);
    setFoodItems(filtered);
  };

  const toggleAvailability = (_id) => {
    const updatedItems = foodItems.map((item) =>
      item._id === _id ? { ...item, available: !item.available } : item
    );
    setFoodItems(updatedItems);
  };

  return (
    <div className="my-items-container">
      <h1>My Food Stall Items</h1>

      <div className="add-item-form">
        <h2>Add New Item</h2>

        <input
          type="text"
          name="name"
          placeholder="Item name"
          value={newItem.name}
          onChange={handleInputChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newItem.price}
          onChange={handleInputChange}
          step="0.01"
          min="0"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={newItem.description}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newItem.category}
          onChange={handleInputChange}
        />

        <label>
          <input
            type="checkbox"
            name="available"
            checked={newItem.available}
            onChange={handleInputChange}
          />
          Available
        </label>

        <div className="image-upload-section">
          <label htmlFor="item-image" className="upload-label">
            {newItem.preview ? (
              <img
                src={newItem.preview}
                alt="Preview"
                className="image-preview"
              />
            ) : (
              <div className="upload-placeholder">
                <span>+</span>
                <p>Upload Image</p>
              </div>
            )}
          </label>

          <input
            id="item-image"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
        </div>

        <button onClick={handleAddItem}>Add Item</button>
      </div>

      <div className="food-items-grid">
        {foodItems.map((item) => (
          <div
            key={item._id}
            className={`food-card ${item.available ? '' : 'sold-out'}`}
          >
            <div className="food-image-container">
              {!item.available && <div className="sold-out-overlay">Sold Out</div>}
              <img src={item.image} alt={item.name} className="food-image" />
            </div>
            <h3>{item.name}</h3>
            <p className="price">Rs{item.price}</p>
            <p className="description">{item.description}</p>
            <p className="category">
              <strong>Category:</strong> {item.category}
            </p>

            <div className="card-actions">
              <button
                className="edit-btn"
                onClick={() => toggleAvailability(item._id)}
              >
                {item.available ? 'Mark Sold Out' : 'Mark Available'}
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
