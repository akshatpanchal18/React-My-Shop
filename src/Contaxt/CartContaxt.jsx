import { createContext, useContext, useReducer,useEffect } from "react";
import reducer from '../Reducer/CartReducer'

const cartContaxt = createContext();
const getLocalData =()=>{
    let newCartData = localStorage.getItem("cart")
    // if(newCartData === "[]"){
    //     return [];
    // }else{
    //     return JSON.parse(newCartData);
    // }
    const parseData = JSON.parse(newCartData);
    if(!Array.isArray(parseData))return[];  
    return parseData;
}

const initialState={
    // cart:[],
    cart_m:getLocalData(),
    total_price:"",
    total_item:"",
    shipping_fee:5.99, 
    oneProduct:[],
}


export const CartProvider =({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState)


    const addToCart =(id,amount,product)=>{
        dispatch({type:"ADD_TO_CART",payload:{id,amount,product}})
        // console.log('Product:', product); // Debug the product object structure here
        // console.log('Amount:', amount);
    }
    const placeOrder =(id,amount,product)=>{
        dispatch({type:"PLACE_ORDER",payload:{id,amount,product}})
        // console.log('Product:', product); // Debug the product object structure here
        // console.log('Amount:', amount);
    }

    
    const removeItem =(id)=>{
        dispatch({type:"REMOVE_ITEM",payload:id})
    }


    //to increase-decrease cart item
    const setDecrease = (id)=>{
        dispatch({type:"SET_DECREASE",payload:id})
    }
    const setIncrease = (id)=>{
        dispatch({type:"SET_INCREASE",payload:id})
    }
//add data in local storge
useEffect(() => {
    dispatch({type:"CART_TOTAL_ITEM"})
    dispatch({type:"CART_TOTAL_PRICE"})
    localStorage.setItem("cart",JSON.stringify(state.cart_m))
}, [state.cart_m])

const clearCart =()=>{
    dispatch({type:"CLEAR_CART"})
}


    return <cartContaxt.Provider value={{...state,addToCart,removeItem,clearCart,setDecrease,setIncrease,placeOrder}}>
        {children}
    </cartContaxt.Provider>
}
export const useCartContaxt =()=>{
    return useContext(cartContaxt)
}

