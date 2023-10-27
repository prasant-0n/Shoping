import React from 'react';
import Banner from './HomePages/Banner';
import MainComp from './HomePages/MainComp';


const Home = () => {
    return (
        <div>
            <Banner />
            <MainComp />

            {/* Display your list of items with "Add to Cart" and "Add to Wishlist" buttons */}
        </div>
    );
};

export default Home;
