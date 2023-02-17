import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Jobs = ({ jobs }) => {
    const { companyName, position, location, } = jobs;
    return (
        <div className=' m-5 col-md-3'>
            <div class="p-4 m-auto bg-light text-center">
                <div class="job-post-item-header align-items-center">
                    <h2 class="mr-3 text-black"><span href="#">{position}</span></h2>
                </div>
                <Image variant="top" style={{ height: '6rem' }} src='https://www.designfreelogoonline.com/wp-content/w3-webp/uploads/2021/07/3D-colorful-logo-maker-e1626345561717.jpgw3.webp' />
                <div class="job-post-item-body d-block text-center">
                    <div class="mr-3"><span >{companyName}</span></div>
                    <div class="mr-3"><span>{location}</span></div>
                </div>
                <Link className='d-block' to='/confirm'><Button className=' px-5'>Apply Now</Button></Link>
            </div>
        </div>
    );
};

export default Jobs;