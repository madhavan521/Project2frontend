import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const DashboardTop = () => {
  const data = [
    {
      id: 1,
      name: "Revenue",
      icon: <AiOutlineArrowUp color="#28a745" size={24} />, // Green for Revenue
      amounts: 3000,
    },
    {
      id: 2,
      name: "Sales Return",
      icon: <AiOutlineArrowDown color="#dc3545" size={24} />, // Red for Sales Return
      amounts: 1500,
    },
    {
      id: 3,
      name: "Purchase",
      icon: <AiOutlineShoppingCart color="#ffc107" size={24} />, // Yellow for Purchase
      amounts: 2000,
    },
    {
      id: 4,
      name: "Income",
      icon: <AiOutlineUser color="#007bff" size={24} />, // Blue for Income
      amounts: 4000,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        {data.map((item) => (
          <div className="col-md-3 col-6 col-sm-6 mb-3" key={item.id}>
            <div className="card shadow-sm text-center py-3">
              <div className="d-flex justify-content-center align-items-center mb-2">
                {item.icon}
              </div>
              <h5>{item.name}</h5>
              <p className="d-flex justify-content-center align-items-center">
                <FaRupeeSign size={18} className="me-1" />
                <h5 className="mb-0">+{item.amounts}</h5>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardTop;
