import React from 'react';
import classes from './SubmissionFilter.module.css';
import searchIcon from '../assets/searchIcon.png'

const SubmissionFilter = props => {
    return (
        <div className={classes.outerBox}>
            <div className={classes.allFav}>
                <h6>All Submissions</h6>
                <h6>Favourite Submissions</h6>
            </div>
            <div className={classes.search}>
                <img src={searchIcon} alt="" />
                <input type="text" placeholder='Search'/>
            </div>
            <select name="cars" id="cars" className={classes.dropdown}>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
            </select>
        </div>
    );
};

export default SubmissionFilter;