import React from 'react';
import pirate from '../assets/pirate.png';
import classes from './Card.module.css';
import { useHistory } from 'react-router-dom';
const Card = ({image,title,id,summary,date}) => {
    const history = useHistory();
    const openHack = ()=>{
        history.push(`hack:${id}`)
    }
    return(
             <div className={classes.card} onClick={()=>{openHack()}}>
                <div className={classes.header}>
                    <img src={pirate} alt="" />
                    <h5>{title}</h5>
                </div>
                <p>{summary}</p>
                <span>uploaded 6 days ago</span>
            </div>
       
    );
};

export default Card;