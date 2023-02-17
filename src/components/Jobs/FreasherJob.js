import React, { useEffect, useState } from 'react';
import Job from './Job';

const FreasherJob = () => {
    const [catagori, setCatagory] = useState([]);

    useEffect(() => {
        
        fetch('fresherdata.json')
            .then(res => res.json())
            .then(data => {
                setCatagory(data)
                
            })
    }, [])
    console.log(catagori)
    return (
        <div className='row'>
            {    
                        catagori.map(job => <Job
                            key={job._id}
                        job={job}
                        ></Job>)
            }
        </div>
    );
};

export default FreasherJob;