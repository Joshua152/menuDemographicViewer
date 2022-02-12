import React from 'react';
import Title from '../components/Title';

export default function Raisinconnection() {
    return (
        <div className='flex items-center justify-center'>
            <Title title='A Raisin In the Sun' linkText='Go to Viewer' link='/'/>
            <img src='./path' className='bg-black'/>
        </div>
    );
}