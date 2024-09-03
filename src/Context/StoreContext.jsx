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

    useEffect(()=>{
        console.log(cartItems);
    } ,[cartItems]);


    const ContextValue = {
        food_list , 
        cartItems ,
        setcartItems,
        addTocart , 
        removeFromcart
    }

   
    return(
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider ;
