import React, { useEffect, useState } from "react";
import styled from 'styled-components';
const Kids = () => {
   

    async function submit(e){
        e.preventDefault();
    }
  const X=styled.div
  `
#main{
    display:flex;
    flex-wrap:wrap;
    padding:10px 20px 10px 20px;
    justify-content:space-between;
}
#main .sub h2{
    padding-left:60px;
}

#main .sub p{
    font-size:20px;
    padding-left:30px;
    background-color:rgb(240, 76, 11);
    height:30px;
}

#main .sub img{
    height:200px;
    width:250px;
}
@media (max-width:800px){
    #main{
        padding:0px 0px 0px 0px;
    }
    #main .sub img{
        height:200px;
        width:190px;
    }
    #main .sub p{
      font-size:20px;
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
  
          <img src='https://media.istockphoto.com/id/1172643701/photo/oops-little-girl-laughing.jpg?s=612x612&w=0&k=20&c=HeDjvrH-rbJOMGuJW20QixtmGe9xZc4nTf-V411WjBo=' alt=''/>
          <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
      </div>
      <div className="sub">
    
          <img src='https://media.istockphoto.com/id/175622348/photo/boy-in-sunglasses-and-hat-eating-popsicle-outdoors.jpg?s=612x612&w=0&k=20&c=qV8o1QnJdsU39-VFv-vxamiCvJj1Yc0PuPx1EVKI3Cs=' alt=""/>
          <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
      </div>
      <div className="sub">
       
          <img src='https://media.istockphoto.com/id/1268132702/photo/cute-baby-girl-with-barefoot-jumping-on-pink-background.jpg?s=612x612&w=0&k=20&c=ybcr6Ip4fy1xF86bmX44PR6U3AXMucm2Bm3u-0zpaVU=' alt=""/>
          <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
      </div>
      <div className="sub">
       
       <img src='https://media.istockphoto.com/id/1152823482/photo/stylish-child-smiling-and-dancing.jpg?s=612x612&w=0&k=20&c=k9Z2ikG2dtlgMVOhoZefUyD_WeIbL5cSMatfEFCnLHo=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/1268132702/photo/cute-baby-girl-with-barefoot-jumping-on-pink-background.jpg?s=612x612&w=0&k=20&c=ybcr6Ip4fy1xF86bmX44PR6U3AXMucm2Bm3u-0zpaVU=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/1285135728/photo/funny-girl-on-pink-background.jpg?s=612x612&w=0&k=20&c=ZFDTGJ-epYplVqVHivUs9MiIJjoj6-iU-DXN6nijFMw=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/1168369629/photo/happy-smiling-african-american-child-girl-yellow-background.jpg?s=612x612&w=0&k=20&c=qNP1LnRN6n_pGDBkD3axUdh1V1R53pdWWymHAhgNZag=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/1199587763/photo/flay-lay-of-blue-baby-bodysuit-for-baby-boy-isolated-on-blue-colored-background-baby-shower.jpg?s=612x612&w=0&k=20&c=QSTBbl8fk5w_UtHvzjovgUMFUz-Q_dSFuuuUW7Z7P1Y=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/1282800509/photo/set-of-casual-child-clothes-shoes-and-accessories-on-white-background-fashion-girl-lookbook.jpg?s=612x612&w=0&k=20&c=1QfbGB9e_qYf2bQoLMiyQj8x3M_omM6vOn7_I4aUMPw=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/1292020946/photo/happy-smiling-child-girl-stock-photo.jpg?s=612x612&w=0&k=20&c=vFPyeqg46xfUYoLdi-g9IxOWLt6r5Lxhe9P-Dfmh8u8=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/1372481295/photo/photo-of-school-boy-wear-yellow-t-shirt-backpack-in-background-stock-photo.jpg?s=612x612&w=0&k=20&c=lRsVHozgtzpj9W6ZjEW2g2qTkh4iV4BLePFgvUt7kvE=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/941782244/photo/portrait-of-a-young-school-boy-smiling.jpg?s=612x612&w=0&k=20&c=aUC2sBPiNAHNItWWrAZ1scbwEmcSxBgptte9BXkOJfA=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/1330549227/photo/asian-little-boy-looking-at-camera.jpg?s=612x612&w=0&k=20&c=fIE6lrxv_coArkDtBIstVaSaQesLWrA6j-o26A21IsY=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/900966134/photo/schoolboy-uses-smart-phone-before-getting-on-school-bus.jpg?s=612x612&w=0&k=20&c=e1ZIfv6uEOGW-DzPt5fpbcmcscE-5eVQ3T_3t_OzbqM=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/971351054/photo/portrait-of-a-young-school-boy.jpg?s=612x612&w=0&k=20&c=Fg7oMfQ5eh-3J14YsYRZ1OPIawyWgKUSmTAQokb6yak=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/1331443925/photo/addicted-to-smartphone-teenage-girl-looks-at-display-on-move.jpg?s=612x612&w=0&k=20&c=wg3CCDe77v6iyjuE3DQ9Vj2rjtyZaqkksGr726FfcFI=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/1189156001/photo/portrait-of-cute-child-with-down-syndrome.jpg?s=612x612&w=0&k=20&c=LkPW11ryEVmEMNuHQR6R3kZaNNsDuvjn3d28TMhBvRM=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/675576370/photo/portrait-of-little-girl-in-outdoors.jpg?s=612x612&w=0&k=20&c=EpsV4BxbwUy0PQWdyvdQqqoBIVvnnseazUJCj1ZEYrM=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/838486626/photo/japanese-boy-enjoying-bridges-view.jpg?s=612x612&w=0&k=20&c=t-w_HtdPRyMHkX1tWABGSa-VaLHiCyV_MFUKss1RPlw=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/673612828/photo/happy-cute-boy-leaning-wall-of-building-and-perspective-way-background.jpg?s=612x612&w=0&k=20&c=tCqoGgvxKKyJre84Txu662dv640kg6IYEikhfa29Ekk=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/1287249543/photo/portrait-of-a-young-taiwanese-boy-looking-at-camera.jpg?s=612x612&w=0&k=20&c=_veYHjeFfXABc6vEN_zIOH0I2qLc9ybEj82RG9n5GmY=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/159027747/photo/childrens-jacket-on-a-white-isolated-background.jpg?s=612x612&w=0&k=20&c=N8mdEv0axpDySXq2ZtsdrH2Z1kqlpZ6lhJeELFyf9tM=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/603262602/photo/clothing-from-baby-with-teddy.jpg?s=612x612&w=0&k=20&c=_tIITvjIoWHXYXIHyPMZ87ULgEoJ8tY_wy7Z0WTATrs=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/1159784233/photo/childrens-clothing-shirt-and-pants-on-white-background.jpg?s=612x612&w=0&k=20&c=seyZPPRBji_vti5xXNa_uv8x8kW5Z3PxWsv7Q-E4CNg=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/1253264009/photo/cute-mixed-race-baby-lying-on-examination-table.jpg?s=612x612&w=0&k=20&c=MqoyNMBa4fdOI1ZkHp9S28xhb1eb2lijRQPKLPw969c=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/1142258722/photo/little-girl-in-a-rabbit-costume-with-a-basket-of-easter-eggs.jpg?s=612x612&w=0&k=20&c=Wq4y5FqHaVHHzZFDzsH0bP4EhMNRyYg0so0FczoyxRw=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/1356509890/photo/shot-of-an-adorable-little-girl-sitting-on-her-bed-and-bonding-with-her-pet-rabbit-at-home.jpg?s=612x612&w=0&k=20&c=eI-gbRcR5APhlycwH-wrpjng-V8RquEemZFZfPbw9iE=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/622539992/photo/baby-bodysuit-with-pattern-isolated-on-white.jpg?s=612x612&w=0&k=20&c=J33texOBnaInh21hbrdP3GRNJ5D2hjSBh9-mA8CRc1w=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/878239636/photo/set-of-stylish-clothes-for-toddler-boy.jpg?s=612x612&w=0&k=20&c=rn9nj1fa7tji8de8DRRfmKsF4fii16Nie5LN2kBfJU0=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/841589640/photo/childrens-jeans-and-sweater-isolated.jpg?s=612x612&w=0&k=20&c=at1SK6v4VYDJ-Kp8nEzmmhFswCWVYqXYjjDNhblGVgg=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/845775304/photo/new-knitted-hooded-sweater-for-girl.jpg?s=612x612&w=0&k=20&c=9hugIzaDATt0WLQXo3mgIGVIRGJzCjucU5KrVsFvYbE=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/541610808/photo/baby-clothes-accessories-with-bear-toy-on-a-wooden-background.jpg?s=612x612&w=0&k=20&c=OR-8V6f0SRfO_klNe549uX7RlBqRzjns9IsWaPSHrq0=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/878229608/photo/little-girl-in-the-bedroom-is-naughty.jpg?s=612x612&w=0&k=20&c=ydIqYQpo4JfN6ua5p5uWOUkb4WIeQ70IvICprMgaMHc=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/501211051/photo/childrens-wear.jpg?s=612x612&w=0&k=20&c=vrpvF59J5TXXxq4MSHp7dBzC6Czb5cjk2Fp0PhO6Gwk=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
   <div className="sub">
       
       <img src='https://media.istockphoto.com/id/1168369629/photo/happy-smiling-african-american-child-girl-yellow-background.jpg?s=612x612&w=0&k=20&c=qNP1LnRN6n_pGDBkD3axUdh1V1R53pdWWymHAhgNZag=' alt=""/>
       <p1><br/>Kurthi<br/>
          Price-Rs 650<br/>
          </p1>
       <p>Add to cart</p>
   </div>
  
  
    </div>
  </div>
 </X>
   
  )
}

export default Kids
