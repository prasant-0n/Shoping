import React from "react";

import Carousel from "react-material-ui-carousel";
const data = [
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/c2d8527e77c55b8c.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/01f437fbc85be559.jpg?q=20",
    "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
];

function Banner() {
    return (
        <Carousel
            className="carasousel"
            autoPlay={true}
            duration={400}
            animation="slide"
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style: {
                    backgroundColor: "transparent",
                },
            }}
        >
            {data.map((img,) => {
                return (
                    <>
                        <img src={img} alt="" className="banner_img" />
                    </>
                );
            })}
        </Carousel>
    );
}

export default Banner;
