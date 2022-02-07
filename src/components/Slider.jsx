import React, { useState } from 'react';
import ReactSlider from 'react-slider';

export default function Slider({onChange}) {
    return (
        <div className='flex items-center justify-ceter p-5 bg-white rounded-md drop-shadow-lg'>
            <ReactSlider
                className='h-[75vh] w-3/12'
                thumbClassName='bg-red-500 w-5 h-5 border-transparent rounded-full -translate-x-2.5'
                trackClassName='bg-blue-500 w-2 rounded-full -translate-x-1'
                onChange={onChange}
                min={2000}
                max={2020}
                step={10}
                orientation='vertical'
            />
        </div>
    )
}