import React from 'react';
import './MenuItems.css';  
import { menu_list } from '../../assets/assets';

const MenuItems = () => {
    return (
        <div className="admin-dashboard">
            <div className="main-content">
                <h1>Menu Items</h1>
                <div className="menu-items-container">
                    <div className="menu-items-list">
                        {menu_list.map((item, index) => (
                            <div key={index} className="menu-item-card">
                                <img 
                                    src={item.menu_image} 
                                    alt={item.menu_name} 
                                    className="menu-item-img" 
                                />
                                <div className="menu-item-name">{item.menu_name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItems;