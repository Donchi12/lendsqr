import { Link } from "react-router-dom"
import "./css/navbar.scss"
import * as IconHero from "react-icons/hi"
import { useState } from "react"
import { MdArrowDropDown } from "react-icons/md"
import { FaBars, FaRegBell } from "react-icons/fa"
import { useAppContext } from "../context/AppContextProvider"


function Navbar() {
  const [showProfile, setShowProfile] = useState<any>(null)
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const { dispatch} = useAppContext()

  
  return (
    <main className="nav-container">
     <div className="nav-wrapper">
       <div className="nav-logo">
         <Link to="/admin/dashboard" >
           <img  src="/header-logo.svg" alt="logo" />
         </Link>
         <span className="toggle" onClick={() => dispatch({type: "TOGGLE"})}>
           <FaBars size={25} className="toggle-bar" />
         </span>
       </div>
        <div className="nav-search">
          <div className="nav-search-input-wrapper">
            
          <input type="search" placeholder="Search for anything" name="search" />
          <a href="#">
            <IconHero.HiSearch />
          </a>
          </div>
            
        </div>
        {showSearch && <div className="nav-search mobile">
          <div className="nav-search-input-wrapper">
            
          <input type="search" placeholder="Search for anything" name="search" />
          <a href="#">
            <IconHero.HiSearch />
          </a>
          </div>
            
        </div>}
        <div className="nav-profile">
           <Link className="doc" to="/admin/dashboard">Doc</Link>
             

             
           <div className="nav-profile-wrapper">
              <IconHero.HiSearch size={20} className="icon" onClick={() => setShowSearch(!showSearch)} />
             <span className="nav-bell">

             <FaRegBell size={20} />
             </span>
             <div className="nav-profile-content"onMouseLeave={() => setShowProfile(false)} onMouseEnter={() => setShowProfile(true)}>
               <span >
                <img src="/ceo.jpg" alt="profile" />
               <span className="nav-profile-text">
                 Donald
               </span>
                   <span className="nav-profile-charet" >
                     <MdArrowDropDown className={`${showProfile && "nav-profile-show"}`} />
                 
                   </span>
               </span>
           {showProfile && 
           <div className="dropdown">
             <div className="dropdown-wrapper">

             <ul className="dropdown-content">
              <Link className="dropdown-link" to="profile">Profile</Link>
              <Link to="doc" className="dropdown-link doc-link" >Doc</Link>
              <a className="dropdown-link" href="#">Log Out</a>
             </ul>
             </div>
           </div>}
             </div>
           </div>
        </div>
     </div>
      
    </main>
  )
}

export default Navbar