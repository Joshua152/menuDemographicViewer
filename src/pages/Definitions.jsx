import React from 'react';
import Title from '../components/Title';
import Nav from '../components/Nav';

export default function() {
    return (
        <div>
            <Title title='Definitions' linkText='Go to Viewer' link='/demographic' />

            <div className='flex flex-row w-full'>
                <Nav links={[
                        {text: 'Home', link :'/'},
                        {text: 'Connections', link: '/connections'}
                        
                ]}/>

                <div className='mt-10 mr-10'>
                    {/* put stuff in here */}
                    <b> Red Lining </b> - a practice banks used to discriminate against a certain population, especially black population. This practice involves the grading of areas and then the limiting of access to capital through bank loans.
                    <br/>
                    <br/>
	                <b> D Level </b> (Ranking System) - A low grade that banks would give to certain counties (often predominantly black) that would restrict them access to loans and capital 
                    <br/>
                    <br/>
	                <b> Federal Housing Administration </b> - This group created a ranking system that encouraged segregation and then denied financial services due to race
                    <br/>
                    <br/>
	                <b>Institutional Racism</b> (Systemic Racism): When unfair laws or government systems that support racism lead to discrimination in areas like housing and education.
                    <br/>
                    <br/>
	                <b>Housing Discrimination </b> - Black communites were oftened discrmmated in order to gain ownership of a house or buy a house
                    <br/>
                    <br/>
	                <b> Food Desert </b> - Areas (often in urban, predominantly black neighborhoods) where there is limited access to healthy foods. Often this phenomenon is linked to redlining because these areas failed to attract grocery stores or markets because they were unlikely to get capital from banks
                    <br/>
                    <br/>
	                <b>Capital</b> - Wealth or assets, often capital can be granted or loaned by banks to individuals so those individuals can purchase homes and pay for them over time through mortgages.
                    <br/>
                    <br/>
	                <b>Black belt</b> - An area in South Chicago where most black people lived. This area was known for its substandard and overcrowded housing
                    <br/>
                    <br/>
	                <b>Summer of 1919 </b>- series of riots between migrant population and black population that left 23 Chicagons dead. This event reflected the antagonism that existed and was made worse by the poor housing conditions of the time.


                </div>
            </div>
        </div>
    )
}