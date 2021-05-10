import React, { useState,useEffect } from 'react';
import Squear from './Squear';

function RolerPuzzle(props) {
    const[sqrArr,setSqrArr]=useState([{num:1},{num:2}]);
        

    
    let   newSqrArr=[...sqrArr];
    let tempsqrNum={};
        for(let i=0;i<9;i++){
            tempsqrNum={num:i}
          
            newSqrArr.push(tempsqrNum);
            console.log('loop')
        }
    
     const initialLoad=()=>{
         setSqrArr(newSqrArr);
         console.log('initial')
     }  
const squers=sqrArr.map((item,i)=>{
    return (
    <Squear 
    key={i}
    item={item}
    />
        )
})
    return (//////////////////////////////////////////////////////////////////////////////////////////////////////////////
        <div className='roler-puzzle-main-cont'>
            <div className={`sqr sqr-${sqrArr[0]}`}></div>

            <button onClick={initialLoad}>start</button>
        </div>
    );
}

export default RolerPuzzle;