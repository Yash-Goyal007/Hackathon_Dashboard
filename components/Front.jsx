import React from 'react';
import classes from './Front.module.css';
import bulbFront from '../assets/bulb_front.png';
import waves from '../assets/waves.png';
import { Link } from 'react-router-dom';

const Front = props => {
    return (
        <div className={classes.front}>
            <div className={classes.content}>
                <h1>Hackathon Submissions</h1>
                <h6>Lorem ipsum dolor sit amet consectetur. Urna cursus amet pellentesque in parturient purus feugiat faucibus. Congue laoreet duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus nec vitae. </h6>
                <button type="submit"> <Link to="/upload"> Upload Submission</Link></button>
            </div>
            <img src={bulbFront} alt="" />
        </div>
    );
};

export default Front;