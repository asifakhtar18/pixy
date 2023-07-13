import React, { useEffect, useState } from "react";

const Context = React.createContext()

function ContextProvider({children}) {  //destructuring {children} from props
    const [allPhotos , setAllPhotos] = useState([])
    const [cartItems , setCartItems] = useState([])
   
    const YOUR_ACCESS_KEY = "kBZ6tGGNQc6wK7WcPfCQuQlwFrVMH0uodnWEhsvEwuY"

    useEffect(()=>{
        fetch(`https://api.unsplash.com/photos/?client_id=${YOUR_ACCESS_KEY}`)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    },[])

    
    


    function toggleFav(id){
        
        const updatedArr = allPhotos.map((photo)=>{
            if(photo.id === id){
               
                return{ ...photo , liked_by_user : !photo.liked_by_user }
            }
            
            return photo
        })

       
       
        setAllPhotos(updatedArr)
        
    } 

   
    

   
    

    function addToCart(newItem) {
        setCartItems( prevItems => [...prevItems , newItem])
    }

    function removeFromCart(id){
        setCartItems(prevItem => prevItem.filter(item => item.id !== id ))

    }

    function emptyCart(){
        setCartItems([])
    }


    return(
        <Context.Provider value={{ allPhotos , toggleFav , addToCart , cartItems , removeFromCart , emptyCart , }} >
            {children}
        </Context.Provider>
    )
}

export {ContextProvider , Context}