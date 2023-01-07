import { useAppContext } from "../context/AppContextProvider"



function Social() {

const {state} = useAppContext()
  return (
   <section className='personal'>
       <div className='personal-wrapper social'>
           <div className='p-title'>
          <span>Socials</span>
           </div>
          <div className='detail-container reset'>
             
              <div className="info-texts">
                  <span>Twitter</span>
                  <span>{state.user.socials?.twitter}</span>
              </div>
              
           
             

              <div className="info-texts">
                  <span>Facebook</span>
                  <span>{state.user.socials?.facebook}</span>
              </div>
               
             
              
              <div className="info-texts">
                  <span>Instagram</span>
                  <span>{state.user.socials?.instagram}</span>
              </div>
            
          </div>
         
       </div>
       <hr />
    </section>
  )
}

export default Social