import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { StallProvider } from './context/StoreContext'; // ✅ Import the context provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StallProvider> 
      <App />
    </StallProvider>
  </StrictMode>
);
