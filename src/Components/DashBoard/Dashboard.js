import React from "react";
import DashboardTop from "./DashboardTop";
import { Link } from "react-router-dom";
import { FaHome, FaClipboardList, FaBoxes, FaChartLine, FaShoppingCart } from "react-icons/fa";
import profile from './../../Asset/profile.png'

const Dashboard = () => {
  const data = [
    {
      name: "Sales Report",
      description: "View detailed sales analytics and reports",
      icon: <FaChartLine size={50} color="#28a745" />, 
      link: "/sales",
    },
    {
      name: "Total Orders",
      description: "Track all the orders placed",
      icon: <FaClipboardList size={50} color="#007bff" />, 
      link: "/order",
    },
    {
      name: "Top Products",
      description: "Analyze your best-performing products",
      icon: <FaShoppingCart size={50} color="#ffc107" />,
      link: "/product",
    },
    {
      name: "Stock Available",
      description: "Monitor stock levels and availability",
      icon: <FaBoxes size={50} color="#dc3545" />,
      link: "/instock",
    },
  ];

  return (
    <div className="container-fluid bg-grey">
      {/* Header Section */}
      <div className="row">
        <div className="col-6 mt-1">
          <h3 className="font-weight-bold text-dark ms-2">
            <Link to="/">
              <FaHome size="35px" color="#4B50A3" className="mx-2" />
            </Link>
            
            <span className="mt-2" style={{color:"#4B50A3"}}>DASHBOARD</span>
          </h3>
        </div>
        <div className="col-6 mt-1 d-flex justify-content-end align-items-center">
          <p>
            <img
              src={profile}
              width="35px"
              style={{ borderRadius: "40px" }}
              height="35px"
              alt="User Profile"
            />
            <span className="mx-2">Username</span>
          </p>
        </div>
        <hr style={{ color: "#4B50A3" }} height="100px" />
      </div>

      <div>
        <DashboardTop />
      </div>
      <hr />

      <div className="row my-2">
        {data.map((item, index) => (
          <div className="col-md-6 col-lg-6 mb-3" key={index}>
            <Link to={item.link} style={{ textDecoration: "none" }}>
              <div className="card text-center p-4 shadow-sm">
                <div>{item.icon}</div>
                <h5 className="mt-3 mb-1 text-dark">{item.name}</h5>
                <p className="text-muted">{item.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
