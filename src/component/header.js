import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsBag , BsBagFill } from "react-icons/bs";
import '../styles/header.css'
import { Context } from "../context";



function Header(){
    
    const {cartItems} = useContext(Context)

    return(
        <div className="header">
            <Link className="name" to='/'><h1>Pixy</h1></Link>
            <div>
                <Link className="cart" to='/cart'>
                { cartItems.length > 0 ? < BsBagFill className="cart" /> : < BsBag className="cart" /> }
                </Link>
            </div>
           
        </div>
    )
}

export default Header