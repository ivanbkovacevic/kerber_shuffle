import React, { useRef, useState,useEffect } from 'react';
import SingleSlice from './SingleSlice';
import {Images} from './Images'

function SliceAndRotate(props) {
    // const image=useRef();
   
    // useEffect(() => {
    //     console.log(image.current.height)
    //   }, [image]);
   
  
    let singleSliceArr=[];
    let singlSliceProp={}
    for (let i=0;i<50;i++) {    
        singleSliceArr.push(singlSliceProp={y:i*-7}
        )
    }

    return (
        <div className="slice-rotate-main-cont">
             {/* <img src={Images[1].imgSource} ref={image}></img> */}
                       <div className="slice-back-cont"></div>
                     
         {singleSliceArr.map((slice,i)=>{
             return(
                 <SingleSlice 
                 key={i}
                 slice={slice.y}              
                 />
             )
                      })}
        </div>
    );
}

export default SliceAndRotate;