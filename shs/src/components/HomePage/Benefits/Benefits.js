import React from "react";
import {Link} from'react-router-dom';
import iconOrderStatus from '../../../assets/images/icon-order-status64.png';


import "./Benefits.scss"

const Benefits = () => {
return (
    <div className="benefits">
    <div className="container_benefits">
     <div className="benefits_content">
    <Link to="/why-buy-from-us.html"><div className="benefits_block"><img src={iconOrderStatus}></img><span className="benefits_benefit"><span>Price Match Guarantee</span></span></div></Link>
     <Link to="/why-buy-from-us.html"><div className="benefits_block"><img src={iconOrderStatus}></img><span className="benefits_benefit"><span>24/7 Customer Support</span></span></div></Link>
     <Link to="/why-buy-from-us.html"><div className="benefits_block"><img src={iconOrderStatus}></img><span className="benefits_benefit"><span>Flexible Payment Options</span></span></div></Link>
     <Link to="/why-buy-from-us.html"><div className="benefits_block"><img src={iconOrderStatus}></img><span className="benefits_benefit"><span>Nationwide Delivery</span></span></div></Link>
     <Link to="/why-buy-from-us.html"><div className="benefits_block"><img src={iconOrderStatus}></img><span className="benefits_benefit"><span>In-Stock Items</span></span></div></Link>

     </div>
    </div>
 </div>
)
}

export default Benefits;