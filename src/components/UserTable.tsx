import React, {  useState } from "react";
import * as Icons from "react-icons/bs";
import { FaEye, FaUserCheck } from "react-icons/fa";
import { TbUserX} from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { User } from "../pages/dashboard/Dashboard";
import "./css/userTable.scss"
import useTable from "./hooks/useTable";
import Pagination from "./Pagination";
import UserFilter from "./UserFilter";


type Data = {
  data: User[],
  loading: boolean,
}

   type FilterType = {
     orgName: string,
      userName: string,
      email: string,
      phoneNumber: string,
      createdAt: string,
      status: string
}

function UserTable({ data, loading }:Data) {
 
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [pageSize, setPageSize] = useState(1);
  const { slice, range, setSlice } = useTable(data, pageSize, rowsPerPage);
  const [actionToShow, setActionToShow] = useState<{id:string, show:boolean}>({
    id: "",
    show: false
  })
  const {pathname}= useLocation()

  const [filter, setFilter] = useState<FilterType>({
      orgName: "",
      userName: "",
      email: "",
      phoneNumber: "",
      createdAt: "",
      status: ""
  })

  const [openFilter, setOpenFilter] = useState<boolean>(false)




  
  //users.sort((a: any, b: any) => a.date - b.date).splice(0, 10);

  //get user status based on there active duration
  const handleStatus = (lastADate:string) => {
    const thisYear = new Date().getFullYear()
    const tenYearsAgo = thisYear - 10
    const treeYearsAgo = thisYear - 3
    const lastActiveDate = new Date(lastADate).getFullYear()
    //checking the date ranges
      if(lastActiveDate > thisYear) return <button className="pending status">Pending</button>
      if(lastActiveDate >= treeYearsAgo && lastActiveDate < thisYear ) return <button className="status active">Active</button>
      if(lastActiveDate <= tenYearsAgo) return <button className="status inactive">Inactive</button>
      if(lastActiveDate < thisYear && lastActiveDate > tenYearsAgo) return <button className="status blacklisted">Blacklisted</button>
      
  }

 const showActions = (id: string) => {
      setActionToShow({...actionToShow, id:id, show:!actionToShow.show})    
 }
 
  return (
    
<>
    

      <div className="table-wrapper" >
        <table className="table">
          <thead className="th">

            <tr >
                <th >
           <span className="tl">
                  <span >
                  oranisation
                </span>      
                  <Icons.BsFilter onClick={() => setOpenFilter(prev => !prev)}   className="icon" />
              </span>
           
                </th>
                <th  >
                  <span className="tl">

                  <span>username</span>
                  <Icons.BsFilter onClick={() => setOpenFilter(prev => !prev)}  className="icon" />
                  </span>
                </th>
                <th>
                  <span className="tl">

                  <span className="email">email</span>
                  <Icons.BsFilter onClick={() => setOpenFilter(prev => !prev)}  className="icon" />
                  </span>
                </th>
                <th >
                  <span className="tl">

                  <span>phoneNumber</span>
                  <Icons.BsFilter onClick={() => setOpenFilter(prev => !prev)}  className="icon" />
                  </span>
                </th>
                <th >
                  <span className="tl">

                  <span>datejoined</span>
                  <Icons.BsFilter onClick={() => setOpenFilter(prev => !prev)}  className="icon" />
                  </span>
                </th>
               
                <th >
                  <span className="tl">

                  <span>status</span>
                  <Icons.BsFilter onClick={() => setOpenFilter(prev => !prev)}  className="icon" />
                  </span>
                </th>
                
              </tr>
             
          </thead>
          <tbody >
            {slice.map((each: any) => (
              <tr  className="tr" key={each.id}>
                <td >
                  <span>

                  {each.orgName}
                  
                  </span>
                </td>
                <td >
                  <p>{each.userName}</p>
                 
                </td>
                <td >
                  <span>{each.email}</span>
                  <span>{each.id}</span>
                  
                </td>
                <td >
                  <span>{each.phoneNumber.slice(0,15 ).replaceAll(".", "").replaceAll("-","").replaceAll("(", "").replaceAll(")", "").slice(0, 10)}</span>
                </td>
                <td >
                  <span>{
                  new Date(each.createdAt).toLocaleDateString("en-us", { month: "short",year: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit"})}
                  </span>
                </td>
                
                <td >
                  <span>{handleStatus(each.lastActiveDate)}</span>
                </td>
                <td className="action">
                  <span className="action-icon" onClick={() =>showActions(each.id)}>

                  <Icons.BsThreeDotsVertical />
                  </span>
                  {actionToShow.id === each.id &&actionToShow.show  && pathname === "/admin/users" && <span className="action-body">
                    <Link className="action-link" to={`/admin/users/${each.id}/details/general`}>
                      <FaEye />
                      View Details
                      </Link>
                    <a className="action-link" href="#">
                      <TbUserX /> Blacklist User</a>
                    <a className="action-link" href="#">
                      <FaUserCheck />
                      Activate User
                      </a>
                  </span>}
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>

      {loading && <div className="loader-container">
      <div className="loader">
        <div className="inner"></div>
      </div>
      </div>}
            {data.length === 0 && (
              <div className="feedback">
                
                  <span>No user Yet</span>
               
              </div>
            )}
      </div>

  
        <Pagination range={range} data={data} setRowsPerPage={setRowsPerPage} rowsPerPage={rowsPerPage} slice={slice} pageSize={pageSize} setPageSize={setPageSize} />
         {pathname  === "/admin/users" && openFilter && <UserFilter slice={slice} setSlice={setSlice}  filter={filter} setFilter={setFilter} />}
         </>

  
  );
}


export default UserTable