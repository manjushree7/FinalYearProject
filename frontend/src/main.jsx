import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import StoreContextProvider from "./context/StoreContext"; // ✅ Import StoreContextProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <StoreContextProvider> {/* ✅ Wrap App here */}
          <App />
        </StoreContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
