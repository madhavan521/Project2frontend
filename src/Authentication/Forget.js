import React, {useState } from 'react';  
import {Link} from 'react-router-dom' 
import toast from 'react-hot-toast';


const Forget = () => {  
       const [password,setPassword]=useState('')
       const [fullname ,setFullname]=useState('')
       const [email,setEmail]=useState('')
       

 
const handleManagerForget= async (e) => {  
  e.preventDefault()
  const newdata = {  
      password,
      fullname,
      email,
  
  };  
  try {  
      await fetch("https://project2backend-vysf.onrender.com/api/auth/manager/forget", {  
          method: "PUT",  
          headers: {  
              "Content-Type": "application/json"  
          },  
          body: JSON.stringify(newdata),  
          credentials: 'include' 
      })  
      .then(res => res.json())  
      .then(result => {  
         console.log(result)
         console.log("Password Updated"); 
         toast.success("Password Updated") 
      });  
     
      setTimeout(() => {  
          setPassword(''); 
          setFullname('');
          setEmail('');
     
           
      }, 2000);  
      
  } catch (err) {  
      console.error(err.message); 
      console.log(err) 
      toast.error(err.message)
  }  
}
const handleAdminForget= async (e) => {  
    e.preventDefault()
    const newdata = {  
        password,
        fullname,
        email,
    
    };  
    try {  
        await fetch("https://project2backend-vysf.onrender.com/api/auth/admin/forget", {  
            method: "PUT",  
            headers: {  
                "Content-Type": "application/json"  
            },  
            body: JSON.stringify(newdata),  
            credentials: 'include' 
        })  
        .then(res => res.json())  
        .then(result => {  
           console.log(result)
           console.log("Password Updated"); 
           toast.success("Password Updated") 
        });  
       
        setTimeout(() => {  
            setPassword(''); 
            setFullname('');
            setEmail('');
       
             
        }, 2000);  
        
    } catch (err) {  
        console.error(err.message); 
        console.log(err) 
        toast.error(err.message)
    }  
  }
const handleStaffForget= async (e) => {  
  e.preventDefault()
  const newdata = {  
      password,
      fullname,
      email,
  };  
  try {  
      await fetch("https://project2backend-vysf.onrender.com/api/auth/staff/forget", {  
          method: "PUT",  
          headers: {  
              "Content-Type": "application/json"  
          },  
          body: JSON.stringify(newdata),  
          credentials: 'include' 
      })  
      .then(res => res.json())  
      .then(result => {  
         console.log(result)
          console.log("Password Updated"); 
          toast.success("Password Updated") 
      });  
     
      setTimeout(() => {  
          setPassword(''); 
          setFullname('');
          setEmail('');

           
      }, 2000);  
      
  } catch (err) {  
      console.error(err.message); 
      console.log(err)
      toast.error(err.message) 
  }  
}


  return (  
   <div className="container my-5 ">
         <div className="row  d-flex justify-content-center align-items-center">
           <div className="col-md-6  ">
             <div className="card shadow-lg p-4" style={{ borderRadius: '12px', backgroundColor: '#4B50A3', color: '#fff' }}>
               <h3 className="text-center mb-4">Update Password</h3>
               <form>
                 <div className="form-group mb-3">
                   <label htmlFor="fullname" className="form-label">Fullname</label>
                   <input
                   type="text"
                     value={fullname}
                  onChange={(e)=>setFullname(e.target.value)}
                  placeholder='Enter your Fullname'
                  className='form-control'
                     required
                     style={{background:"hsl(239, 100.00%, 90.60%)"}}
   
                   />
                 </div>
                 <div className="form-group mb-3">
                   <label htmlFor="fullname" className="form-label">Email</label>
                   <input
                   type="text"
                     value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder='Enter your Email'
                  className='form-control'
                     required
                     style={{background:"hsl(239, 100.00%, 90.60%)"}}
   
                   />
                 </div>
                 <div className="form-group mb-3">
                   <label htmlFor="password" className="form-label">New Password</label>
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
                   <button type="submit" className="btn btn-warning loginButton"  onClick={handleManagerForget}>Update Manager </button>  
                   </div>
                   <div className="col-4 text-center">
                   <button type="submit" className="btn btn-warning loginButton" onClick={handleAdminForget}> Upadate Admin </button>  
               </div>
                   <div className="col-4 text-center">
                   <button type="submit" className="btn btn-warning loginButton"  onClick={handleStaffForget}>Update Staffs </button>  
                   </div>
                  
               </div> 
               </form>
               <div className="text-center mt-2">
                 <Link to='/login' className="text-decoration-none text-white"> ----Back to Login ---
               </Link> </div>
             </div>
           </div>
         </div>
       </div> 
  );  
}  

export default Forget