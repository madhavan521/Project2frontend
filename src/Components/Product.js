import React from "react";
import productitem from './../Asset/productitem.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 

const Product = () => {
  // Sample product data
  const products = [
    {
      id: 101,
      name: "Fresh Apples",
      supplierName: "Fruit Supplier Co.",
      stockAvailable: 30,
    },
    {
      id: 102,
      name: "Whole Wheat Bread",
      supplierName: "Bakery Supplies Ltd.",
      stockAvailable: 15,
    },
    {
      id: 103,
      name: "Organic Milk",
      supplierName: "Dairy Farm Inc.",
      stockAvailable: 8,
    },
    {
      id: 104,
      name: "Brown Rice",
      supplierName: "Grain Distributors Ltd.",
      stockAvailable: 50,
    },
    {
      id: 105,
      name: "Almond Butter",
      supplierName: "NutriFoods Ltd.",
      stockAvailable: 20,
    },
    {
      id: 106,
      name: "Cheddar Cheese",
      supplierName: "Dairy Farm Inc.",
      stockAvailable: 12,
    },
    {
      id: 107,
      name: "Orange Juice",
      supplierName: "Citrus Suppliers Ltd.",
      stockAvailable: 40,
    },
    {
      id: 108,
      name: "Tomato Sauce",
      supplierName: "Kitchen Essentials Ltd.",
      stockAvailable: 25,
    },
    {
      id: 109,
      name: "Spaghetti Pasta",
      supplierName: "Grain Distributors Ltd.",
      stockAvailable: 35,
    },
    {
      id: 110,
      name: "Greek Yogurt",
      supplierName: "Dairy Delights Co.",
      stockAvailable: 18,
    },
    {
      id: 111,
      name: "Honey",
      supplierName: "Bee Supplies Co.",
      stockAvailable: 22,
    },
    {
      id: 112,
      name: "Granola Bars",
      supplierName: "Healthy Snacks Ltd.",
      stockAvailable: 50,
    },
    {
      id: 113,
      name: "Green Tea",
      supplierName: "Tea Traders Ltd.",
      stockAvailable: 100,
    },
    {
      id: 114,
      name: "Cashews",
      supplierName: "NutriFoods Ltd.",
      stockAvailable: 15,
    },
    {
      id: 115,
      name: "Canned Beans",
      supplierName: "Pantry Essentials Ltd.",
      stockAvailable: 60,
    },
    {
      id: 116,
      name: "Potato Chips",
      supplierName: "Snacks World Co.",
      stockAvailable: 80,
    },
    {
      id: 117,
      name: "Butter",
      supplierName: "Dairy Delights Co.",
      stockAvailable: 25,
    },
  ];
  

  return (
    <>
    <div className="row">
                                <h4 className='text-primary ms-2 mt-1' style={{color:"#4B50A3"}}>  
                       <FontAwesomeIcon icon={faArrowLeft} style={{color:"#4B50A3"}}  />  
                           <Link to='/dashboard' className="text-decoration-none" style={{color:"#4B50A3"}}>Back to Dashboard</Link>   
                         </h4>
                          </div>
    <div className="conatiner-fluid card mt-2">
        <div className="row ">
        <h4 className="text-center" style={{color:"#4B50A3"}}>Top Products</h4>
            {
                products.map(item=>
                <div key={item.id} className="col-3  my-1">
                <div className="card"><span className="d-flex align-item-center justify-content-center">
                <img src={productitem} alt="" style={{borderRadius:"20px"}} className="card-image m-2" width="130px" height="140px" />
               </span>
               <h5 className="text-center">{item.name}</h5>
               <p className="text-center">{item.supplierName}</p>
             <p className="text-end me-3"> <Link className="text-decoration-none" to='/Individualproduct'>view detials</Link> </p> 
                 </div>

                </div>
                )
                          }
        </div>
    </div>
   </>
  );
};

export default Product;
