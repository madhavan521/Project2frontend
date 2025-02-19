import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const AllFood = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://project2backend-vysf.onrender.com/api/food/get", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        })
        .then(res => res.json())
        .then(result => {
            const updatedProducts = result.map(product => {
                if (product.image && product.image.data && product.image.data.data) {
                    const base64String = btoa(
                        new Uint8Array(product.image.data.data)
                            .reduce((data, byte) => data + String.fromCharCode(byte), '')
                    );
                    return {
                        ...product,
                        image: `data:${product.image.contentType};base64,${base64String}`
                    };
                }
                return product;
            });

            setProducts(updatedProducts);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div className="container mt-3">
            <h2 className="text-center mb-2" style={{ color: "#4B50A3" }}>Food Products</h2>

            <div className="row">
                {products.length === 0 ? (
                    <div className="text-center mt-5">
                        <h5>No products available.</h5>
                    </div>
                ) : (
                    products.map((product) => (
                        <div key={product._id} className="col-md-4  col-lg-4 col-sm-12">
                            <div className="card "   style={{border:"2px solid #4B50A3"}}>
                                    <img
                                        src={product.image}
                                        className="card-image m-1"
                                        style={{ height: '140px'}}
                                        alt={product.name}
                                        style={{border:"2px solid #4B50A3"}}
                                    />
                                <div className="card-body">
                                    <span className="card-text"><strong style={{ color: "#4B50A3" }}>Name :</strong>{product.name}</span><br />
                                    <span className="card-text"> <strong style={{ color: "#4B50A3" }}>Description:</strong>{product.description}</span> <br></br>
                                    <span className="card-text"><strong style={{ color: "#4B50A3" }}>Category:</strong> {product.category}</span> <br />
                                    <span className="card-text"><strong style={{ color: "#4B50A3" }}>Price:</strong> $ {product.price}</span>
                                <br />
                                    <Link className='text-end'> <span className='loginButton' style={{height:"33px",fontSize:"12px"}}> View Details</span></Link> 
                                    {/* <button className='loginButton' style={{height:"36px"}}></button>*/}
</div> 
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AllFood;
