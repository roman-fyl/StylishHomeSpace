import React from "react";

import Banner_1 from "./Banner_1"
import Banner_2 from "./Banner_2"
import Banner_3 from "./Banner_3"

import "./BannersGroup.scss";

const BannersGroup = () => {
return (
    <div className="main_banner">
<Banner_1 />
<Banner_2 />
<Banner_3 />
   </div>
)
}

export default BannersGroup;