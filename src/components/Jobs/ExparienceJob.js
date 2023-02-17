import React, { useEffect, useState } from 'react';
import Jobs from './Jobs';

const ExparienceJob = () => {
    const [catagorii, setCatagory] = useState([]);

    useEffect(() => {
        
        fetch('expariencedata.json')
            .then(res => res.json())
            .then(data => {
                setCatagory(data)
                
            })
    }, [])
    console.log(catagorii)
    return (
        <div className='row'>
            {    
                        catagorii.map(jobs => <Jobs
                            key={jobs._id}
                        jobs={jobs}
                        ></Jobs>)
            }
        </div>
    );
};

export default ExparienceJob;