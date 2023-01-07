
import React, { useEffect, useState } from 'react'
import InfoWidget from '../../components/InfoWidget'
import Tab from '../../components/Tab'
import UserTable from '../../components/UserTable'
import "./user.scss"
import "../../components/css/userTable.scss"
import * as Icons from "react-icons/fa"
import { HiOutlineDocument, HiOutlineUsers} from "react-icons/hi2"

import axios from 'axios'






export interface MyUser {createdAt:string,orgName:string,userName:string,email:string,phoneNumber:string,lastActiveDate:string,profile:{firstName:string,lastName:string,phoneNumber:string,avatar:string,gender:string,bvn:string,address:string,currency:string},guarantor:{firstName:string,lastName:string,phoneNumber:string,gender:string,address:string},accountBalance:string,accountNumber:string,socials:{facebook:string,instagram:string,twitter:string},education:{level:string,employmentStatus:string,sector:string,duration:string,officeEmail:string,monthlyIncome:string[],loanRepayment:string},id:string}
type GetResponse = MyUser[]

function User() {
  const [users, setUsers] = useState<MyUser[]>([])
  const [pageSize, setPageSize] = useState<number>(10)
  const [loading, setLoading] = useState<boolean>(false)
  const [length, setLength] = useState<number>(0)

 
  



   useEffect(() => {
     //fetch all users before the dom is painted pr component renders
     const getUsers = async() =>{
       setLoading(true)
       try{
         const {data} = await axios.get<GetResponse>("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
        
          //update the components user state
         const sorted =  data.sort((a, b) => new Date(b.createdAt).getFullYear() - new Date(a.createdAt).getFullYear())
         setUsers(sorted)
        setLength(data.length)
      
        setLoading(false)
       }catch(error){
         setLoading(false)
        console.log(error)
      }
     }
    getUsers()
    
  }, [pageSize])



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
