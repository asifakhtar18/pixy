import React, { useContext } from "react";
import Image from "../component/image";
import { Context } from "../context";
import "../styles/photo.css"

function Photos(){
    const {allPhotos} = useContext(Context)

    const imageEle = allPhotos.map( (img) => (
        <Image key={img.id} img={img} />
    ))
    return(
        <div className="image-container">
            <div className="image-grid">
             {imageEle}
            </div>
            
        </div>
    )
}

export default Photos