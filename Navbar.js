import React from 'react'
import {NavLink} from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
      <div className="back">
        <div className='main'>
                   <div className='ele'>
                <img src='https://media.istockphoto.com/id/1168111898/photo/camera-fujifilm-instax-mini-8.jpg?s=612x612&w=0&k=20&c=SKzPQFPIyh-qsJPAvBCRKLLkMy9fHzymQmfr3vyKzQE=' alt=''/>
                    </div>
                  <div  className='ele'>
                        <h1>Trendify</h1>
                  </div>
        </div>
        <div className='one'>
                    <ul>
                      <li><NavLink to="/" >Home</NavLink> </li>
                      <li><NavLink to="/Women" >Women</NavLink> </li>
                      <li><NavLink to="/Kids" >Kids</NavLink> </li>
                      <li><NavLink to="/Men1" >Men</NavLink> </li>
                      <li><NavLink to="Login/Login" >Login</NavLink> </li>
                    </ul>
        </div>
  
    </div>
    </div>
  )
}

export default Navbar