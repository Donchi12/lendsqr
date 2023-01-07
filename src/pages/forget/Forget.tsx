
import React, {  useState } from "react"
import { Link } from "react-router-dom"
import { Alert } from "../../utils/Alert"
import Navbar from "../authnav/Navbar"
import "./forget.scss"

function Forget() {

  const [userData, setUserData] = useState({
    email: "",
    isLoading: false,
   

  })

 

  //handle form input changes
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
     setUserData((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  //data submitting for login
  const handleSubmit = (e:React.FormEvent<HTMLFormElement >) => {
     e.preventDefault()
     setUserData({...userData, isLoading: true})
    //get user Data from localStorage
    const prevUser = JSON.parse(localStorage.getItem("user") || "{}")
    //check if there is a registered user
    if(prevUser){
      
      //check if the user inputted Data matches
         if(prevUser?.email === userData.email ){
            // reset request

         Alert.error.fire({
            text: "Email matched. Sorry we are working on our database"
          })
        return setUserData((prev) => ({...prev, error: true, isLoading: false}))
       }
   /// No registered User
      setUserData((prev) => ({...prev, error: true, isLoading: false}))
      return   Alert.error.fire({
             text: "No corresponding user information. Pls register!"
           })
       
          
  }
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

                    <p>Enter Details To Reset Password</p>
                 </h2>
              </div>
               
            <form className="login-form" onSubmit={handleSubmit}>
               
                <div className="input-wrapper">

                 <input required  onChange={handleChange} value={userData.email} type="email" name="email" placeholder="Email Address" />
                </div>
                
                 <button disabled={userData.isLoading}  className="btn">{userData.isLoading? "Loading" :"Reset"}</button>
             
            </form>
            </div>
          </div>

        </div>
      </div>
         
    </section>
  )
}




export default Forget