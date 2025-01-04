import React, { useEffect } from "react";
import "./DashBoard.scss";

const DashBoardHome = () => {
  useEffect(() => {
    document.title = 'Dashboard Home';
  }, []);

  return (
    <div className="admin_content">
      <h1>Welcome to the Dashboard</h1>
      <ul className="admin_analytics">
    <li>Sales:</li>
    <li>Orders:</li>
    <li>Products:</li>
      </ul>
    </div>
  );
};

export default DashBoardHome;
