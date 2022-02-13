import React from 'react';
import Title from '../components/Title';
import Nav from '../components/Nav';

export default function() {
    return (
        <div>
            <Title title='Definitions' linkText='Go to Viewer' link='/' />

            <div className='flex flex-row w-full'>
                <Nav links={[
                        {text: 'Connections', link: '/connections'}
                ]}/>

                <div className='mt-10 mr-10'>
                    {/* put stuff in here */}
                </div>
            </div>
        </div>
    )
}