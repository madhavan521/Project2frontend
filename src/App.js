import React, { useContext,useState,useEffect } from 'react'
import {BrowserRouter,Route,Routes ,Navigate} from 'react-router-dom'
import Login from './Authentication/Login'
import Signup from './Authentication/Signup'
import Home from './Components/Home'
import Dashboard from './Components/DashBoard/Dashboard'
import Order from './Components/Order'
import Sales from './Components/Sales'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import IndividualProduct from './Components/IndividualProduct'
import ManagerDashboard from './Components/DashBoard/ManagerDashboard'
import StaffDashboard from './Components/DashBoard/StaffDashboard'
import AdminDashboard from './Components/DashBoard/AdminDashboard'
import Forget from './Authentication/Forget'
import { Toaster } from 'react-hot-toast'
import { AdminContext } from './Components/Context/AdminContext'
import { ManagerContext } from './Components/Context/ManagerContext'
import { StaffContext } from './Components/Context/StaffContext'
import AddStock from './Components/Stock/AddStock'
import AddVendor from './Components/Vendor/AddVendor'
import IndividualVendor from './Components/Vendor/IndividualVendor'
import AllVendor from './Components/Vendor/AllVendor'
import VendorProduct from './Components/Vendor/VendorProduct'
import EditVendor from './Components/Vendor/EditVendor'
import StockHistory from './Components/Stock/StockHistory'
import InStocks from './Components/Stock/InStocks'
import EditStock from './Components/Stock/EditStock'
import CreateFood from './Components/Food/CreateFood'
import AllFood from './Components/Food/AllFood'
import Profile from './Components/Profile'

const App = () => {
  const {admin} = useContext(AdminContext);
  const {manager} = useContext(ManagerContext);
  const {staff} =useContext(StaffContext)
  const [page, setPage] = useState('/');

    useEffect(() => {
      if (manager?.fullname == null && admin?.fullname == null && staff?.fullname == null) {
        setPage('/');
      } else if (manager?.fullname == null && admin?.fullname == null) {
        setPage('/staff'); 
      } else if ( admin?.fullname == null && staff?.fullname == null) {
        setPage('/manager'); 
      } 
     else if ( manager?.fullname == null && staff?.fullname == null) {
      setPage('/admin'); 
    }
      else {
        setPage('/'); 
      }
    }, [admin, manager]);
  return (
  <>
    <BrowserRouter>
    <Navbar />
    <Toaster position="top-center" reverseOrder={false} />
        <Routes>
        <Route  
  path={page}  
  element={  
    page === '/' ? (  
      <Home />  
    ) : page === '/admin' ? (  
      <AdminDashboard />  
    ) : page === '/manager' ? (  
      <ManagerDashboard />  
    ) : page === '/staff' ? (  
      <StaffDashboard />  
    ) : null  
  }  
/>
      <Route path='/login'   element={<Login />}   />
      <Route path='/signup' element={<Signup />} />
      <Route path='/forget' element={<Forget />} />
      <Route path='/manager' element={<ManagerDashboard />} />
      <Route path='/staff' element={<StaffDashboard />} />
      <Route path='/admin' element={<AdminDashboard />} />
      <Route path='/addstock' element={<AddStock />} />
      <Route path='/addvendor' element={<AddVendor />}/>
      <Route path='/vendor/:id' element={<IndividualVendor />}/>
      <Route path='/vendor' element={<AllVendor />} />
      <Route path='/vendorproduct' element={<VendorProduct />} />
      <Route path='/vendor/edit/:id' element={<EditVendor />}/>
      <Route path='/stockhistory' element={<StockHistory /> } />
      <Route path='/instock' element={<InStocks />} />
      <Route path='/instock/:id' element={<EditStock />} />
      <Route path='/createfood' element={<CreateFood /> } />
      <Route path='/food' element={<AllFood />} />
      <Route path='/profile' element={<Profile />} />

      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/order'  element={<Order />} />
      <Route path='/sales'   element={<Sales />} />
      <Route path='/product' element={<Product />} />
      <Route path='/Individualproduct' element={<IndividualProduct /> }/>
      <Route path="*" element={<Navigate to={page} />} />

    </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
