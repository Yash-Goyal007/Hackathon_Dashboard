import React from 'react';
import Front from '../components/Front';
import Navbar from '../components/Navbar';
import SubmissionFilter from '../components/SubmissionFilter';
import Card from '../components/Card';
import classes from './Landing.module.css';
import Catalog from '../components/Catalog';


const Landing = props => {
    return (
        <div className={classes.landing}>
            <Navbar />
            <Front />
            <SubmissionFilter/>
            <Catalog/>
        </div>
    );
};

export default Landing;