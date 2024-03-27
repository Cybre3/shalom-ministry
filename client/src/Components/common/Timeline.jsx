import React from 'react';
import { Chrono } from "react-chrono-extra";

import './timeline.css';


function Timeline({items, mode, timelineClass}) {
    return (
        <div className={`${timelineClass}`}>
            <Chrono items={items} mode={mode} className='scrollbar-hidden' />
        </div>
    ) 
}

export default Timeline;