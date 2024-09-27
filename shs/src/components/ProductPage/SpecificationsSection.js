import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import "./ProductPage.scss";

const SpecificationsSection = () => {


return (
<section className="product_category_part">
    <h3>Specifications</h3>
    <div className="item_specifications">
  <h4>Capacity:</h4>
  <ul>
    <li><span className="item_specification">Cooling BTUH (MAX):</span> <span className="item_specification_result">8000 Btu</span></li>
    <li><span className="item_specification">Dehumidification:</span> <span className="item_specification_result">2.1 pints/hour</span> <span>(Source: GE Appliances, Sylvane)</span></li>
  </ul>

  <h4>Power/Ratings:</h4>
  <ul>
    <li><span className="item_specification">CEER (Combined Energy Efficiency Ratio):</span> <span className="item_specification_result">11.4</span></li>
    <li><span className="item_specification">Cooling Amps:</span> <span className="item_specification_result">6.0 AHAM</span></li>
    <li><span className="item_specification">Cooling Watts:</span> <span className="item_specification_result">695W</span></li>
    <li><span className="item_specification">Voltage:</span> <span className="item_specification_result">115V</span> <span>(Source: Plessers.com)</span></li>
  </ul>

  <h4>Features:</h4>
  <ul>
    <li><span className="item_specification">Airflow (CFM) Roomside (Hi/Low):</span> <span className="item_specification_result">220/190</span></li>
    <li><span className="item_specification">Fan Speed Selections:</span> <span className="item_specification_result">3 Cooling, 3 Fan Only</span></li>
    <li><span className="item_specification">Filter Type:</span> <span className="item_specification_result">One Touch Lift-Out</span></li>
    <li><span className="item_specification">Louver Style:</span> <span className="item_specification_result">4-Way Adjustable</span></li>
    <li><span className="item_specification">Mounting Type:</span> <span className="item_specification_result">EZ Mount</span></li>
    <li><span className="item_specification">Plug Type:</span> <span className="item_specification_result">Parallel/NEMA 5-15</span></li>
    <li><span className="item_specification">Remote Control:</span> <span className="item_specification_result">Yes</span></li>
    <li><span className="item_specification">Thermostat Type:</span> <span className="item_specification_result">Electronic</span></li>
    <li><span className="item_specification">Vent/Air Exchange:</span> <span className="item_specification_result">Top Air Discharge</span></li>
    <li><span className="item_specification">Wi-Fi Connectivity:</span> <span className="item_specification_result">Built-in</span> <span>(Source: GE Appliances, Plessers.com)</span></li>
  </ul>

  <h4>Installation:</h4>
  <ul>
    <li><span className="item_specification">Chassis Type:</span> <span className="item_specification_result">Fixed</span></li>
    <li><span className="item_specification">Mounting Type:</span> <span className="item_specification_result">EZ Mount</span> <span>(Source: GE Appliances)</span></li>
  </ul>

  <h4>Physical Dimensions:</h4>
  <ul>
    <li><span className="item_specification">Overall Dimensions:</span></li>
    <ul>
      <li><span className="item_specification">Width:</span> <span className="item_specification_result">18 9/16 inches</span></li>
      <li><span className="item_specification">Height:</span> <span className="item_specification_result">12 5/8 inches</span></li>
      <li><span className="item_specification">Depth:</span> <span className="item_specification_result">15 5/16 inches</span></li>
      <li><span className="item_specification">Depth to Louvers:</span> <span className="item_specification_result">5 1/9 inches</span></li>
      <li><span className="item_specification">Grille Depth:</span> <span className="item_specification_result">1 1/8 inches</span></li>
    </ul>
    <li><span className="item_specification">Minimum/Maximum Window Opening Width:</span> <span className="item_specification_result">24 1/2 to 36 inches</span></li>
    <li><span className="item_specification">Minimum Window Opening Height:</span> <span className="item_specification_result">13 3/8 inches</span> <span>(Source: Plessers.com)</span></li>
  </ul>

  <h4>Additional Features:</h4>
  <ul>
    <li><span className="item_specification">Rotary Compressor:</span> <span className="item_specification_result">Yes</span></li>
    <li><span className="item_specification">Refrigerant Type:</span> <span className="item_specification_result">R-32</span></li>
    <li><span className="item_specification">Digital Time and Temp Display:</span> <span className="item_specification_result">Yes</span></li>
    <li><span className="item_specification">LCDI/AFCI Power Cord:</span> <span className="item_specification_result">Yes</span></li>
    <li><span className="item_specification">Power Cord Length:</span> <span className="item_specification_result">72 inches minimum</span> <span>(Source: Plessers.com, GE Appliances)</span></li>
  </ul>
</div>



</section>
)
}

export default SpecificationsSection;