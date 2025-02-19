import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import toast from "react-hot-toast";

const VendorProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [vendorName, setVendorName] = useState('');
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        const fetchVendors = async () => {
            try {
                const response = await fetch("https://project2backend-vysf.onrender.com/api/vendor/get", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                });
                if (!response.ok) throw new Error("Network response was not ok");
                const result = await response.json();
                setVendors(result);
            } catch (err) {
                console.error(err);
                toast.error("Error fetching vendors");
            }
        };
        fetchVendors();
    }, []);

    const handleProducts = async (e) => {
        e.preventDefault();
        if (!vendorName) {
            toast.error("Please select a vendor");
            return;
        }
        const product = {
            vendorName,
            vendorProduct: name,
            price: isNaN(parseFloat(price)) ? 0 : parseFloat(price) 
        };
        console.log("Sending product data:", product);

        try {
            const response = await fetch("https://project2backend-vysf.onrender.com/api/vendor/product/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(product),
            });
            if (!response.ok) {
                const errorDetails = await response.json();
                throw new Error(errorDetails.message || "Failed to add product");
            }
            toast.success("Product added successfully");
            setName('');
            setPrice(0);
            setVendorName('');
        } catch (err) {
            console.error(err);
            toast.error(err.message || "Error adding product");
        }
    };

    return (
        <div className="container mt-4 d-flex justify-content-center">
            <div className="card p-5 shadow-lg" style={{ maxWidth: "600px", borderRadius: "15px" }}>
                <h2 className="text-primary text-center">Add Vendor Product</h2>
                <form className="mt-4" onSubmit={handleProducts}>
                    <div className="mb-3">
                        <label className="form-label">Vendor Name</label>
                        <select
                            className="form-control"
                            name="vendorName"
                            value={vendorName}
                            onChange={(e) => setVendorName(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select Vendor</option>
                            {vendors.length === 0 ? (
                                <option disabled>No vendors available</option>
                            ) : (
                                vendors.map((vendor) => (
                                    <option key={vendor._id} value={vendor.vendorName}>
                                        {vendor.vendorName}
                                    </option>
                                ))
                            )}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                            min="0"
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 loginButton">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default VendorProduct;
