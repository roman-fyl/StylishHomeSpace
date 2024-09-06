import React, {useEffect} from "react";
import {Link} from "react-router-dom";

import ProfileMain from "./ProfileMain";
import ProfileAddresses from "./ProfileAddresses";
import ProfileAffiliateProgram from './ProfileAffiliateProgram';
import ProfileLastVisitedItems from "./ProfileLastVisitedItems";
import ProfileLoyaltyPoints from "./ProfileLoyaltyPoints";
import ProfileOrderHistory from "./ProfileOrderHistory";
import ProfilePayments from './ProfilePayments';
import ProfileReturns from "./ProfileReturns";
import ProfileSubmittedTickets from './ProfileSubmittedTickets';
import ProfileWishlist from "./ProfileWishlist";

import "./Profile.scss";

const Profile = () => {
    
    useEffect(() => {
        document.title = 'My Account';
      }, []);

return (
    <div className="account_description"><h1>My Account</h1>
   <div className="account_content">
    {/* <ul className="account_quick_links">
                <li className="account_quick_link"><Link to="/my-profile.html">Profile Information</Link></li>
                <li className="account_quick_link"><Link to="/my-profile-address.html">Addresses</Link></li>
                <li className="account_quick_link"><Link to="/my-profile-payments.html">Payments</Link></li>
                <li className="account_quick_link"><Link to="/my-profile-order-history.html">Order History</Link></li>
                <li className="account_quick_link"><Link to="/order-tracking.html">Check Order Status</Link></li>
                <li className="account_quick_link"><Link to="/my-profile-returns.html">Returns</Link></li>
                <li className="account_quick_link"><Link to="/my-profile-wishlist.html">Wishlist</Link></li>
                <li className="account_quick_link"><Link to="/my-profile-last-visited-items.html">Last Visited Items</Link></li>
                <li className="account_quick_link"><Link to="/my-profile-loyalty.html">Loyalty Points</Link></li>
                <li className="account_quick_link"><Link to="/my-profile-affiliate.html">Affiliate Program</Link></li>
                <li className="account_quick_link"><Link to="/my-profile-submitted-tickets.html">Submitted Tickets</Link></li>
    </ul> */}
     <ul className="account_quick_links">
        <li className="account_quick_link">
          <a href="#profile-info">Profile Information</a>
        </li>
        <li className="account_quick_link">
          <a href="#profile-addresses">Addresses</a>
        </li>
        <li className="account_quick_link">
          <a href="#profile-payments">Payments</a>
        </li>
        <li className="account_quick_link">
          <a href="#profile-order-history">Order History</a>
        </li>
        <li className="account_quick_link">
          <a href="/order-tracking.html">Check Order Status</a>
        </li>
        <li className="account_quick_link">
          <a href="#profile-returns">Returns</a>
        </li>
        <li className="account_quick_link">
          <a href="#profile-wishlist">Wishlist</a>
        </li>
        <li className="account_quick_link">
          <a href="#profile-last-visited-items">Last Visited Items</a>
        </li>
        <li className="account_quick_link">
          <a href="#profile-loyalty-points">Loyalty Points</a>
        </li>
        <li className="account_quick_link">
          <a href="#profile-affiliate-program">Affiliate Program</a>
        </li>
        <li className="account_quick_link">
          <a href="#profile-submitted-tickets">Submitted Tickets</a>
        </li>
      </ul>
    <div className="account_content_main-block">
        <ProfileMain />
        <ProfileAddresses />
        <ProfileAffiliateProgram />
        <ProfileLastVisitedItems />
        <ProfileLoyaltyPoints />
        <ProfileOrderHistory />
        <ProfilePayments />
        <ProfileReturns />
        <ProfileSubmittedTickets />
        <ProfileWishlist />
    </div>
   </div>
    {/* <div>Logout</div> */}
    </div>
)
}

export default Profile;