// ProductContext.js
import React, { createContext, useContext, useEffect, useReducer } from "react";

// Create ProductContext
const ProductContext = createContext();

// Initial state
const initialState = {
  products: [],
  featureProducts: [],
  isLoading: true,
  isSingleLoading: false,
  singleProduct: {},
  error: null,
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case "SET_FEATURE_PRODUCTS":
      return {
        ...state,
        featureProducts: action.payload,
        isLoading: false,
      };
    case "SET_LOADING": 
      return {
        ...state,
        isLoading: true,
      };
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        singleProduct: action.payload,
        isSingleLoading: false,
      };
    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        error: "Error fetching single product",
      };
    default:
      return state;
  }
};

// AppProvider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const API = 'https://fakestoreapi.com/products';

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: "SET_LOADING" });
      try {
        const response = await fetch(API);
        const data = await response.json();
// console.log(data);

        // Dispatch action to set products
        dispatch({ type: "SET_PRODUCTS", payload: data });

        // Set any 3 products from the fetched data
        const fourProducts = data.slice(0, 4);
        dispatch({ type: "SET_FEATURE_PRODUCTS", payload: fourProducts });
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, [API]);

  // API call for a single product
  const getSingleProduct = async (API) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await fetch(API);
      const singleProduct =await res.json();
      // console.log(singleProduct);
      
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      console.error("Error fetching single product:", error);
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the ProductContext
export const useProductContext = () => useContext(ProductContext);
