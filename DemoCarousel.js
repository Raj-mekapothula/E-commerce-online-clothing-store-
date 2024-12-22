import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const  DemoCarousel = () => {
    return(
       
            <Carousel>
                <div>
                    <img src="https://media.istockphoto.com/id/1455733151/photo/portrait-of-asian-businesswoman-walking-in-street.webp?b=1&s=170667a&w=0&k=20&c=Oytbe_DjMHtwPGpKYQBz-9d6k5N7-aE0emAwa42OIig="  alt=''/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/621499082/photo/man-standing-in-street-wearing-denim-portrait.webp?b=1&s=170667a&w=0&k=20&c=H51w2gyNw1tZBaCv6Tq1DlSBTX-48Yf6TLbAZFOY5_Y="   alt=''/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/1185425731/photo/three-beautiful-young-girls-sitting-at-the-studio.jpg?s=612x612&w=0&k=20&c=uwWbZts6Kv--7ExjPYPmSmWI35O516WoV6U5TOEyxqE="  alt=''/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        )

}



export default DemoCarousel