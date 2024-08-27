import React from "react";

import flashoffer1 from "../../../assets/images/Slides/flashoffer1.png";
import flashoffer2 from "../../../assets/images/Slides/flashoffer2.png";

import "./FlashOffers.scss";

const FlashOffers = () => {
return (
    <div className="main_flash_offers">
         <a href="#"><div className="flash_offer_block"><img src={flashoffer1}></img></div></a>
         <a href="#"><div className="flash_offer_block"><img src={flashoffer2}></img></div></a>

    </div>
)
}

export default FlashOffers;