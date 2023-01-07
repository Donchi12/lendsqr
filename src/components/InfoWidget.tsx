import React from 'react'

import "./css/infowidget.scss";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";


type Info = {
  title: string,
  icon?: JSX.Element,
  color: string,
  info: number
}

function InfoWidget({title, icon, color, info}:Info) {


  return (
    <div className="widget">

        <div className='widget-wrapper'>
            <span className={`icon ${color}`}>

            {icon}
            </span>
            <span className={`title ${color}`}>

            {title}
            </span>
            <span className="amount">

            {info}
            </span>

        </div>
    </div>
  );
};


export default InfoWidget