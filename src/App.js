import "./style.css";
import { useState} from "react";
import { Cards } from "./Cards";
import RolerPuzzle from './RolerPuzzle'
import kerber from "./kerber.png";
import SliceAndRotate from "./SliceAndRotate";

export default function App() {

  const [cardToDisplay, setCardToDisplay] = useState(Cards[0]);
  const [start, setStart] = useState("");
  const[beforeFirstClick,setBeforeFirstClick]=useState(true);

  let tempCardNum = 0;
  const startInterval = () => {
    setStart(setInterval(printCard, 100));
  };

  const printCard = () => {
    setBeforeFirstClick(false)
    if (tempCardNum === Cards.length - 1) {
      tempCardNum = 0;
      setCardToDisplay(Cards[tempCardNum]);

    } else {
      tempCardNum++;
     
      setCardToDisplay(Cards[tempCardNum]);
    }
   
  };

  const stopInterval = () => {
    clearInterval(start);
  };

  return (

    <div className="main-container">
      <div className="header"><h1>CARDS SHUFFLING APP</h1>
      <img src={kerber}></img>
      </div>
    
      <div className="buttons-container">
          <button onClick={startInterval}>Click to shuffle cards</button>
          <button onClick={stopInterval}>Stop the shuffle</button>
      </div>
     <div className="card-container">
       <div className="img-cont">
         <img src={cardToDisplay.imageUrl} alt="nsto"></img>
         </div>
       
  
     <div className="description">
       <h2>{cardToDisplay.name}</h2>
       In Italy, pizza served in formal settings, such as at a restau
     rant, is presented unsliced, and is eaten with the use of a knife and fork.[2][3] In casua
     l settings, however, it is cut into wedges to be eaten while held in the hand.
     </div>
     </div>
     <SliceAndRotate />
     {/* <RolerPuzzle /> */}
    </div>
  );
}