import React from "react";
import {useLocation,NavLink} from 'react-router-dom';

function Home1(){
    const location=useLocation()
    
    return(
        <>
        <div className="home">
            <h1>Hello {location.state.id} and welcome to the home</h1>
        </div>
       
        </>
    )
}
export default Home1;