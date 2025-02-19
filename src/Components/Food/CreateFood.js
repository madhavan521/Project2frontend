import React, { useState } from 'react';  
import toast from 'react-hot-toast';  
import 'bootstrap/dist/css/bootstrap.min.css';  

const CreateFood = () => {  
    const [name, setName] = useState('');  
    const [price, setPrice] = useState('');  
    const [description, setDescription] = useState('');  
    const [cuisine, setCuisine] = useState('');
    const [image, setImage] = useState(null);  
    const [category, setCategory] = useState('');   

    const handleSubmit = async (e) => {  
        e.preventDefault();  

        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("cuisine", cuisine);
        formData.append("category", category);
        formData.append("image", image);

        try {  
            fetch("https://project2backend-vysf.onrender.com/api/food/create", {  
                method: "POST",  
                credentials: 'include',  
                body: formData
            })
            .then(res => res.json())  
            .then(result => {
                console.log(result);
                toast.success("Food Product Added Successfully!");  
                
                setTimeout(() => {
                    setName('');  
                    setPrice('');  
                    setDescription('');  
                    setImage(null);  
                    setCategory(''); 
                    setCuisine('');    
                }, 500);
            });
        } catch (err) {  
            toast.error("An unexpected error occurred. Please try again later.");  
            console.error(err);  
        }  
    };  

    const handleFileChange = (e) => {  
        setImage(e.target.files[0]);  
    };  

    return (  
        <div className="container mt-5">  
            <div className="card p-4 shadow-lg">  
                <h2 className="mb-4 text-center" style={{ color: "#4B50A3" }}>Add Food Item</h2>  
                <form onSubmit={handleSubmit} encType="multipart/form-data">  
                    <div className="mb-3">  
                        <label htmlFor="productName" className="form-label">Product Name</label>  
                        <input  
                            type="text"  
                            className="form-control"  
                            id="productName"  
                            value={name}  
                            onChange={(e) => setName(e.target.value)}  
                            required  
                            placeholder="Enter product name" 
                        />  
                    </div>  
                    <div className="mb-3">  
                        <label htmlFor="category" className="form-label">Category</label>  
                        <select  
                            className="form-select" 
                            id="category"  
                            value={category}  
                            onChange={(e) => setCategory(e.target.value)}  
                            required  
                        >  
                            <option value="" disabled>Select Category</option>  
                            <option value='Starters'>Starters</option>  
                            <option value='Main Course'>Main Course</option>  
                            <option value='Desserts'>Desserts</option>  
                            <option value='Side Dish'>Side Dish</option> 
                        </select>   
                    </div>  
                    <div className="mb-3">  
                        <label htmlFor="cuisine" className="form-label">Cuisine</label>  
                        <select  
                            className="form-select" 
                            id="cuisine"  
                            value={cuisine}  
                            onChange={(e) => setCuisine(e.target.value)}  
                            required  
                        >  
                            <option value="" disabled>Select Cuisine</option>  
                            <option value='South Indian'>South Indian</option>  
                            <option value='North Indian'>North Indian</option>  
                            <option value='Chinese'>Chinese</option> 
                        </select>   
                    </div>
                    <div className="mb-3">  
                        <label htmlFor="price" className="form-label">Price ($)</label>  
                        <input  
                            type="number"  
                            className="form-control"  
                            id="price"  
                            value={price}  
                            onChange={(e) => setPrice(e.target.value)}  
                            required  
                            placeholder="Enter price" 
                        />  
                    </div>  
                    <div className="mb-3">  
                        <label htmlFor="description" className="form-label">Description</label>  
                        <textarea  
                            className="form-control"  
                            rows="3"  
                            id="description"  
                            value={description}  
                            onChange={(e) => setDescription(e.target.value)}  
                            required  
                            placeholder="Write a brief description..."  
                        />  
                    </div>  
                    <div className="mb-3">  
                        <label htmlFor="image" className="form-label">Image</label>  
                        <input  
                            type="file"  
                            className="form-control"  
                            id="image"  
                            accept="image/*"  
                            onChange={handleFileChange}  
                            required  
                        />  
                    </div>  
                    <div className="d-flex justify-content-center align-items-center mt-3">   
                        <button type="submit" className="btn btn-primary loginButton">Add Food Item</button>  
                    </div>  
                </form>  
            </div>  
        </div>  
    );  
};  

export default CreateFood;
