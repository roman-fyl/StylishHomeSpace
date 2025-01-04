import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./DashBoard.scss";

const DashBoardLayout = () => {
  return (
    <div className="admin">
      <div className="admin_container">
        {/* Admin menu (static across all tabs) */}
        <ul className="admin_menu">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/dashboard/products">Products</Link></li>
          <li><Link to="/dashboard/edit-item/:idN">Edit Item</Link></li>
          <li><Link to="/dashboard/edit-rebate/:idN">Edit Rebate</Link></li>
          <li><Link to="/dashboard/orders">Orders</Link></li>
          <li><Link to="/dashboard/rebates">Rebates</Link></li>
          <li><Link to="/dashboard/users">Users</Link></li>
          <li><Link to="/dashboard/inventory">Inventory</Link></li>
          <li><Link to="/dashboard/support">Support</Link></li>
        </ul>
        {/* Outlet renders the active route's component */}
          <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
