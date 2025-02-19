import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faChartLine, faCogs, faChartPie } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    title: "Real-time Inventory Tracking",
    description: "Gain instant visibility into your stock levels.",
    icon: faClipboardList,
  },
  {
    title: "Predictive Demand Forecasting",
    description: "Accurately anticipate future needs and avoid stockouts.",
    icon: faChartLine,
  },
  {
    title: "Automated Purchasing",
    description: "Streamline ordering and reduce manual effort.",
    icon: faCogs,
  },
  {
    title: "Data-driven Insights",
    description: "Analyze key metrics to identify areas for improvement.",
    icon: faChartPie,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-5">
      <div className="container">
        <h3 className="text-center text-black mb-5">
          Empowering You with Comprehensive Solutions
        </h3>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="card h-100 border-0 shadow">
                <div className="card-body text-center">
  
                  <FontAwesomeIcon icon={feature.icon} size="3x" style={{color:"#4B50A3"}} className="mb-3" />
                  <h4 className="card-title">{feature.title}</h4>
                  <p className="card-text text-muted">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
