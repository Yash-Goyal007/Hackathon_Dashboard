import React from 'react';
import Navbar from '../components/Navbar';
import SubmissionForm from '../components/SubmissionForm';
import classes from './UploadSubmission.module.css';

const UploadSubmission = props => {
    return(
        <div className={classes.submissionPage}>
            <Navbar/>
            <SubmissionForm/>
        </div>
    );
};

export default UploadSubmission;