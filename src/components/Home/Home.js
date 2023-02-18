import React from 'react';
import { Link } from 'react-router-dom';
import Toggle from '../../toggle/Toggle';

const Home = () => {
    
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <span className='me-2 text-primary fs-1'>Post A Job:</span>
                <span className='me-2 text-primary fs-1'><Toggle></Toggle></span>
            </div>
            <div className='p-4 d-md-flex justify-content-between'>
                <Link to='/freasherjob'><h1 className='bg-primary p-5 rounded m-4 text-center text-light'>Fresher Jobs</h1></Link>
                <Link to='/expariencejob'><h1 className='bg-primary p-5 rounded m-4 text-center text-light'>Experienced Jobs</h1></Link>
                <Link to='/topit'><h1 className='bg-primary p-5 rounded m-4 text-center text-light'>Top IT Companies</h1></Link>
            </div>
        </div>
    );
};

export default Home;