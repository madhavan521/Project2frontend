import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import {Link, useNavigate} from 'react-router-dom' 
import toast from 'react-hot-toast';

const Signup = () => {


  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('') 

  const [fullname ,setFullname]=useState('')
  const [email,setEmail]=useState('')
  const [login,setLogin]=useState()
  const navigate = useNavigate()

  const handleManagersignup= async (e) => {  
    e.preventDefault()
    const newdata = {  
     username,  
     password,
     fullname,
     email,
    };  
    try {  
     await fetch("https://project2backend-vysf.onrender.com/api/auth/manager/signup", {  
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
         console.log("signupSuccessfully"); 
         toast.success("Account Created Successfully")
     });  
    
     setTimeout(() => {  
         setUsername('');  
         setPassword(''); 
         setFullname('');
         setEmail('');
         navigate('/login')
     }, 2000);  
     
    } catch (err) {  
     console.error(err.message); 
     console.log(err) 
     toast.error(err.message)
    }  
    }

const handleAdminsignup= async (e) => {  
e.preventDefault()
const newdata = {  
 username,  
 password,
 fullname,
 email,
};  
try {  
 await fetch("https://project2backend-vysf.onrender.com/api/auth/admin/signup", {  
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
     console.log("signupSuccessfully"); 
     toast.success("Account Created Successfully")
 });  

 setTimeout(() => {  
     setUsername('');  
     setPassword(''); 
     setFullname('');
     setEmail('');
     navigate('/login')
 }, 2000);  
 
} catch (err) {  
 console.error(err.message); 
 console.log(err) 
 toast.error(err.message)
}  
}
const handleStaffsignup= async (e) => {  
e.preventDefault()
const newdata = {  
 username,  
 password,
 fullname,
 email,
};  
try {  
 await fetch("https://project2backend-vysf.onrender.com/api/auth/staff/signup", {  
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
     console.log("signupSuccessfully");  
     toast.success("Account Created Successfully")

 });  

 setTimeout(() => {  
     setUsername('');  
     setPassword(''); 
     setFullname('');
     setEmail('');
     navigate('/login')
      
 }, 2000);  
 
} catch (err) {  
 console.error(err.message); 
 console.log(err) 
 toast.error(err.message)
}  
}
  return (
    <>
    <div className="container my-5">
      <div className="row d-flex justify-content-center align-items-center ">
        <div className="col-md-6">
          <div className="card shadow-lg p-4" style={{ borderRadius: '12px', backgroundColor: '#4B50A3', color: '#fff' }}>
         <h3 className="text-center mb-4">Sign Up</h3>
            <form>
            <label  >Username</label>  
              <input type="text" value={username}
              onChange={(e)=>setUsername(e.target.value)} 
              placeholder='Enter your Username'className='input-form form-control'
              style={{background:"hsl(239, 100.00%, 90.60%)"}}
            

              />  

        {/* fullname */}
              <label >Fullname</label>  
              <input type="text" value={fullname} 
              placeholder='Enter your Fullname' 
                                style={{background:"hsl(239, 100.00%, 90.60%)"}}

              onChange={(e)=>setFullname(e.target.value)} className='input-form form-control' />  
        {/* email */}
               <label  >Email</label>  
              <input type="text" value={email}
              placeholder='Enter your Email'
                                style={{background:"hsl(239, 100.00%, 90.60%)"}}

              onChange={(e)=>setEmail(e.target.value)} className='input-form form-control' />
        {/* Password*/}
              <label >Password</label>  
              <input type="password"  value={password}  
              onChange={(e)=>setPassword(e.target.value)}
                                style={{background:"hsl(239, 100.00%, 90.60%)"}}

              placeholder='Enter your Password' className='input-form form-control' />  
            <div className="row mt-3">
            <div className="col-4 text-center">
                <button type="submit" className="btn btn-warning loginButton" onClick={handleManagersignup}> Manager Signup</button>  
                </div>
                <div className="col-4 text-center">
                <button type="submit" className="btn btn-warning loginButton" onClick={handleAdminsignup}>Admin Signup</button>  
            </div>
                <div className="col-4 text-center">
                <button type="submit" className="btn btn-warning loginButton" onClick={handleStaffsignup}>StaffS   Signup</button>  
                </div>
            </div> 
            </form>
            <div className="text-center">
            <Link to='/login' className="text-decoration-none text-white   ">  <p className="mb-2">Already have an account?</p>
             </Link> 
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default Signup;
