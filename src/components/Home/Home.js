import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    
    return (
        <div>
            <div className='p-4 d-md-flex justify-content-between'>
                <Link to='/freasherjob'><h1 className='bg-primary p-5 rounded m-4 text-center text-light'>Fresher Jobs</h1></Link>
                <Link to='/expariencejob'><h1 className='bg-primary p-5 rounded m-4 text-center text-light'>Experienced Jobs</h1></Link>
                <Link to='/topit'><h1 className='bg-primary p-5 rounded m-4 text-center text-light'>Top IT Companies</h1></Link>
            </div>
            <div>
              
            </div>
        </div>
    );
};

export default Home;