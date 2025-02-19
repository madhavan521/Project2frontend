import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom' 
import toast from 'react-hot-toast';

const Login = () => {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const navigate =useNavigate()

  const handleManagerlogin = async (e) => {  
    e.preventDefault()
    const newdata = {  
        username,  
        password  
    };  
    try {  
        await fetch("https://project2backend-vysf.onrender.com/api/auth/manager/login", {  
            method: "POST",  
            headers: {  
                "Content-Type": "application/json"  
            },  
            body: JSON.stringify(newdata),  
            credentials: 'include' 
        })  
        .then(res => res.json())  
        .then(result => {  
           console.log(result)
            console.log("Login Successfully"); 
            toast.success("Login Successfully") 
        });  
       
        setTimeout(() => {  
            setUsername('');  
            setPassword(''); 
            navigate('/manager')
            window.location.reload()
             
        }, 2000);  
        
    } catch (err) {  
        console.error(err.message); 
        toast.error(err.message) 
    }  
  }

  const handleAdminlogin = async (e) => {  
    e.preventDefault()
    const newdata = {  
        username,  
        password  
    };  
    try {  
        await fetch("https://project2backend-vysf.onrender.com/api/auth/admin/login", {  
            method: "POST",  
            headers: {  
                "Content-Type": "application/json"  
            },  
            body: JSON.stringify(newdata),  
            credentials: 'include' 
        })  
        .then(res => res.json())  
        .then(result => {  
           console.log(result)
            console.log("Login Successfully"); 
            toast.success("Login Successfully") 
        });  
       
        setTimeout(() => {  
            setUsername('');  
            setPassword(''); 
            navigate('/admin')
            window.location.reload()
             
        }, 2000);  
        
    } catch (err) {  
        console.error(err.message); 
        toast.error(err.message) 
    }  
  }
  const handleStafflogin = async (e) => {  
    e.preventDefault()
    const newdata = {  
        username,  
        password  
    };  
    try {  
        await fetch("https://project2backend-vysf.onrender.com/api/auth/staff/login", {  
            method: "POST",  
            headers: {  
                "Content-Type": "application/json"  
            },  
            body: JSON.stringify(newdata),  
            credentials: 'include' 
        })  
        .then(res => res.json())  
        .then(result => {  
           console.log(result)
            console.log("Login Successfully");  
            toast.success("Login Successfully") 
        });  
       
        setTimeout(() => {  
            setUsername('');  
            setPassword(''); 
            navigate('/staff')
             
        }, 2000);  
        
    } catch (err) {  
        console.error(err.message);  
        toast.error(err.message)
    }  
  }



  return (
    <>

    <div className="container my-5 ">
      <div className="row  d-flex justify-content-center align-items-center">
        <div className="col-md-6  ">
          <div className="card shadow-lg p-4" style={{ borderRadius: '12px', backgroundColor: '#4B50A3', color: '#fff' }}>
            <h3 className="text-center mb-4">Login</h3>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                type="text"
                  value={username}
               onChange={(e)=>setUsername(e.target.value)}
               placeholder='Enter your Username'
               className='form-control'
                  required
                  style={{background:"hsl(239, 100.00%, 90.60%)"}}

                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  value={password}
               onChange={(e)=>setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Enter your password"
                  required
                  style={{background:"hsl(239, 100.00%, 90.60%)"}}
                />
              </div>
              <div className="row mt-3">
               <div className="col-4 text-center">
                <button type="submit" className="btn btn-warning loginButton" style={{fontSize:"13px"}}  onClick={handleManagerlogin}>Manager Login</button>  
                </div>
                <div className="col-4 text-center">
                <button type="submit" className="btn btn-warning loginButton" style={{fontSize:"13px"}} onClick={handleAdminlogin}>Admin Login</button>  
            </div>
                <div className="col-4 text-center">
                <button type="submit" className="btn btn-warning loginButton" style={{fontSize:"13px"}}  onClick={handleStafflogin}> Staff   Login</button>  
                </div>
               
            </div> 
            </form>
            <div className="text-center">
              <Link to='/forget' className="text-light d-block mb-2">Forgot Password?</Link>
              <Link to='/signup' className="text-decoration-none text-white">Create a new account
            </Link> </div>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default Login;
