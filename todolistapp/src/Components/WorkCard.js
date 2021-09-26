import React from "react";
import './style.css';
const WorkCard = props => {
 
  return (
    <div className="work">
      <p  onClick={() => props.toggleItem(props.data.id)}
    className={`work ${props.data.done ? " done" : "" }`}>{props.data.name}</p>
      <button className="btnClear">Clear</button>
     
    </div>
    
     
  );
};

export default WorkCard;
