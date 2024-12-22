import React from 'react';
import './Home.css';
import Cards from './Cards';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Cardslide from './Cardslide'
import DemoCarousel from './DemoCarousel';

const Home = () => {
  return (
    <>
    <div className='cover'>
       <h1><br/>
          
         </h1>
        <h3></h3>
    </div>
    
    <div className="part2">
    OMG Deals!
    </div>
    <div className="part3">
    <Cards/>
    </div>
    <div className="part4">
    Mostly picked Brands<br/>
    </div>
    <div className="part5">
      <Card1/>
    </div>
    <div className="part6">
    Mostly picked Brands<br/>
    </div>
    <div className="part5">
      <Card2/>
    </div>
    <div className="part7">
    Mostly picked Brands<br/>
    </div>
    <div className="part5">
      <Card3/>
    </div>
    <br/>
    <div className='part8'>
      Passion gives you Brand
      Be carefull of frauds. we don't ask you your bank details
    </div>
    <DemoCarousel/>
    <div className="part9">
      <img src='https://images.unsplash.com/photo-1619086303291-0ef7699e4b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60' alt=''/>
      <img src='https://images.unsplash.com/photo-1611042553484-d61f84d22784?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60' alt=''/>
      <img src='https://images.unsplash.com/photo-1627292441194-0280c19e74e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60' alt=''/>
    </div>
    <Cardslide/>
   
    </>
  )
}

export default Home
