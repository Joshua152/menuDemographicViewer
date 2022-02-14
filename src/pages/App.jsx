import React, { useState } from 'react';
import Title from '../components/Title';


export default function App() {

    return (
        <div className='flex flex-col h-screen overflow-hidden'>
            <Title title="Raisin Menu Project"/>
            <Title title = "By Joshua Au and George Gino"/>
         <div className="mt-[20px] flex justify-center items-center">
         <a href= '/definitions' className='mr-[20px] font-bold cursor-pointer underline decoration-[#ba1531] decoration-2 hover:decoration-4 hover:pointer'>Definitions</a>
            <a href= '/demographic' className='ml-[30px] mr-[20px] font-bold cursor-pointer underline decoration-[#ba1531] decoration-2 hover:decoration-4 hover:pointer'>Demographic Viewer</a>
            <a href= '/connections' className='ml-[20px] font-bold cursor-pointer underline decoration-[#ba1531] decoration-2 hover:decoration-4 hover:pointer'>Connection to Raisin in the Sun</a>
        </div>
        </div>
        
    );
}