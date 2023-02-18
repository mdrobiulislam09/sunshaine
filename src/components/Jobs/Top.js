import React from 'react';
import { Button, Row } from 'react-bootstrap';

const Top = ({ top }) => {
    const { companyName } = top;
    return (
        <div>
            <div className='bg-primary px-5 py-3 rounded m-4 text-center text-light'>
                {companyName}
                <br></br>
                <br></br>
                <div><Button className='btn btn-warning'>Details</Button></div>
            </div>
        </div>
    );
};

export default Top;