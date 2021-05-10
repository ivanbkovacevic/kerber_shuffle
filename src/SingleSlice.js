import React, { useState} from 'react';
import {Images} from './Images'

function SingleSlice(props) {

    const imageLoaded=()=>{
        let imageHeight=React.createRef();
        console.log(imageHeight.height);
    }

    const[mouseEnt,setMouseEnter]= useState('');

    const mouseEntersFunc=()=>{
        setMouseEnter('mouse-ent-class');
    }

    const mouseLeaveFunc=()=>{
        setMouseEnter('mouse-leave-class');
    }

    const imgContStyle = {
        backgroundImage: `url(${Images[9].imgSource})`,/* The image used */
      //  backgroundColor: "white", /* Used if the image is unavailable */
        /* You must set a specified height */
        backgroundPositionY: ` ${props.slice}px`, /* Center the image */
        backgroundRepeat: "no-repeat" ,/* Do not repeat the image */
        backgroundSize: "cover", /* Resize the background image to cover the entire container */
        fontFamily: "Arial",
        
      };
    return (
    
                <div className={`single-slice-cont ${mouseEnt}`} style={imgContStyle} 
                    onMouseEnter={mouseEntersFunc}
                    onMouseLeave={mouseLeaveFunc}>
                       
            </div>
               
              );
}
 
export default SingleSlice;