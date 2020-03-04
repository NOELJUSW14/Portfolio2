import React from "react";
import {useSpring, animated} from "react-spring";

import Card from "../Card";
import CardBtn from "../CardBtn";
import "./style.css";

function CardInfo(props) {
    const style = useSpring({opacity: 1, from: {opacity: 0}})
  return (
    
    <animated.div className="g-card-info" style={style} onClick={(e)=>props.click(props.item)}>
      <p className="g-card-title">{props.title}</p>
      <p className="g-card-subTitle">{props.subTitle}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer" >View</a>
      {/* <img className="" src={props.item.imgSrc} alt={props.item.imgSrc}/>
      {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>} */}
    </animated.div>
  );
}

export default CardInfo;