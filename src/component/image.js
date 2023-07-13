import React, { useContext, useState }  from "react";
import '../styles/image.css'
import { FaRegHeart  , FaHeart} from "react-icons/fa";
import { BsBagCheckFill , BsBagPlus } from "react-icons/bs";
import { Context } from "../context";


function Image({img}){
    const [isHovered , setIsHovered ]= useState(false)

    const { toggleFav , addToCart , cartItems , removeFromCart } = useContext(Context)

    function favIcon(){
        if(img.liked_by_user){
           return < FaHeart className="fav-icon" onClick={()=> toggleFav(img.id)} />
        }
        else if(isHovered){
            return < FaRegHeart className="fav-icon" onClick={()=> toggleFav(img.id)} /> 
        }
    
    }

    function cartIcon(){
        const alreadyInCart = cartItems.some(item => item.id === img.id )

        if(alreadyInCart){
            return < BsBagCheckFill className="cart-icon" onClick={()=> removeFromCart(img.id)} />
        }
        else if(isHovered){
            return < BsBagPlus className="cart-icon" onClick={ () => addToCart(img) } />
        }
    }

   // const cartIcon = isHovered && < BsFillBagPlusFill  />



    return(
        <div className="image-container"
            onMouseEnter={() => setIsHovered(true) }
            onMouseLeave={() => setIsHovered(false) }
        >
            
            
            <img height="auto" src={img.urls.small} alt='elements' className="image-grid" />
                    {favIcon()}
                    {cartIcon()}
               
                
                
        </div>
    )

    
}

/*Image.propTypes = {
    className : propTypes.string,
    img : propTypes.shape({
     id : propTypes.string.isRequired,
     urls:propTypes.string.isRequired,
     liked_by_user:propTypes.bool
    })
 }
*/
export default Image