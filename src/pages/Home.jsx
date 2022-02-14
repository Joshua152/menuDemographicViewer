import React, { useState } from 'react';
import Title from '../components/Title';
import Viewer from '../components/Viewer';

export default function Home() {

    return (
        <div className='flex flex-col h-screen overflow-hidden'>
            <Title title={Title} linkText='Go to Connections' link='/connections'/>
        </div>
        
    );
}