import React, { useContext ,useState ,useEffect } from 'react';
import { FaUser } from 'react-icons/fa'; 
import { FaUtensils } from 'react-icons/fa'; 
import {Link} from 'react-router-dom'
import { AdminContext } from './Context/AdminContext';
import { StaffContext } from './Context/StaffContext';
import { ManagerContext } from './Context/ManagerContext';

const Navbar = () => {
  const [data ,setData]=useState("Profile")
  const [page,setPage]=useState('/')
  const [navigate ,setNavigate] =useState('/profile')

  const {admin}=useContext(AdminContext)
  const {staff} =useContext(StaffContext)
  const {manager} = useContext(ManagerContext)


  useEffect(() => {
    if (admin?.fullname == null && manager?.fullname == null && staff?.fullname ==null) {
      setData('Login');
      setNavigate('/login')
      setPage('/')
    } 
     else if (admin?.fullname == null && staff?.fullname ==null)
       {
    setPage('/manager'); 
    setData('Profile');
    setNavigate('/profile')
  } 
  else if (manager?.fullname == null && staff?.fullname ==null ) {
    setPage('/admin'); 
    setData('Profile');
    setNavigate('/profile')
    
  }
  else if (manager?.fullname == null && admin?.fullname ==null ) {
    setPage('/staff'); 
    setData('Profile');
    setNavigate('/profile')
    
  }
  
  else {  
      setData('Profile'); 
      setNavigate('/profile')
    }
  }, [manager, admin,staff]);

  return (
    <div className="container-fluid ">
      <div className="row align-items-center cardbg ">
        <div className="col-6 d-flex align-items-center my-4">
          <FaUtensils className="text-light me-2" size={30} />
         <Link to={page} className='text-decoration-none'><h3 className="text-light font-weight-bold m-0">Dineventory</h3>
       </Link>  </div>
        <div className="col-6 text-end d-flex justify-content-end align-items-center my-3">
          <Link  to={navigate} className='text-decoration-none'> <button className="loginButton">
       {data}
      </button></Link>        </div>
      </div> 
    </div>
  );
};

export default Navbar;
