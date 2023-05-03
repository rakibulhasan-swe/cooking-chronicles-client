import React from 'react';
import Banner from './Banner';
import ChefSection from './ChefSection';
import Newsletter from './Newsletter';
import PopularRecipe from './PopularRecipe';

const Home = () => {
    return (
        <>
           <Banner /> 
           <ChefSection />
           <Newsletter />
           <PopularRecipe />
        </>
    );
};

export default Home;