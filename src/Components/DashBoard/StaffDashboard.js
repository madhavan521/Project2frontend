import React from "react";  
import { Link } from "react-router-dom";  
import { FaClipboardList, FaDollarSign, FaPlusCircle } from "react-icons/fa";  

const StaffDashboard = () => {  
  const data = [  
    {  
      name: "Food Products",  
      description: "View and manage food products",  
      icon: <FaClipboardList size={50} color="#ffc107" />,  
      link: "/food",  
    },  
     
    {  
      name: "Billings",  
      description: "Manage customer billings and payments",  
      icon: <FaDollarSign size={50} color="#28a745" />,  
      link: "/staff/billings",  
    },  
  ];  

  return (  
    <div className="container-fluid bg-grey">  
      {/* Header Section */}  
      <div className="row my-3">  
        <h4 className="text-center" style={{ color: "#4B50A3" }}>  
          STAFF DASHBOARD   
        </h4>  
      </div>  

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

export default StaffDashboard;