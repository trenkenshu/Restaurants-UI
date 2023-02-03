import React from 'react';
import MainSection from 'components/MainSection';
import Advantages from 'components/Advantages';
import RestaurantRecs from 'components/RestaurantRecs';
import RegistrationProposal from 'components/RegistrationProposal';
import Carousel from 'components/Carousel';

const HomePage = () => {
    return (
        <div className='flex flex-col w-full bg-smoke-gray dark:bg-zinc-800 pb-40'>
            <MainSection />
            <Advantages />
            <RestaurantRecs />
            <RegistrationProposal />
        </div>
    );
};

export default HomePage;
