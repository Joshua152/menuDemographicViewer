import React, { useState } from 'react';
import ReactSlider from 'react-slider';

export default function Slider({onChange}) {
    const [value, setValue] = useState(1990)

    return (
        <div style={{zIndex: 1}} className='flex items-center justify-ceter ml-5 p-5 bg-white rounded-md drop-shadow-lg'>
            <ReactSlider
                className='h-[60vh] w-3/12 mr-5'
                thumbClassName='bg-[#ba1531] w-5 h-5 border-transparent rounded-full -translate-x-2.5'
                trackClassName='bg-black w-2 rounded-full -translate-x-1'
                markClassName='bg-black w-4 h-4 rounded-full -translate-x-2 translate-y-0.5'
                onChange={(val) => {
                    setValue(val);
                    onChange(val);
                }}
                min={1990}
                max={2020}
                step={10}
                marks={[1990, 2000, 2010, 2020]}
                orientation='vertical'
            />
            <h1 className='font-bold text-3xl text-[#ba1531]'>{value}</h1>
        </div>
    )
}