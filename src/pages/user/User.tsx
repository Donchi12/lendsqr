
import React, { useEffect, useState } from 'react'
import InfoWidget from '../../components/InfoWidget'
import Tab from '../../components/Tab'
import UserTable from '../../components/UserTable'
import "./user.scss"
import "../../components/css/userTable.scss"
import * as Icons from "react-icons/fa"
import { HiOutlineDocument, HiOutlineUsers} from "react-icons/hi2"

import axios from 'axios'







function User() {
  const users = JSON.parse(localStorage.getItem("users") || "{}")
  const [pageSize, setPageSize] = useState<number>(10)
  const [loading, setLoading] = useState<boolean>(false)
  const [length, setLength] = useState<number>(0)

 
  






  //calculating User data 

  const calcUsersInfo = () => {
    const lastTwoYears = new Date().getFullYear() - 3
    const thisYear = new Date().getFullYear()
    
    //users with loan
    const usersWithLoan = users.filter(each  => each.education.loanRepayment)
    //users with savings
      const usersWithSaving = users.filter(each => each.accountBalance)
      //active users (users that since the last 3 years)
      const activeUsers = users.filter(each => {
        const userDate = new Date(each.lastActiveDate).getFullYear()  
        return userDate >= lastTwoYears && userDate <= thisYear && each.id 
      }
         )
         //total Users
         const total = users.length
      return {
         loanUsers : usersWithLoan,
         savingUsers: usersWithSaving,
         active: activeUsers,
         totalUsers: total
      }
  }


  const getIcon = (type: string) => {
        switch(type){
          case "USERS":
            return <HiOutlineUsers size={20} />
            
            case "USERSG":
            return <Icons.FaUsers size={20} />
          
          case "WITHL":
            return <HiOutlineDocument  size={20} />
          
          case "WITHS":
            return <Icons.FaCoins size={20} />
          
            
        }
  }

  return (
    <>
    <div className='dashboard'>

      <Tab title="Users" others={false} />
     
    <div className="user">
      <div className="userContainer">
        
        <div className="widgets">
          <InfoWidget color='arsh' info={calcUsersInfo().totalUsers}   icon={getIcon("USERS")} title="Users"  />
          <InfoWidget color='blue' info={calcUsersInfo().active.length}   icon={getIcon("USERSG")} title="Active Users" />
          <InfoWidget color='brown' info={calcUsersInfo().loanUsers.length}   icon={getIcon("WITHL")} title="Users With Loan" />
          <InfoWidget color='red' info={calcUsersInfo().savingUsers.length}   icon={getIcon("WITHS")} title="Users With Savings" />
        </div>
       
        
          <UserTable loading={loading}  data={users}   />
        
      
    </div>
    </div>
    </div>
    
    </>
  );


}

export default User
