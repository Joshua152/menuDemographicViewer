import React from 'react';
import Title from '../components/Title';
import Nav from '../components/Nav';

export default function Connections() {
    return (
        <div>
            <Title title='Connections' linkText='Go to Viewer' link='/' />

            <div className='flex flex-row w-full'>
                <Nav links={[
                        {text: 'Info', link: '/info'},
                        {text: 'Definitions', link: '/definitions'}
                ]}/>

                <div className='mt-10 mr-10'>
                    {/* put stuff in here */}
                </div>
            </div>
        </div>
    )
}