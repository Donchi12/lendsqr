import React, {  useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Alert } from "../../utils/Alert"
import Navbar from "../authnav/Navbar"
import  "./login.scss"

function Login() {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    isLoading: false,
    showPassword: false
  })
 
  //showing user password
   const handleShowPassword = () => {
      setUserData(prev =>  ({...prev, showPassword: !prev.showPassword}))
   }
  //handle form input changes
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
     setUserData((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  //data submitting for login
  const handleSubmit = (e:React.FormEvent<HTMLFormElement >) => {
     e.preventDefault()
     setUserData({...userData, isLoading: true})
    //get user Data from localStorage
    const prevUser = JSON.parse(localStorage.getItem("user")|| "{}" )
    //check if there is a registered user
    if(prevUser){  
      //check if the user inputted Data matches
         if(prevUser?.email === userData.email && prevUser?.password === userData.password){
           setUserData((prev) => ({...prev,  isLoading: false}))
           return Alert.success.fire({
             text: "Login Successful"
            }).then(() => window.location.assign("/admin/dashboard"))}
         Alert.error.fire({
            text: "Login failed Wrong Credencials"
          })
        return setUserData((prev) => ({...prev, isLoading: false}))
       }
   /// No registered User
      setUserData((prev) => ({...prev, isLoading: false}))
      return   Alert.error.fire({
             text: "No corresponding user information. Pls register!"
           })
       
          
  }
  return (
    <section className="container">
      <div className="wrapper">
       <Navbar />
        <div className="auth">
          <div className="auth-wrapper">
           
              <img src="/sign-in-logo.svg" className="login-img" alt="login image" />
           
            <div className="login-form-container">
              <div className="login-form-text">

                 <h2>Welcome ! 

                    <p>Enter Details To Login</p>
                 </h2>
              </div>
               
            <form className="login-form" onSubmit={handleSubmit}>
                 <div className="input-wrapper">

                 <input required onChange={handleChange} type="email" value={userData.email} name="email" placeholder="Email Address" />
                  </div>
                  <div className="input-wrapper">
                  <span className="show-password" onClick={handleShowPassword}>Show</span>
                 <input required onChange={handleChange} value={userData.password} type={userData.showPassword? "text": "password"} name="password" placeholder="Password" />
                  </div>
                 <div className="links">
                   <Link to="/forgotpassword">Forgot Password ?</Link>
                   <Link to="/register">Sign up</Link>
                   
                 </div>
                 <button disabled={userData.isLoading}  className="btn">{userData.isLoading? "Loading" :"Log In"}</button>
             
            </form>
            </div>
          </div>

        </div>
      </div>
         
    </section>
  )
}

export default Login