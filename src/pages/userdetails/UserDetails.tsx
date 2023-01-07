import React, { useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import DetailHeader from '../../components/DetailHeader'
import Tab from "../../components/Tab"
import { useAppContext } from '../../context/AppContextProvider'
import "./userDetails.scss"

function UserDetails() {
      const {id} = useParams()
      const {state,dispatch} = useAppContext()


    useEffect(() => {
          const file = JSON.parse(localStorage.getItem("users") || "{}")
        const clickedUser = () => {
            const currentUser = file?.find((each:any) =>  each.id === id )
            dispatch({type: "GETUSER", payload: currentUser})

        }
     clickedUser()
    }, [id, state.user])
  return (
    <>
    <div className='detail-container'>
    <Tab others title='user details' />
    <DetailHeader />
    <Outlet />
    </div>
    </>
  )
}

export default UserDetails