
import React, { createContext, DOMAttributes, ProviderProps, useContext, useReducer } from "react";

import {User} from "../pages/dashboard/Dashboard"
import { initialState, reducer } from "./Reduser";




type AppState = {
    user: User | any,
    openSidebar : boolean
  }


const AppContext = createContext<{
  state:AppState,
  dispatch: React.Dispatch<any>
}>({state: initialState, dispatch: () => null})

export const useAppContext = () => useContext(AppContext)



export const AppContextProvider = ({children}:DOMAttributes<HTMLDivElement>) => {


    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
      <AppContext.Provider value={{state, dispatch}}>
        {children}
      </AppContext.Provider>
      

    )
}
