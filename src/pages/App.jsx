import React, { useState } from 'react';
import Title from '../components/Title';


export default function App() {

    return (
        <div>
            <div className='flex flex-col overflow-hidden'>
                <Title title="Raisin Menu Project"/>
                <Title title="By Joshua Au and George Gino"/>
            </div>
            <div className="mt-[20px] flex flex-col justify-center items-center">
                <div>
                    <a href='/demographic' className='mr-[20px] font-bold cursor-pointer underline decoration-[#ba1531] decoration-2 hover:decoration-4 hover:pointer'>Demographic Viewer</a>
                    <a href='/connections' className='ml-[20px] mr-[20px] font-bold cursor-pointer underline decoration-[#ba1531] decoration-2 hover:decoration-4 hover:pointer'>Connection to Raisin in the Sun</a>
                    <a href='/definitions' className='ml-[20px] font-bold cursor-pointer underline decoration-[#ba1531] decoration-2 hover:decoration-4 hover:pointer'>Definitions</a>
                </div>
                <div className='mt-[40px] flex flex-row justify-center items-center'>
                    <img className="box-content h-100 w-50 p-4 justify-self-center" src="pictures/newcover.jpeg"/>
                    <img className="box-content h-[300px] p-4 justify-self-center" src="pictures/houses1.jpeg"/>
                </div>
            </div>
         {/* <img className="mt-[60px]  left-13 absolute bottom-10 box-content h-30 w-22px p-4 justify-self-center -z-1" src="pictures/bgHome.jpeg"/> */}
        </div>
    );
}