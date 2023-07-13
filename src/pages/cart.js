import React, { useContext, useState } from "react";
import { Context } from "../context";
import CartItem from "../component/cartItem";
import "../styles/cart.css"

function Cart(){
    const [buttonText , setButtonText] = useState("Place Order")
    const {cartItems , emptyCart } = useContext(Context)
    const totalPrice = cartItems.length * 1099;
    const totalPriceDisplay = totalPrice.toLocaleString("en-us" , {style : "currency" , currency: "INR"})

    const cartItemEle = cartItems.map(item =>(
        < CartItem className="cart-element" key={item.id} item={item}  />
    
    ))

    function placeOrder(){
        if(cartItems.length > 0){
            setButtonText("Ordering...")
            setTimeout(()=>{
                console.log("Order Placed")
                setButtonText("Place Order")
                emptyCart()
            }, 3000)
        }

    }

    return(
        <main>
            <h2>Check Out</h2>
                {cartItemEle}
            <p className="total">Total: { totalPriceDisplay }</p>

            <div className="order-btn">
                <button  onClick={()=> placeOrder() }>{buttonText}</button>
            </div>
        </main>
    )
}


export default Cart