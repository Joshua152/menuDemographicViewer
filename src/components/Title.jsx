import React from 'react';

export default function Title({title, linkText, link}) {
    return (
        <div style={{zIndex: 1}} className='flex flex-col items-center justify-center mt-5'>
            <div 
                className='
                    w-fit 
                    h-min 
                    p-5
                    mb-2
                    bg-white 
                    rounded-md 
                    drop-shadow-lg'>
                
                <h1 className='font-bold text-3xl'>{title}</h1>
            </div>
            <a href={link} className='font-bold cursor-pointer underline decoration-[#ba1531] decoration-2 hover:decoration-4 hover:pointer'>{linkText}</a>
        </div>
    );
}