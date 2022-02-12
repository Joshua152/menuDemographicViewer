import React from 'react';
import Title from '../components/Title';
import Viewer from '../components/Viewer';

export default function App() {
    return (
        <div className='flex flex-col h-screen overflow-hidden'>
            <Title title="Black Population in Illinoi" linkText='Go to Info' link='/info'/>
            <Viewer />
            <Title title = "Connection to A Raisin in the Sun" linkText = 'Go to connection' link = '/raisinconnection'/>
        </div>
        
    );
}
