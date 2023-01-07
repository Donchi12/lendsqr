import React from 'react'
import { useAppContext } from '../context/AppContextProvider'
import { User } from '../pages/dashboard/Dashboard'



function EducationAndEmployment() {
   const {state} = useAppContext()

   const calcMonthlyIcome = (income:number[]):number => {
    
    return income?.reduce((acc:number, val:number):number => acc + val)
   }
  return (
    <section className='personal'>
       <div className='personal-wrapper'>
           <div className='p-title'>
          <span>Education And Employment</span>
           </div>
          <div className='detail-container'>
              <div className="details-wrapper">
              <div className="info-texts">
                  <span>Level Of Education</span>
                  <span>{state.user.education?.level}</span>
              </div>
              <div className="info-texts">
                  <span>Office Email</span>
                  <span>{state.user.education?.officeEmail}</span>
              </div>
              </div>
              <div className="details-wrapper">

              <div className="info-texts">
                  <span>Employment Status</span>
                  <span>{state.user.education?.employmentStatus}</span>
              </div>
               <div className="info-texts">
                  <span>Monthly Income</span>
                  <span>{state.user.profile?.currency}{calcMonthlyIcome(state.user.education?.monthlyIncome)}</span>
              </div>
              </div>
              <div className="details-wrapper">
              <div className="info-texts">
                  <span>Sector Of Employment</span>
                  <span>{state.user.education?.sector}</span>
              </div>
               <div className="info-texts">
                  <span>Loan Repayment</span>
                  <span>{state.user.education?.loanRepayment}</span>
              </div>
              </div>
              <div className="info-texts">
                  <span>Duration Of Employment</span>
                  <span>{state.user.education?.duration}</span>
              </div>
             
          </div>
         
       </div>
       <hr />
    </section>
  )
}

export default EducationAndEmployment