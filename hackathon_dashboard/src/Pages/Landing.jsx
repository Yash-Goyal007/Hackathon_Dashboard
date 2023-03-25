import React from 'react';
import Front from '../components/Front';
import Navbar from '../components/Navbar';
import SubmissionFilter from '../components/SubmissionFilter';
import Card from '../components/Card';
import classes from './Landing.module.css';


const Landing = props => {
    return (
        <div className={classes.landing}>
            <Navbar />
            <Front />
            <SubmissionFilter/>
            <Card/>
        </div>
    );
};

export default Landing;