import React from 'react'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import "./css/tab.scss"

type Title = {
  title: string;
  others: boolean
}
function Tab({title,others}:Title) {

  return (
    <div className='tab'>
     <div className='tab-container'>
       {others &&
       <div className='tab-link'>
       <Link to="/admin/users">
         <HiArrowLongLeft className='arrow'/> Back To Users
       </Link>

       </div>
       }
         <div className='tab-items' >
           <span className='tab-title'>

           {title}
           </span>
           {others && 
           <div className='user-btn'>
             <button>Blacklist User</button>
             <button>Activate User</button>
           </div>}
         </div>
     </div>
    </div>
  )
}

export default Tab