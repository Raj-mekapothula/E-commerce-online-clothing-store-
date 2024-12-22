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
        padding-left:20px;
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
     <img src='https://images.unsplash.com/photo-1609661009718-8217cc175d76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8OTQ0MzE4Mnx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60' alt='' />
            <p>20-30% OFF</p>
        </div>
        <div className="sub">
            <img src='https://images.unsplash.com/photo-1482501157762-56897a411e05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhc2hpb24lMjBicmFuZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60' alt="" />
            <p>10-20% OFF</p>
        </div>
        <div className="sub">
            <img src='https://images.unsplash.com/photo-1627954404626-b7fc1c66e53f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NDQzMTgyfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60' alt=''  />
            <p>20-30% OFF</p>
        </div>
        <div className="sub">
            <img src='https://images.unsplash.com/photo-1525457136159-8878648a7ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGphY2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60' alt=''  />
            <p>20-30% OFF</p>
        </div>
        <div className="sub">
            <img src='https://images.unsplash.com/photo-1587568763847-9f1ca55775cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8OTQ0MzE4Mnx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60' alt=''  />
            <p>20-30% OFF</p>
        </div>
        <div className="sub">
            <img src='https://images.unsplash.com/photo-1641935416268-98de86ac9c3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw5NDQzMTgyfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60' alt=''  />
            <p>20-30% OFF</p>
        </div>
        <div className="sub">
            <img src='https://images.unsplash.com/photo-1592932033401-7e2257e26fdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8OTQ0MzE4Mnx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60' alt=''  />
            <p>20-30% OFF</p>
        </div>
        <div className="sub">
            <img src='https://images.unsplash.com/photo-1557418669-db3f781a58c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphY2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60' alt=''  />
            <p>20-30% OFF</p>
        </div>
        <div className="sub">
            <img src='https://images.unsplash.com/photo-1593757107729-eae8bcc74f8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8OTQ0MzE4Mnx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60' alt=''  />
            <p>20-30% OFF</p>
        </div>
        <div className="sub">
            <img src='https://images.unsplash.com/photo-1543341330-c9243d00afba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwzODgwNDgyfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60' alt=''  />
            <p>20-30% OFF</p>
        </div>
        <div className="sub">
            <img src='https://images.unsplash.com/photo-1599542829769-9ab0c324b4dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8OTQ0MzE4Mnx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60' alt=''  />
            <p>20-30% OFF</p>
        </div>
        <div className="sub">
            <img src='https://images.unsplash.com/photo-1520013225692-fff4010c0ae6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8OTQ0MzE4Mnx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60' alt=''  />
            <p>20-30% OFF</p>
        </div>
       
      </div>
    </div>
   </X>
  )
}

export default Cards