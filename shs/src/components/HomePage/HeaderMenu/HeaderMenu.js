import React, {useState, useEffect} from "react";
import "./HeaderMenu.scss";

const HeaderMenu = () => {
     useEffect(() => {
          document.title = 'Stylish Home Space';
        }, []);

return (
     <nav>
           <div className="container">
           <ul className="header_menu">
                <li><a href="#">NEW</a></li>
                <li><a href="/category.html">ITEM</a></li>
                <li><a href="#">ITEM</a></li>
                <li><a href="#">ITEM</a></li>
                <li><a href="#">ITEM</a></li>
                <li><a href="#">ITEM</a></li>
                <li><a href="#">ITEM</a></li>
                <li><a href="#">ITEM</a></li>
                <li><a href="#">Rebates</a></li>
            </ul>
           </div>
        </nav>     
)
}

export default HeaderMenu;