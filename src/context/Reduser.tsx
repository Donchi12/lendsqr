import {User} from "../pages/dashboard/Dashboard"



type AppState = {
    user: User,
    openSidebar : boolean
  }
export const initialState = {
  
  openSidebar: false,
  user: {}
    
}


type Action = { type: "TOGGLE", payload: ""}|{ type: "GETUSER", payload: ""}

 export const reducer = (state: AppState, action: any) => {
  
     switch(action.type){
         case "TOGGLE":
         return {
          ...state,
           openSidebar: !state.openSidebar ,
          
         }
         case "GETUSER":
         return {
          ...state,
           user: action.payload ,
          
         }
         default:
        return state
        
     }
 }
