import React from 'react';
import MainSection from 'components/MainSection';
import Advantages from 'components/Advantages';
import RestaurantRecs from 'components/RestaurantRecs';
import RegistrationProposal from 'components/RegistrationProposal';

const HomePage = () => {
    return (
        <div className='flex flex-col w-full pb-10 md:pb-40'>
            <MainSection />
            <Advantages />
            <RestaurantRecs />
            <RegistrationProposal />
        </div>
    );
};

export default HomePage;
