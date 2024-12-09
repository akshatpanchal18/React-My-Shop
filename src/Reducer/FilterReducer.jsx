const FilterReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        return {
          ...state,
          filterProducts: [...action.payload],
          allProducts: [...action.payload],
          // filters: { ...state.filters },
        };
      case "GET_SORT_VALUE":
        return {
          ...state,
          sortingValue: action.payload,
        };
  
      case "SORTED_PRODUCTS":
        let newSortData;
        const { filterProducts, sortingValue } = state;
        let tempSortData = [...filterProducts];
        const sortingProduct = (a, b) => {
          if (filterProducts.length === 0) {
            console.log("No products to sort yet."); // To check data load timing
            return state; // Skip sorting if no products
          }
          if (sortingValue === "default") {
            return {
              ...state
            };
          }
          if (sortingValue === "a-z") {
            return a.title.localeCompare(b.title);
          }
          if (sortingValue === "z-a") {
            return b.title.localeCompare(a.title);
          }
          if (sortingValue === "highest") {
            return b.price - a.price;
          }
          if (sortingValue === "lowest") {
            return a.price - b.price;
          }
        };
        // console.log("sort clicked");
        // console.log("Before Sorting:", state.filterProducts);
        newSortData = [...filterProducts].sort(sortingProduct);
        // console.log("After Sorting:", newSortData);
        return {
          ...state,
          filterProducts:newSortData,
        };
  
      case "UPDATE_FILTER_VALUE":
        // const {name,value}=action.payload
        // console.log("filter updated:",action.payload);
  
        return {
          ...state,
          filters: {
            ...state.filters,
            [action.payload.name]: action.payload.value,
          },
        };
      case "UPDATE_COMPANY_VALUE":
        // const {name,value}=action.payload
        // console.log("filter updated:",action.payload);
  
        return {
          ...state,
          filters: {
            ...state.filters,
            [action.payload.name]: action.payload.value,
          },
        };
      case "FILTER_PRODUCTS":
        const { allProducts } = state;
        let filteredProducts = [...allProducts];
        const { text, category, brand } = state.filters;
  
        if (text) {
          filteredProducts = filteredProducts.filter((curElem) =>
            curElem.title.toLowerCase().includes(text.toLowerCase())
          );
        }
        if (category !== "all") {
          filteredProducts = filteredProducts.filter(
            (curElem) => curElem.category === category
          );
        }
        if (brand !== "all") {
          filteredProducts = filteredProducts.filter(
            (curElem) => curElem.brand === brand
          );
        }
  
        return {
          ...state,
          filterProducts: filteredProducts,
        };
      case "CLEAR_FILTER":
        // console.log("CLEAR_FILTER action triggered")
        return {
          ...state,
          filters: {
            ...state.filters,
            text: "",
            category: "all",
            brand: "all",
          },
        };
  
      default:
        return state;
    }
  };
  export default FilterReducer;
  
  