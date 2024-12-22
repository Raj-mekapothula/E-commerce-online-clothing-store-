import React from 'react'
import styled from 'styled-components';
const Cards = () => {
    
const X=styled.div`

#main{
    display:flex;
    flex-wrap:wrap;
    padding:10px 100px 10px 100px;
    justify-content:space-between;
}
#main .sub h2{
    padding-left:60px;
}
}
#main .sub p{
    font-size:20px;
    padding-left:60px;
}
#main .sub img{
    height:250px;
    width:350px;
}
@media (max-width:800px){
    #main .sub img{
       margin-left:-35px;
        height:250px;
        width:250px;
    }   
}
`
  return (
   <X>
   
     <div>
        
     <div id='main'> 
     <div className="sub">
     <p> Kids</p>
            <img src='https://media.istockphoto.com/id/1397185406/photo/portrait-of-woman-smiling-against-wall-with-palm-tree-shade.webp?b=1&s=170667a&w=0&k=20&c=JvQOX5ptSzgsb6mHtKU6L7DpEA4liqP1ub1M95pUB7E=' alt=''/>
            <p>20-30% OFF</p>
        </div>
        <div className="sub">
        <p>Men</p>
            <img src='https://media.istockphoto.com/id/658912662/photo/handsome-dude.webp?b=1&s=170667a&w=0&k=20&c=iVi4ZLENP-EB2HcbiGLEukO-vww31vmv_6kBnAAIYNQ=' alt=""/>
            <p>10-20% OFF</p>
        </div>
        <div className="sub">
            <p>Women</p>
            <img src='https://media.istockphoto.com/id/1176409033/photo/portrait-of-mixed-race-toddler-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=i_S-wg7FtblFdiLNqzBIyzh0cwqom47x78wcliUX6U4=' alt=""/>
            <p>20-30% OFF</p>
        </div>
      </div>
    </div>
   </X>
  )
}

export default Cards