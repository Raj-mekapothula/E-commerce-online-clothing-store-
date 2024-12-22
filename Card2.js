import React from 'react'
import styled from 'styled-components';
const Cards = () => {
    
const X=styled.div`

#main{
    margin-top:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
}
#main .sub img{
    height:250px;
    width:210px;
}
#main .sub p{
    font-size:20px;
}
@media (max-width:800px){
    #main{
        padding:0px 0px 0px 0px;
    }
    #main .sub img{
        height:200px;
        width:200px;
    }
    #main .sub p{
      padding-left:10px;
      font-size:18px;
    }
    #main .sub p:hover{
      height:20px;
      font-size:20px;
    }   
}
`
  return (
   <X>
   
     <div>
        
     <div id='main'>
     <div className="sub">
     <img src='https://images.unsplash.com/photo-1612215327100-60fc5c4d7938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxkN2UzV3B3aG96c3x8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60' alt='' />
            <p>20-30% OFF</p>
        </div>
        <div className="sub">
            <img src='https://images.unsplash.com/photo-1559127453-76e365460f0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHxkN2UzV3B3aG96c3x8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60' alt="" />
            <p>10-20% OFF</p>
        </div>
        <div className="sub">
            <img src='https://images.unsplash.com/photo-1597196526281-fe4861daa915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8SGR6aEY3SDNwYU18fGVufDB8fHx8fA%3D%3D&dpr=2&auto=format&fit=crop&w=294&h=294&q=60' alt=''  />
            <p>20-30% OFF</p>
        </div>
        <div className="sub">
            <img src='https://images.unsplash.com/photo-1542596768-97135a93857e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NjMxNDE1MzR8fGVufDB8fHx8fA%3D%3D&dpr=2&auto=format&fit=crop&w=294&h=294&q=60' alt=''  />
            <p>20-30% OFF</p>
        </div>
        <div className="sub">
            <img src='https://images.unsplash.com/photo-1643228262678-b485a82482c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MzM2MjA1Mnx8ZW58MHx8fHx8&dpr=2&auto=format&fit=crop&w=294&h=294&q=60' alt=''  />
            <p>20-30% OFF</p>
        </div>
        <div className="sub">
            <img src='https://images.unsplash.com/photo-1465172018141-c4e4fa823289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NjMxNDE1MzR8fGVufDB8fHx8fA%3D%3D&dpr=2&auto=format&fit=crop&w=126&h=147&q=60' alt=''  />
            <p>20-30% OFF</p>
        </div>
        <div className="sub">
            <img src='https://media.istockphoto.com/id/1246559208/photo/happy-attractive-young-woman-in-sunglasses-walking-in-the-city-playful-woman-wraps-herself.jpg?s=612x612&w=0&k=20&c=o9y2VT9fOgw20iFi98flmuAofDECk5qiD0GWIrj49e8=' alt=''  />
            <p>20-30% OFF</p>
        </div>
        <div className="sub">
            <img src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60' alt=''  />
            <p>20-30% OFF</p>
        </div>
        <div className="sub">
            <img src='https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60' alt=''  />
            <p>20-30% OFF</p>
        </div>
        <div className="sub">
            <img src='https://media.istockphoto.com/id/1324489178/photo/portrait-of-young-businesswoman.webp?b=1&s=170667a&w=0&k=20&c=sSUgpjFT2ngAnR6WV_FRvur6C16jqvGmJI8rT1IeY-4=' alt=''  />
            <p>20-30% OFF</p>
        </div>
        <div className="sub">
            <img src='https://media.istockphoto.com/id/888019354/photo/i-just-found-a-shopping-sale-close-by.jpg?s=612x612&w=0&k=20&c=3_KofEElEqwEkhSq6sJ6yzayi76t6fihgAMx3A1rKlE=' alt=''  />
            <p>20-30% OFF</p>
        </div>
        <div className="sub">
            <img src='https://media.istockphoto.com/id/917325078/photo/fashionable-woman-in-pink-dress-on-pink-background.jpg?s=612x612&w=0&k=20&c=a_eMQdQzemzovSL1SmgNOTGnQKOapTxz5nacRhq7KdU=' alt=''  />
            <p>20-30% OFF</p>
        </div>
       
      </div>
    </div>
   </X>
  )
}

export default Cards