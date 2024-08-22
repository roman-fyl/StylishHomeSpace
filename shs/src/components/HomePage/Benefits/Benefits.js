import React from "react";
import iconOrderStatus from '../../../assets/images/icon-order-status64.png';


import "./Benefits.scss"

const Benefits = () => {
return (
    <div className="benefits">
    <div className="container_benefits">
     <div className="benefits_content">
    <a href="#"><div className="benefits_block"><img src={iconOrderStatus}></img><span className="benefits_benefit"><span>Price Match Guarantee</span></span></div></a>
     <a href="#"><div className="benefits_block"><img src={iconOrderStatus}></img><span className="benefits_benefit"><span>24/7 Customer Support</span></span></div></a>
     <a href="#"><div className="benefits_block"><img src={iconOrderStatus}></img><span className="benefits_benefit"><span>Flexible Payment Options</span></span></div></a>
     <a href="#"><div className="benefits_block"><img src={iconOrderStatus}></img><span className="benefits_benefit"><span>Nationwide Delivery</span></span></div></a>
     <a href="#"><div className="benefits_block"><img src={iconOrderStatus}></img><span className="benefits_benefit"><span>In-Stock Items</span></span></div></a>

     </div>
    </div>
 </div>
)
}

export default Benefits;