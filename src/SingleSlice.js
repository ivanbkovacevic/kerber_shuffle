import React, { useState } from 'react';
import {Images} from './Images'

function SingleSlice(props) {

    let imageHeight=React.createRef();
    console.log(imageHeight);


    const[posY,setPosY]=useState(0);
    const[mouseEnter,setMouseEnter]= useState(false);
    const imgContStyle = {
   
        backgroundImage: `url(${Images[8].imgSource})`,/* The image used */
        backgroundColor: "black", /* Used if the image is unavailable */
        /* You must set a specified height */
        backgroundPositionY: ` ${props.slice}px`, /* Center the image */
        backgroundRepeat: "no-repeat" ,/* Do not repeat the image */
        backgroundSize: "cover", /* Resize the background image to cover the entire container */
        fontFamily: "Arial",
        
      };
    return (
     
            <div className="single-slice-cont" style={imgContStyle} >
            
                {/* <img ref={imageHeight} src={Images[8].imgSource} alt='neeh'></img> */}
            </div>
     
    );
}
 
export default SingleSlice;