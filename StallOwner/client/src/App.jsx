import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotificationProvider } from './context/NotificationContext';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Events from './pages/Events/Events';
import MyItems from './pages/MyItems/MyItems';
import Stalls from "./pages/AllStalls/Stalls";
import Orders from './pages/Orders/Orders';
import TrackOrder from './pages/TrackOrder/TrackOrder';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import StallDetails from "./pages/AllStalls/StallDetails.jsx";
import StallList from "./pages/AllStalls/StallList";

const App = () => {
  return (
    <Router>
      <NotificationProvider>
        <div className="app">
          <Navbar />
          <div className="app-content">
            <Sidebar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/events" element={<Events />} />
                <Route path="/my-items" element={<MyItems />} />
                <Route path="/stalls" element={<Stalls />} />
                <Route path="/stall/:id" element={<StallDetails />} />
                <Route path="/stall-list" element={<StallList />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/track-orders" element={<TrackOrder />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/stallowner/profile" element={<ProfilePage />} />
              </Routes>
            </main>
          </div>
        </div>
      </NotificationProvider>
    </Router>
  );
};

export default App;