import React from "react";

function CartReducer(state, action) {
  // decrease cart item
  if (action.type==="SET_DECREASE") {
    let deItem = state.cart_m.map((currElem)=>{
      if (currElem.id === action.payload) {
        // console.log("match",currElem);
        let decAmount = currElem.amount - 1;
        if(decAmount<=1){
          decAmount=1;
          // alert("Minimum 1 item needed !!")
        }
        
        return{
          ...currElem,
          amount:decAmount,
        }
      }else{
        return currElem;
      }
    });
    return{
      ...state,
      cart_m:deItem,
    }
  }
  if (action.type==="SET_INCREASE") {
    let inItem = state.cart_m.map((currElem)=>{
      if (currElem.id === action.payload) {
        // console.log("match",currElem);
        let incAmount = currElem.amount + 1;
        if(incAmount >= currElem.max){
          incAmount=currElem.max;
          // alert("No more Stock available...");
        }
        return{
          ...currElem,
          amount:incAmount,
        }
      }else{
        return currElem;
      }
    });
    return{
      ...state,
      cart_m:inItem,
    }
  }
  if (action.type === "ADD_TO_CART") {
    let { id, amount, product } = action.payload;

    let existProduct = () => state.cart_m.find((curItem) => curItem.id === id); // Check if the product exists
    let existingProduct = existProduct(); // Invoke the function to get the found product

    if (existingProduct) {
      // Check if the product is found
      let updateProduct = state.cart_m.map((currElem) => {
        if (currElem.id === id) {
          let newAmount = currElem.amount + amount; // Calculate new amount

          // Check if the new amount exceeds the max stock
          if (newAmount > currElem.max) {
            newAmount = currElem.max; // Limit the new amount
          }
          return {
            ...currElem,
            amount: newAmount, // Update amount
          };
        } else {
          return currElem; // Return unchanged product
        }
      });

      return {
        ...state,
        cart_m: updateProduct, // Update the cart with modified products
      };
    } else {
      // If the product does not exist, create a new product entry
      let cartProduct = {
        id: id,
        name: product.title,
        amount: Math.min(amount, product.rating.count), // Ensure the amount does not exceed available stock
        image: product.image,
        max: product.rating.count,
        price: product.price,
        // stock: product.stock,
      };
      // console.log(amount);
      
      return {
        ...state,
        cart_m: [...state.cart_m, cartProduct], // Add new product to the cart
      };
    }
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart_m: [],
    };
  }
  if (action.type=== "CART_TOTAL_ITEM") {
    let updatecartVal = state.cart_m.reduce((initialValue,currElem)=>{
      let {amount} =currElem;
      initialValue = initialValue+amount;
      return initialValue; 
    },0);
    return{
      ...state,
      total_item:updatecartVal,
    }
  }
  if (action.type==="CART_TOTAL_PRICE") {
    let total_price=state.cart_m.reduce((initialValue,currElem)=>{
      let {price,amount}=currElem;
      initialValue = initialValue + (price * amount);
      return initialValue;
    },0);
    return{
      ...state,
      total_price,
    }
    
  }
  switch (action.type) {
    case "REMOVE_ITEM":
      let updatedCart = state.cart_m.filter(
        (curItem) => curItem.id !== action.payload
      );
      return {
        ...state,
        cart_m: updatedCart,
      };

      case "PLACE_ORDER":
        let { id, amount, product } = action.payload;
        return {
          ...state,
          oneProduct:action.payload,
        }
  }
  
  return state;
}

export default CartReducer;
