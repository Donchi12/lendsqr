import React from 'react'
import PersonalInfo from './PersonalInfo'
import "./css/general.scss"
import EducationAndEmployment from './EducationAndEmployment'
import Social from './Social'
import Grantors from './Grantors'
import { file } from '../pages/dashboard/temp'

function GeneralDetails() {
    //const file = JSON.parse(localStorage.getItem("users") || "{}")

  return (
    <div className='informations'>
    <PersonalInfo  />
    <EducationAndEmployment  />
    <Grantors  />
    <Social/>
    </div>
  )
}

export default GeneralDetails