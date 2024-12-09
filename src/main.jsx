import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./Contaxt/ProductContaxt.jsx";
import { FilterProvider } from "./Contaxt/FilterContaxt.jsx";
import { CartProvider } from "./Contaxt/CartContaxt.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <FilterProvider>
        <CartProvider>
          <Auth0Provider
            domain="dev-onw0gc6tgy5v1aj5.us.auth0.com"
            clientId="vjzu8DApPxr2Ozlq4M6Ny3NieRGSNJsb"
            cacheLocation="localstorage"
            authorizationParams={{
              redirect_uri: window.location.origin,
              
            }}
          >
            <App />
          </Auth0Provider>
        </CartProvider>
      </FilterProvider>
    </AppProvider>
  </StrictMode>
);
