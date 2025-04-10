import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard'; 
import Orders from './components/Orders/Orders';
import TrackOrder from './pages/TrackOrder/TrackOrder'; 
import { Routes, Route } from 'react-router-dom';
import MenuItems from './pages/MenuItems/MenuItems';
import Customers from './pages/Customers/Customers';
import Stalls from './pages/Stalls/Stalls';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ marginLeft: '250px', flex: 1, padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/track" element={<TrackOrder />} />
            <Route path="/menu" element={<MenuItems />} /> 
            <Route path="/customers" element={<Customers />} />
            <Route path="/stalls" element={<Stalls />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
