import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './global.scss'
import { Navigate, Outlet, Route, Router, Routes } from 'react-router-dom'
import ErrorPage from './pages/error/ErrorPage'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import UserDetails from './pages/userdetails/UserDetails'
import User from './pages/user/User'
import Register from './pages/register/Register'
import Forget from './pages/forget/Forget'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import GeneralDetails from './components/GeneralDetails'



function App() {
 
  const user = JSON.parse(localStorage.getItem("user") || "{}")
 
  const ProtectedRoute = () => {
    if(user.email) return (
      <Layout/>
     )
    return <Navigate to="/" /> 
  }
  const ProtectedRoute1 = () => {
    if(user.email) return (
      <Navigate to="/admin/dashboard" /> 
     )
     return <Outlet />
  }


  return (
    <>
    
   <Routes>
     <Route path="/admin" element={<ProtectedRoute />}>
       
       <Route index path='dashboard' element={<Dashboard />} />  
       <Route path="users" element={<User />} />
       <Route path="users/:id/details" element={<UserDetails />} >
         <Route path="general" element={<GeneralDetails />} />
         <Route path="documents" element={<div>Documents</div>} />
         <Route path="bankdetails" element={<div>Bank Details</div>} />
         <Route path="loan" element={<div>Loan</div>} />
         <Route path="saving" element={<div>saving</div>} />
         </Route>      

       
     </Route>

       <Route path="/" element={<ProtectedRoute1 />}>

       <Route index  element={<Login />} />
       <Route path="register" element={<Register />} />
       <Route path="forgotpassword" element={<Forget />} />
       </Route>
        

       
    <Route path="/*" element={<ErrorPage />}  />
   </Routes>
     
    </>
  )
}

export default App
