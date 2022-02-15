import React from 'react';
import Title from '../components/Title';
import Nav from '../components/Nav';

export default function Connections() {
    return (
        <div>
            <Title title='Connections' linkText='Go to Viewer' link='/demographic' />

            <div className='flex flex-row w-full'>
                <Nav links={[
                        {text: 'Home', link: '/'},
                        {text: 'Definitions', link: '/definitions'}
                ]}/>
                <div>
                    <div className='mt-10 mr-10 whitespace-pre-wrap'>
                        {/* put stuff in here */}
                        Within Illinois, the black population is predominantly located in Chicago within Cook County. Such a highly concentrated black population in a defined area is most likely the result of institutional racism and a practice banks used known as "redlining." Redlining was a system that banks used to "grade" certain areas of each county. Each neighborhood was given a grade A, B, C, D (with D being the lowest rating and being judged as likely to default or not be able to pay back loans), and this rating would either benefit the citizens or not. However, any black presence would automatically grant the neighborhood a D rating, preventing them from getting housing loans and gaining capital from the banks to purchase homes or start businesses. Redlining encouraged white neighborhoods to discourage a black presence from moving into white-dominated areas, as it might harm housing prices. Since most Americans' most significant investment is in homeownership, which is also the best way to establish wealth, the black population has been at a substantial disadvantage for decades. The effects of redlining are still visible in highly segregated areas.
                        <br/>
                        <br/>
                        In <i>Raisin in the Sun</i>, Lorraine Hansberry's play regarding the frustrated dreams of black Americans, this dynamic of redlining and segregation is depicted in the lives and hopes of the Younger family. In one scene, Karl Lindner (a white representative from the Clybourne Park Neighborhood Association) offers to pay the Younger family not to move to this white neighborhood. He suggests that "People can get awful worked up when they feel that their whole way of life and everything they've ever worked for is threatened" (Hansberry). Although Lindner never explicitly states that the Younger family's presence would harm the neighborhood's property values, he does suggest that the Younger family will "threaten" what the community has worked for. Potentially due to redlining, Lindner and white citizens like him do not want to affect their ability to gain loans and other benefits just because of one black family moving into their neighborhood. Institutional racism is often created when systems benefit one race over another. Housing discrimination, as seen in the play and in Hansberry’s own life, creates and encourages persecution of minorities and uneven distribution of wealth.
                    </div>
                    <div className = 'mt-[40px] flex flex-wrap justify-center items-center'>
                        <img className="box-content h-[300px]  p-4 justify-self-center" src="pictures/redlining.jpeg"/>
                        <img className="box-content h-[300px] p-4 justify-self-center" src="pictures/clybourne2.jpeg"/>
                    </div>
                </div>
                
            </div>
        </div>
            
 
    )
}