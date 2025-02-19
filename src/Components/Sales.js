import React from 'react'
import SalesOrder from './SalesPage/SalesOrder'
import SaleReport from './SalesPage/SalesReport'
import profile from '../Asset/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';
const Sales = () => {
    const Activity = [  
          {  
            "quantity": 3,  
            "username": "john_doe",  
            "time": "5 min ago"  
          },  
          {  
            "quantity": 1,  
            "username": "jane_smith",  
            "time": "10 min ago"  
          },  
          {  
            "quantity": 2,  
            "username": "alice_jones",  
            "time": "15 min ago"  
          },  
          {  
            "quantity": 5,  
            "username": "bob_brown",  
            "time": "20 min ago"  
          },  
          {  
            "quantity": 4,  
            "username": "charlie_white",  
            "time": "30 min ago"  
          },  
          {  
            "quantity": 1,  
            "username": "david_black",  
            "time": "45 min ago"  
          },  
          {  
            "quantity": 2,  
            "username": "eve_green",  
            "time": "1 hour ago"  
          },  
          {  
            "quantity": 6,  
            "username": "frank_yellow",  
            "time": "2 hours ago"  
          },  
        //   {  
        //     "quantity": 3,  
        //     "username": "grace_blue",  
        //     "time": "3 hours ago"  
        //   },  
        //   {  
        //     "quantity": 4,  
        //     "username": "hank_red",  
        //     "time": "4 hours ago"  
        //   }  
        ]  
        
        
          
                   
  return (
     <div className="container-fluid">
     <div className="row">
                    <h4 className=' ms-2 mt-1' style={{color:"#4B50A3"}}>  
           <FontAwesomeIcon icon={faArrowLeft} style={{color:"#4B50A3"}} />  
               <Link to='/dashboard' className='text-decoration-none' style={{color:"#4B50A3"}}>Back to Dashboard</Link>   
             </h4>
              </div>
        <div className="row">
            <div className="col-9">
            <SalesOrder />
            <SaleReport />

            </div>
            <div className="col-3 mt-2 ">
            <div className='card text-center'>
             <h3 className='my-2' style={{color:"#4B50A3"}}>Recent Activity</h3>
             {
                Activity.map(item=>
                <div className='' key={item.username}>
                <hr />
                <p>Product <span className='text-info'>{item.quantity} </span>Ordered</p>
              <p> <img src={profile} alt=""  width="35px"  height="35px" style={{borderRadius:"50px"}} />
                <span className='ms-2'>{item.username}</span>
               <span className='text-info ' style={{fontSize:"12px"}} > {item.time}</span>
               </p> 
                </div>)
             }
             </div> 
            </div>
        </div>
     </div>
  )
}

export default Sales
