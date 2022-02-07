import React from 'react';
import Title from '../components/Title';
import Viewer from '../components/Viewer';

export default function App() {
    return (
        <div className='flex flex-col h-screen'>
            <Title />
            <Viewer />
        </div>
    );
}