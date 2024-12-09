import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from "../Reducer/FilterReducer";
import { useProductContext } from "./ProductContaxt";

const FilterContext = createContext();
const initialState = {
  filterProducts: [],
  allProducts: [],
  sortingValue: "default",
  filters: {
    text: "",
    category: "all",
  },
  itemsPerPage: 6,
};

export const FilterProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  //set grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GIRD_VIEW" });
  };
  //set list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };
  //sorting by price
  const sorting = (e) => {
    let sortValue = e.target.value;
    // console.log(sortValue);
    return dispatch({ type: "SORTED_PRODUCTS", payload: sortValue });
  };
  useEffect(() => {
    // console.log("hii");
    dispatch({ type: "SORTED_PRODUCTS" });
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [state.sortingValue, state.filters]);

  //search,category,company functionality
  // const updateFilterValue = (e)=>{
  //     // let name = e.target.value;
  //     // let value = e.target.value;
  //     const { name, value } = e.target;
  //     console.log(`Updating filter: ${name} = ${value}`);
  //     return dispatch({type:"UPDATE_FILTER_VALUE",payload:{name,value}})

  // }
  const updateFilterValue = (e) => {
    const { name, value } = e.target;
    if (!name) {
      console.error("Name attribute is missing on the target element.");
      return;
    }
    console.log(`Updating filter: ${name} = ${value}`);
    dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  //clear the filter
  const clearFilter = () => {
    // console.log("CLEAR_FILTER action triggered")
    dispatch({ type: "CLEAR_FILTER" });
  };
  //pagination
  const totalPages =
    state.filterProducts.length && state.itemsPerPage
      ? Math.ceil(state.filterProducts.length / state.itemsPerPage)
      : 1;

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilter,
        page,
        setPage,
        totalPages,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFiltercontext = () => {
  return useContext(FilterContext);
};
