
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link, NavLink,  } from 'react-router-dom'
import { useAppContext } from '../context/AppContextProvider'
import "./css/detail.scss"

function DetailHeader() {
    const {state} = useAppContext()
    const [openDetailNav, setOpenDetailNav]=useState(false)
    
  return (
    <div className='detailHeadContainer'>
     <div className='detailhead-wrapper'>
       <div className='name'>
           <div className='profile-img'>
               <img src={state.user.profile?.avatar} alt='avater' />
           </div>
         <div className='profile-id'>
         <span className='head-title'>{state.user?.userName}</span>
         <span className='info'>{state.user?.id}</span>
           </div>
        
       </div>
         <div className='seperate' />
       <div className='tier'>
           
         <span className='head-title'>User's Tier</span>
         <span className='rating'>
            <img  src='/star.png' alt='star' />
            <img  src='/star-outline.png' alt='star' />
            <img  src='/star-outline.png' alt='star' />
         </span>

       </div>
       <div className='seperate' />
       <div className='money'>
           
         <span className='head-title'>{state.user.profile?.currency}{state.user?.accountBalance}</span>
         <span className='info'>{state.user?.accountNumber}/Providus Bank</span>
          
       </div>
     </div>
     <div className='profile-link-wrapper '>
            <ul>        
             <NavLink   to="general" className={(prop => prop.isActive? "link-active":"profile-link")}>General Detail</NavLink>

             
             
             <NavLink  to="documents" className={(prop => prop.isActive? "link-active":"profile-link")}>Documents</NavLink>

             
             

             <NavLink  to="bankdetails" className={(prop => prop.isActive? "link-active":"profile-link")}>Bank Details</NavLink>
             
             

             <NavLink  to="loan" className={(prop => prop.isActive? "link-active":"profile-link")}>Loan</NavLink>
             
             
             <NavLink  to="saving" className={(prop => prop.isActive? "link-active":"profile-link")}>Saving</NavLink>

            
         </ul>
           {openDetailNav &&<div className='mobile-link'>        
             <NavLink   to="general" className={(prop => prop.isActive? "link-active":"profile-link")}>General Detail</NavLink>

             
             
             <NavLink  to="documents" className={(prop => prop.isActive? "link-active":"profile-link")}>Documents</NavLink>

             
             

             <NavLink  to="bankdetails" className={(prop => prop.isActive? "link-active":"profile-link")}>Bank Details</NavLink>
             
             

             <NavLink  to="loan" className={(prop => prop.isActive? "link-active":"profile-link")}>Loan</NavLink>
             
             
             <NavLink  to="saving" className={(prop => prop.isActive? "link-active":"profile-link")}>Saving</NavLink>

            
         </div>}
             <span className='detailNav' onClick={() => setOpenDetailNav(prev  => !prev)}><FaBars /></span>
     </div>
    </div>
  )
}

export default DetailHeader