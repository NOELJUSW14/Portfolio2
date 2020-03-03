import React from "react";
import CardInfo from "../CardInfo";
import CardBtn from "../CardBtn";
import "./style.css";

function Card(props) {
  return (
    
    <div className="d-inline-block g-card" onClick={(e)=>props.click(props.item.id)}>
      <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}/>
      {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>}
    </div>
  );
}

export default Card;
