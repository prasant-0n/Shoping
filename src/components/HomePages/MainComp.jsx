import React from 'react';
import { useCart } from 'react-use-cart'; // Import the useCart hook
import Itemcard from './Itemcard';
import Data from './product';

const MainComp = () => {
    const { addToCart } = useCart(); // Use the addToCart function from the context

    return (
        <div className='text-center mt-3'>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {Data.productData.map((item, index) => (
                        <Itemcard
                            img={item.imgUrl}
                            title={item.name}
                            price={item.price}
                            desc={item.description}
                            item={item}
                            key={index}
                            addToCart={() => addToCart(item)} // Pass addToCart function to the component
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MainComp;
