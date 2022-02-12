import React, { useEffect } from 'react';

export default function Nav({ links }) {
    return (
        <div>
            <div className='flex-col justify-self-start w-min h-min mt-10 ml-5 mr-10 p-5 bg-white rounded-md drop-shadow-lg'>
                { links.map((el, i) => {
                    return (
                        <div>
                            <a href={el.link} className='w-min whitespace-nowrap font-bold cursor-pointer underline decoration-[#ba1531] decoration-2 hover:decoration-4 hover:pointer'>-{el.text}</a>
                        
                            {i !== links.length - 1 && <div className='h-5'></div>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}