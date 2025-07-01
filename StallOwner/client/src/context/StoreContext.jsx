import React, { createContext, useState, useContext } from 'react';

// Create and export the context object
export const StoreContext = createContext();

// Provider component
export const StallProvider = ({ children }) => {
  // Stall-related state
  const [currentStall, setCurrentStall] = useState(null);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  // Add a product
  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  // Update order status
  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <StoreContext.Provider
      value={{
        currentStall,
        setCurrentStall,
        orders,
        setOrders,
        products,
        setProducts,
        addProduct,
        updateOrderStatus,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

// Custom hook to consume the context
export const useStall = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStall must be used within a StallProvider');
  }
  return context;
};
