import { useAppContext } from "../context/AppContextProvider"


function PersonalInfo() {
    const {state:{user}} = useAppContext()

  return (
    <section className='personal'>
       <div className='personal-wrapper'>
           <div className='p-title'>
          <span>Personal Information</span>
           </div>
          <div className='detail-container'>
              <div className="details-wrapper">
              <div className="info-texts">
                  <span>FirstName</span>
                  <span>{user.profile?.firstName}</span>
              </div>
              <div className="info-texts">
                  <span>Marital Status</span>
                  <span>{user.profile?.maritalStatus ? user.profile.maritalStatus : "single"}</span>
              </div>
              </div>
              <div className="details-wrapper">

              <div className="info-texts">
                  <span>Phone Number</span>
                  <span>{user.profile?.phoneNumber}</span>
              </div>
               <div className="info-texts">
                  <span>Children</span>
                  <span>{user.profile?.children? user.profile.children : "None"}</span>
              </div>
              </div>
              <div className="details-wrapper">
              <div className="info-texts">
                  <span>Email</span>
                  <span>{user?.email}</span>
              </div>
               <div className="info-texts">
                  <span>Type Of Residence</span>
                  <span>{user.profile?.residence? user.profile.residence : "Parent Appartment"}</span>
              </div>
              </div>
              <div className="info-texts">
                  <span>FirstName</span>
                  <span>{user.profile?.firstName}</span>
              </div>
              <div className="info-texts">
                  <span>BVN</span>
                  <span>{user.profile?.bvn}</span>
              </div>
              <div className="info-texts">
                  <span>Gender</span>
                  <span>{user.profile?.gender}</span>
              </div>
          </div>
         
       </div>
       <hr />
    </section>
  )
}

export default PersonalInfo