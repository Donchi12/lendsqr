import "./register.scss"
import React, {  useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Alert } from "../../utils/Alert"
import axios from "axios"
import { ErrorResult } from "@remix-run/router/dist/utils"
import Navbar from "../authnav/Navbar"



interface User {createdAt:string,orgName:string,userName:string,email:string,phoneNumber:string,lastActiveDate:string,profile:{firstName:string,lastName:string,phoneNumber:string,avatar:string,gender:string,bvn:string,address:string,currency:string},guarantor:{firstName:string,lastName:string,phoneNumber:string,gender:string,address:string},accountBalance:string,accountNumber:string,socials:{facebook:string,instagram:string,twitter:string},education:{level:string,employmentStatus:string,sector:string,duration:string,officeEmail:string,monthlyIncome:string[],loanRepayment:string},id:string}
type GetResponse = User[]

function Register() {
 const navigate = useNavigate()
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    fname: "",
    lname: "",
    isLoading: false,
    showPassword:false

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
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement >) => {
     e.preventDefault()
     setUserData({...userData, isLoading: true})
    //get user Data from localStorage
    try{

        const {data} = await axios.get<GetResponse>("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
        
        //find the current user info
        const userFilter = data.find(each => each.email === userData.email)
        //check if user is already registered 
    
       if(userFilter){
          
         Alert.error.fire({
            text: "Sorry a user with this credencial already exist"
          })
        return setUserData((prev) => ({...prev, error: true, isLoading: false, email: "", password: "", fname: "",lname: ""}))
            
           
          }
      /// register the user if not registered db
    
         //resetUser data
         setUserData((prev) => ({...prev, error: true, isLoading: false, email: "", password: "", fname: "",lname: ""}))
         localStorage.setItem("user", JSON.stringify(userData))
         return   Alert.success.fire({
                text: "Registration Successful"
              }).then(() => navigate("/"))
    }catch(error){
        if(axios.isAxiosError(error)){
            Alert.error.fire({
                text: error?.message
            })
        }
        
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

                    <p>Enter Details To Register</p>
                 </h2>
              </div>
               
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-wrapper name">

                 <input required onChange={handleChange} value={userData.fname} name="fname" placeholder="first Name" />
                 <input required onChange={handleChange} value={userData.lname}  name="lname" placeholder="Last Name" />
                </div>
                <div className="input-wrapper">

                 <input  required onChange={handleChange} value={userData.email} type="email" name="email" placeholder="Email Address" />
                </div>
                  <div className="input-wrapper" >
                  <span className="show-password" onClick={handleShowPassword}>Show</span>
                 <input required onChange={handleChange} value={userData.password} type={userData.showPassword? "text": "password"} name="password" placeholder="Password" />
                  </div>
                 <div className="links">
                 
                   <Link to="/">Aready have account? Login In</Link>
                   
                 </div>
                 <button disabled={userData.isLoading}  className="btn">{userData.isLoading? "Loading" :"Register"}</button>
             
            </form>
            </div>
          </div>

        </div>
      </div>
         
    </section>
  )
}



export default Register