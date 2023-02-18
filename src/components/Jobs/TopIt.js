import React, { useEffect, useState } from 'react';
import Top from './Top';

const TopIt = () => {
    const [catagor, setCatagory] = useState([]);

    useEffect(() => {

        fetch('topit.json')
            .then(res => res.json())
            .then(data => {
                setCatagory(data)

            })
    }, [])
    return (
        <div class="d-md-flex justify-content-around">
            {
                catagor.map(top => <Top
                    key={top.id}
                    top={top}
                ></Top>)
            }
        </div>
    );
};

export default TopIt;