import { createContext, useEffect, useState } from "react";
import {food_list} from '../assets/assets'
export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{

    const [cartItems , setcartItems] = useState({})

    const addTocart = (itemId)=>{
        if (!cartItems[itemId]){
            setcartItems((prev)=>({...prev , [itemId]:1}))
        }

        else{
            setcartItems((prev)=>({...prev , [itemId]:prev[itemId]+1}))
        }
    }

    const removeFromcart =(itemId)=>{
        setcartItems((prev)=>({...prev , [itemId]: prev[itemId]-1}))
    }

    const getTotalAmount = ()=>{
        let TotalAmount = 0;
        for(const item in cartItems){
            if (cartItems[item]>0) {
                let itemInfo = food_list.find((product)=> product.id===item);
                TotalAmount += itemInfo.price*cartItems[item];
            }
        }
        return TotalAmount;
    }


    const ContextValue = {
        food_list , 
        cartItems ,
        setcartItems,
        addTocart , 
        removeFromcart,
        getTotalAmount
    }

   
    return(
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider ;
