import React from "react";
import profile from "../Asset/profile.png";
import productitem from '../Asset/productitem.png'

const IndividualProduct = () => {
  const productDetails = {
    name: "Maggi",
    id: "456567",
    category: "Instant Food",
    expiryDate: "13/04/2023",
    threshold: 12,
    openingStock: 40,
    remainingStock: 34,
    onTheWay: 15,
  };

  const supplierDetails = {
    name: "Ronald Martin",
    contact: "98789 86757",
  };

  const stockLocations = [
    { storeName: "Sulur Branch", stockInHand: 15 },
    { storeName: "Singanallur Branch", stockInHand: 19 },
  ];

  return (
    <div className="container-fluid p-4">
      <div className="card shadow-sm p-4">
        <div className="row align-items-center">
          <div className="col-6">
            <h4 className="" style={{color:"#4B50A3"}}>Product Details</h4>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-end align-items-center">
              <button className="btn  mx-2" style={{background:"#4B50A3"}}>Edit</button>
              <button className="btn btn-secondary mx-2">Download</button>
              <div className="d-flex align-items-center">
                <img
                  src={profile}
                  width="40"
                  height="40"
                  alt="User"
                  className="rounded-circle"
                />
                <span className="ms-2 fw-bold">Username</span>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="mb-4">
          <nav className="nav">
            <a className="nav-link active " style={{color:"#4B50A3"}} href="#">
              Overview
            </a>
            <a className="nav-link text-secondary" href="#">
              Purchases
            </a>
            <a className="nav-link text-secondary" href="#">
              Adjustments
            </a>
            <a className="nav-link text-secondary" href="#">
              History
            </a>
          </nav>
        </div>

        <div className="row">
          <div className="col-8">
            <h5 className="mb-3" style={{color:"#4B50A3"}}>Overview</h5>
            <ul className="list-group mb-4">
              <li className="list-group-item">
                <strong>Product Name:</strong> {productDetails.name}
              </li>
              <li className="list-group-item">
                <strong>Product ID:</strong> {productDetails.id}
              </li>
              <li className="list-group-item">
                <strong>Category:</strong> {productDetails.category}
              </li>
              <li className="list-group-item">
                <strong>Expiry Date:</strong> {productDetails.expiryDate}
              </li>
            </ul>
          </div>
          <div className="col-4">
          <div className="d-flex align-item-center justify-content-center">
          <img src={productitem} alt=""  style={{borderRadius:"20px"}} width="100px" height="100px"/>
         
</div> 
<div className="my-3">
              <p className="text-center">Product Name</p>
              <p className="mt-2 text-center">Opening Stocks :<span className="" style={{color:"#4b50a3"}}>66</span></p>
              <p className="mt-2 text-center">On The Way :<span className="" style={{color:"#4b50a3"}}>134</span></p>

              <p className="mt-2 text-center">Stock Avalible :<span className="" style={{color:"#4b50a3"}}>34</span></p>
              <p></p>
              <p></p>
              <p></p>

</div>
          </div>
        </div>

       
        <div className="row">
          <div className="col-8">
            <h5 className=" mb-3" style={{color:"#4B50A3"}}>Stock Information</h5>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Threshold Value:</strong> {productDetails.threshold}
              </li>
              <li className="list-group-item">
                <strong>Opening Stock:</strong> {productDetails.openingStock}
              </li>
              <li className="list-group-item">
                <strong>Remaining Stock:</strong> {productDetails.remainingStock}
              </li>
              <li className="list-group-item">
                <strong>On the Way:</strong> {productDetails.onTheWay}
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-8">
            <h5 className=" mb-3" style={{color:"#4B50A3"}}>Supplier Details</h5>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Supplier Name:</strong> {supplierDetails.name}
              </li>
              <li className="list-group-item">
                <strong>Contact Number:</strong> {supplierDetails.contact}
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-8">
            <h5 className=" mb-3" style={{color:"#4B50A3"}}>Stock Locations</h5>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Store Name</th>
                  <th>Stock in Hand</th>
                </tr>
              </thead>
              <tbody>
                {stockLocations.map((location, index) => (
                  <tr key={index}>
                    <td>{location.storeName}</td>
                    <td>{location.stockInHand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;
