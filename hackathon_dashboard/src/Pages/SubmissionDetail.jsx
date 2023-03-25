import React from 'react';
import DetailFront from '../components/DetailFront';
import DetailsDescription from '../components/DetailsDescription';
import Navbar from '../components/Navbar';

const SubmissionDetail = props => {
    return(
        <div>
            <Navbar/>
            <div>
                <DetailFront/>
                <DetailsDescription/>
            </div>
        </div>
    );
};

export default SubmissionDetail;