import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
const Footer = () =>{
    const X=styled.nav`
    div{
      background:#231955;
    }
    ul{
      list-style:none;
      background:#231955;
  }
    nav{
      background:#231955;
   
  }
  .Sub{
    display:flex;
      height:100%;
      width:100%;
    }
    .Nav_list{
      text-decoration:none;
      color:#bbb;
  }
  li{
      text-style:none;
      height:30px;
      padding-left:50px;
  }
 #NavSub ul{
  display:flex;
  flex-direction:row;
 }
 #Big{
  display:flex;
 }
 .right{
  float:right;
  color:#ede0d4;
 }
 .fa {
  padding: 20px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}

.fa:hover {
    opacity: 0.7;
}
 .fa-facebook {
  background: #3B5998;
  color: white;
}

.fa-twitter {
  background: #55ACEE;
  color:white;
}
.fa-linkedin {
  background: #007bb5;
  color: white;
}
.fa-instagram {
  background: #ff0099;
  color: white;
}

 @media (max-width:800px){
  nav{
    height:700px;
  }
  #Big {
    flex-direction:column;
  }  
  #down .Nav_list{
    padding-left:50px;
  } 
}
    `
  return (
    <div>
        <X>
        <nav>
          <br/>
           <div id='NavSub'>
            <ul>
                <li><NavLink to="/Academics" className="Nav_list">Men</NavLink></li>
                <li><NavLink to="/Faculty" className="Nav_list">Women</NavLink></li>
                <li><NavLink to="/Alumni" className="Nav_list">Kids</NavLink></li>
               
             </ul>
             </div>
           <hr/>
            <div id='Big'>
            <div className='Sub'>
              <ul>
                <li><NavLink to="" className="Nav_list"><h2>Passion</h2></NavLink></li>
                <li><NavLink to="/" className="Nav_list">About sales</NavLink></li>
                <li><NavLink to="/" className="Nav_list">Details about Brand</NavLink></li>
                <li><NavLink to="/" className="Nav_list">want to be a part</NavLink></li>
                </ul>
               </div>
               <div className='Sub'>
              <ul>
              <li><NavLink to="" className="Nav_list"><h2>Shop By</h2></NavLink></li>
                <li><NavLink to="/" className="Nav_list">Men</NavLink></li>
                <li><NavLink to="/" className="Nav_list">Women</NavLink></li>
                <li><NavLink to="/" className="Nav_list">Kids</NavLink></li>
                </ul>
               </div>
               <div className='Sub'>
              <ul>
              <li><NavLink to="" className="Nav_list"><h2>Contact</h2></NavLink></li>
              <div className='items'>
            <a href="https://www.facebook.com/prasadtechintelugu" className="fa fa-facebook"></a>
            <a href="https://twitter.com/iamprasadtech" className="fa fa-twitter"></a>
            <a href="https://www.instagram.com/prasadyoutuber/" className="fa fa-instagram"></a>
          </div>
              
                </ul>
               </div>
               <div className='Sub'>
               <ul>
              <li><NavLink to="" className="Nav_list"><h2>Help</h2></NavLink></li>
                <li><NavLink to="/" className="Nav_list">Track your order</NavLink></li>
                <li><NavLink to="/" className="Nav_list">Customer call</NavLink></li>
                <li><NavLink to="/" className="Nav_list">Return & Cancel</NavLink></li>
              
                </ul>
               </div>
            </div>
            <hr/>
             
            
        <div id='down'>
         <div className="Nav_list">
         <br/> Assessability   | Privacy policy  |  Terms of use  |  site Maps<br/><br/>

          © 2020 IIT Madras - All rights reserved
         <div className="right"> Website last updated on: 2023-02-22 20:07:06 PM</div> 
         </div>
        </div>
      </nav>
      
    </X>
    </div>
  )
}

export default Footer
