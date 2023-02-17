import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const { companyName, position, location} = job;
    return (
        <div className=' m-5 col-md-3'>
            <div class="p-4 m-auto bg-light text-center">
                <div class="job-post-item-header align-items-center">
                    <h2 class="mr-3 text-black"><span href="#">{position}</span></h2>
                </div>
                <div class="job-post-item-body d-block text-center">
                    <div class="mr-3"><span >{companyName}</span></div>
                    <div class="mr-3"><span>{location}</span></div>
                </div>
                <Link className='d-block' to='/confirm'><Button className=' px-5'>Apply Now</Button></Link>
            </div>
        </div>
    );
};

export default Job;