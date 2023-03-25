import React from 'react';
import pirate from '../assets/pirate.png';
import classes from './Card.module.css';

const Card = props => {
    return(
        <div className={classes.flex}>
            <div className={classes.card}>
                <div className={classes.header}>
                    <img src={pirate} alt="" />
                    <h5>InterviewMe</h5>
                </div>
                <p>Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.</p>
                <span>uploaded 6 days ago</span>
            </div>
            <div className={classes.card}>
                <div className={classes.header}>
                    <img src={pirate} alt="" />
                    <h5>InterviewMe</h5>
                </div>
                <p>Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.</p>
                <span>uploaded 6 days ago</span>
            </div>
            <div className={classes.card}>
                <div className={classes.header}>
                    <img src={pirate} alt="" />
                    <h5>InterviewMe</h5>
                </div>
                <p>Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.</p>
                <span>uploaded 6 days ago</span>
            </div>
            
        </div>
    );
};

export default Card;