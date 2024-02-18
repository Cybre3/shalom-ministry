import React from 'react';
import { Chrono } from "react-chrono-extra";


function Timeline({items}) {
    return (
        <div style={{ width: "500px", height: "400px", mode:'VERICAL' }}>
            <Chrono items={items} />
        </div>
    ) 
}

export default Timeline;