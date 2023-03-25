import React from 'react';
import classes from './DetailFront.module.css';
import star from '../assets/star.png';
import pirate from '../assets/pirate.png';
import edit from '../assets/edit.png';
import deleteIcon from '../assets/deleteIcon.png';
import calender from '../assets/calender.png';


const DetailFront = props => {
    return (
        <div className={classes.detailFront}>
            <div className={classes.details}>
                <div className={classes.header}>
                    <img src={pirate} alt="" />
                    <h1>Pirate Ipsum</h1>
                </div>
                <p>Shiver to tender hempen brig quarterdeck jolly pay. Furl sail crimp furl pinnace.</p>
                <div className={classes.favorite}>
                    <img src={star} alt="" />
                    <div className={classes.date}>
                        <div className={classes.dateCircle}>
                            <img src={calender} alt="" />
                            <p>03 March</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.buttons}>
                <button>
                    <div className={classes.button}>
                        <img src={edit} alt="" />
                        <span>Edit</span>
                    </div>
                </button>
                <button>
                    <div className={classes.button}>
                        <img src={deleteIcon} alt="" />
                        <span>Delete</span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default DetailFront;