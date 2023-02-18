import React, { useContext, useEffect } from 'react';
import MainSection from 'components/MainSection';
import Advantages from 'components/Advantages';
import RestaurantRecs from 'components/RestaurantRecs';
import RegistrationProposal from 'components/RegistrationProposal';
import { AppContext } from 'store/store';
import getAndUpdateRestaurants from 'utils/functions/getAndUpdateRestaurants';

const HomePage = () => {
    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
        getAndUpdateRestaurants(state, dispatch);
    }, []);

    return (
        <div className='flex flex-col w-11/12 2xl:w-9/12 mx-auto pb-10 md:pb-40'>
            <MainSection />
            <Advantages />
            <RestaurantRecs />
            <RegistrationProposal />
        </div>
    );
};

export default HomePage;
