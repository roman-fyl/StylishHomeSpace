import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashBoardLayout from './DashBoardLayout';
import ProductsManagement from './ProductsManagement';
import DashBoardHome from './DashBoardHome';
import EditItem from "./EditItem";
import EditRebate from "./EditRebate";

import RebatesManagement from './RebatesManagement';
import "./DashBoard.scss";

const DashBoard = () => {
  return (
    <Routes>
      {/* Layout wraps all routes under /dashboard */}
      <Route path="/" element={<DashBoardLayout />}>
        {/* Define nested routes */}
        <Route index element={<DashBoardHome />} /> {/* Default route */}
        <Route path="products" element={<ProductsManagement />} />
        <Route path="/edit-item/:idN" element={<EditItem />} />
        <Route path="/edit-rebate/:idN" element={<EditRebate />} />
        <Route path="orders" element={<h1>Orders Management</h1>} />
        <Route path="rebates" element={<RebatesManagement />} />
        <Route path="users" element={<h1>Users Management</h1>} />
        <Route path="inventory" element={<h1>Inventory</h1>} />
        <Route path="support" element={<h1>Support Page</h1>} />
      </Route>
    </Routes>
  );
};

export default DashBoard;
