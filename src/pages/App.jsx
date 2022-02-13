import React, { useState } from 'react';
import Title from '../components/Title';
import Viewer from '../components/Viewer';

export default function App() {
    const [title, setTitle] = useState("Non-White Population in Illinois")

    return (
        <div className='flex flex-col h-screen overflow-hidden'>
            <Title title={title} linkText='Go to Connections' link='/connections'/>
            <Viewer onChangeYear={(year) => {
                if(year <= 1990)
                    setTitle("Non-White Population in Illinois");
                else
                    setTitle("Black Population in Illinois");
            }}/>
        </div>
    );
}