import React from 'react'
import { useAppContext } from '../context/AppContextProvider'


function Grantors() {
    const {state:{user}} = useAppContext()
  return (
    <section className='personal'>
       <div className='personal-wrapper grantor'>
           <div className='p-title'>
          <span>Guarantors</span>
           </div>
          <div className='detail-container reset'>
             
              <div className="info-texts">
                  <span>Firstname</span>
                  <span>{user.guarantor?.firstName}</span>
              </div>
              
           
             

              <div className="info-texts">
                  <span>Phone</span>
                  <span>{user.guarantor?.phoneNumber}</span>
              </div>
               
             
              
              <div className="info-texts">
                  <span>Email</span>
                  <span>{user.guarantor?.email}</span>
              </div>
              
              
              <div className="info-texts">
                  <span>Relationship</span>
                  <span>{user.guarantor?.relationship? user.guarantor?.relationship : "Single"}</span>
              </div>
             
          </div>
         
       </div>
       <hr />
    </section>
  )
}

export default Grantors