import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ManagerContextProvider } from './Components/Context/ManagerContext';
import { AdminContextProvider } from './Components/Context/AdminContext';
import { StaffContextProvider } from './Components/Context/StaffContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

    <ManagerContextProvider>
      <AdminContextProvider>
        <StaffContextProvider>
           <App />
        </StaffContextProvider>
      </AdminContextProvider>
    </ManagerContextProvider>
     
   
  
  </>
);

