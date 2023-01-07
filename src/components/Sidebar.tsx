
        import "./css/sidebar.scss";
        import * as Icons from "react-icons/hi2"
        import * as IconsA from "react-icons/fa"
        import {FcMoneyTransfer} from "react-icons/fc"
        import {MdManageAccounts, MdPriceChange} from "react-icons/md"
        import {RiBankFill, RiExchangeBoxFill, RiFilePaper2Fill} from "react-icons/ri"
        import {GoGraph} from "react-icons/go"
        import {NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";




function Sidebar() {
  const {state} = useAppContext()
  
  
  return (
    <>
   
     <div className={`sidebar-wrapper ${state.openSidebar ? "sidebar-show": "sidebar-hide"}`}>
    
      <div className="center">
        <ul>
          <li className="head-text link">

            <Icons.HiShoppingBag className="icon" />
          <span >Switch Organisation</span>
          <span>
            <Icons.HiChevronDown style={{marginTop: "1px"}}  />
          </span>
          </li>
          <NavLink  className={(data) => data.isActive? "act": "link"} to="dashboard">

          
            <IconsA.FaHome className="icon" />
            <span >Dashboard</span>
          
          </NavLink>
          <p className="title">CUSTOMERS</p>
          <NavLink to="users" className={(data) => data.isActive? "act": "link"}  >
            <Icons.HiUsers className="icon" />
            <span>Users</span>
        
          </NavLink>
          <NavLink to="grantors" className={(data) => data.isActive? "act": "link"} >
            <Icons.HiUserGroup className="icon" />
            <span>Grantors</span>
          </NavLink>
          <NavLink to="loan" className={(data) => data.isActive? "act": "link"} >
            <FcMoneyTransfer className="icon" />
            <span>Loan</span>
          </NavLink>
          <NavLink to="decision " className={(data) => data.isActive? "act": "link"} >
            <IconsA.FaRegHandshake className="icon" />
            <span>Decision Model</span>
          </NavLink>
          <NavLink to="loan_request" className={(data) => data.isActive? "act": "link"} >
            <IconsA.FaHandHoldingUsd className="icon" />
            <span>Loan Request</span>
          </NavLink>
          <NavLink to="savings" className={(data) => data.isActive? "act": "link"} >
            <Icons.HiBanknotes className="icon" />
            <span>Savings</span>
          </NavLink>
          <NavLink to="whitelist" className={(data) => data.isActive? "act": "link"}  >
            <IconsA.FaUserCheck className="icon" />
            <span>Whitelist</span>
          </NavLink>
          <NavLink to="karma" className={(data) => data.isActive? "act": "link"}  >
            <IconsA.FaUserPlus className="icon" />
            <span>Karma</span>
          </NavLink>
          <p className="title">BUSINESSES</p>
          <NavLink className={(data) => data.isActive? "act": "link"}  to="organisation">
            <li>
              <Icons.HiShoppingBag className="icon" />
              <span>Organisation</span>
            </li>
          </NavLink>
          <NavLink className={(data) => data.isActive? "act": "link"}  to="loan_products">
           <li>
            <IconsA.FaHandHoldingUsd className="icon" />
            <span>Loan Products</span>
          </li>
          </NavLink>
          <NavLink className={(data) => data.isActive? "act": "link"}  to="saving_products">
            <li>
              <RiBankFill className="icon" />
              <span>Saving Products</span>
            </li>
          </NavLink>
          <NavLink className={(data) => data.isActive? "act": "link"}  to="fee_and_charges">
            <IconsA.FaCoins className="icon" />
            <span>Fee and Charges</span>
          </NavLink>
          <NavLink className={(data) => data.isActive? "act": "link"}  to="transactions">
            <RiExchangeBoxFill className="icon" />
            <span>Transactions</span>
          </NavLink>
          <NavLink className={(data) => data.isActive? "act": "link"}  to="services">
            <IconsA.FaServicestack className="icon" />
            <span>Services</span>
          </NavLink>
          <NavLink className={(data) => data.isActive? "act": "link"}  to="sevice_account">
            <MdManageAccounts className="icon" />
            <span>Service Account</span>
          </NavLink>
          <NavLink className={(data) => data.isActive? "act": "link"}  to="settlements">
            <RiFilePaper2Fill className="icon" />
            <span>Settlements</span>
          </NavLink>
          <NavLink className={(data) => data.isActive? "act": "link"}  to="reports">
            <GoGraph className="icon" />
            <span>Reports</span>
          </NavLink>
          <p className="title">SETTING</p>
          <NavLink className={(data) => data.isActive? "act": "link"}  to="preference">
            <Icons.HiOutlineAdjustmentsHorizontal className="icon" />
            <span>Preference</span>
          </NavLink>
          <NavLink className={(data) => data.isActive? "act": "link"}  to="fee_and_pricing">
            <MdPriceChange className="icon" />
            <span>Fee And Pricing</span>
          </NavLink>
          <NavLink className={(data) => data.isActive? "act": "link"}  to="audit_logs">
            <IconsA.FaClipboardList className="icon" />
            <span>Audit Logs</span>
          </NavLink>
         
        </ul>
      </div>
      </div>
     
     
    </>
 



    
  )
}

export default Sidebar