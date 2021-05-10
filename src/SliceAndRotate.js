import React, { useState } from 'react';
import SingleSlice from './SingleSlice'

function SliceAndRotate(props) {

    let singleSliceArr=[];
    let singlSliceProp={}
    for (let i=0;i<10;i++) {    
        singleSliceArr.push(singlSliceProp={y:i*10*-3.5}
        )
    }
console.log(singleSliceArr)

    return (
        <div className="slice-rotate-main-cont">
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