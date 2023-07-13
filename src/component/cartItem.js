import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Context } from "../context";
import "../styles/cartItem.css"


function CartItem(item){
   const { removeFromCart } = useContext(Context)
   const Price = 1099
   const priceDisplay = Price.toLocaleString("en-us" , {style : "currency" , currency: "INR"})
    return(
        <div className="cart-container">
            <img className="element" src={item.item.urls.small}  alt="element" width='160px' />
           <div className="details">
                < AiFillDelete className="delete-btn" onClick={()=> removeFromCart(item.item.id)} />
                <p className="price">{priceDisplay}</p>
            </div>
            
        </div>
    )
}

export default CartItem