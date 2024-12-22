import React from "react";
import Slider from "react-slick";
var settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2
  };
 const Dilslide =()=> {
 
  return (
    <center>
    <Slider {...settings}>
      <div>
        <img height={300} width={300} src='https://baazarkolkata.com/old(12.08.2020)/wp-content/uploads/2019/08/bazar-kolkata-2nd-day1003.jpg' alt=""/>
      </div>
      <div>
        <img height={300} width={300} src='https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&w=1000&q=80' alt=""/>
      </div>
      <div>
        <img height={300} width={300} src='https://i.pinimg.com/474x/87/f1/d5/87f1d5d7171efa5b2c477d6f5459deb2.jpg' alt=""/>
      </div>
      <div>
        <img height={500} width={300} src='https://i.pinimg.com/750x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg' alt=""/>
      </div>
      <div>
        <img height={300} width={300} src='https://i.pinimg.com/474x/47/46/80/4746805205075028e2f28de8af6796d0.jpg' alt=""/>
      </div>
      <div>
        <img height={300} width={300} src='https://i.pinimg.com/236x/fe/85/6f/fe856fe857f1c14ed3ef4b6e1efa692f.jpg' alt=""/>
      </div>
    </Slider>
    </center>
  );
}
export default Dilslide