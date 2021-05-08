import "./style.css";
import { useState } from "react";
import { Cards } from "./Cards";

export default function App() {

  const [cardToDisplay, setCardToDisplay] = useState(Cards[0].imageUrl);

  const [start, setStart] = useState("");
 

  let tempCardNum = 0;
  const startInterval = () => {
    setStart(setInterval(printCard, 300));
  };

  const printCard = () => {
    if (tempCardNum === Cards.length - 1) {
      tempCardNum = 0;
   
      setCardToDisplay(Cards[tempCardNum].imageUrl);
       console.log(Cards.length);
    console.log(tempCardNum + "cardnum");
    } else {
      tempCardNum++;
     
      setCardToDisplay(Cards[tempCardNum].imageUrl);
    }

    console.log("printCardddd");
    console.log(Cards.length);
   
  };

  const stopInterval = () => {
    clearInterval(start);
   
    console.log("stop");
  };

  return (
    <div className="main-container">
      <div className="header"><h1>CARDS SHUFFLING APP</h1></div>
    
      <div className="buttons-container">
          <button onClick={startInterval}>Click to shuffle cards</button>
          <button onClick={stopInterval}>Stop the shuffle</button>
      </div>
     <div className="card-container">
       <div className="img-cont"><img src={cardToDisplay} alt="nsto"></img></div>
  
     <div className="description">In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced, and is eaten with the use of a knife and fork.[2][3] In casual settings, however, it is cut into wedges to be eaten while held in the hand.

.</div>
     </div>
     
    </div>
  );
}