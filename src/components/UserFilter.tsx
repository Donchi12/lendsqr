import React from 'react'
import { User } from '../pages/dashboard/Dashboard'
import "./css/filter.scss"



   type FilterType = {
     orgName: string,
      userName: string,
      email: string,
      phoneNumber: string,
      createdAt: string,
      status: string
}

type Filters = {
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>,
  setSlice: React.Dispatch<React.SetStateAction<any>>,
  slice: User[],
  filter: FilterType
}
function UserFilter({filter, setFilter, slice, setSlice}: Filters) {


const handleChange = (e:React.ChangeEvent<HTMLInputElement>| React.ChangeEvent<HTMLSelectElement>) => {
  setFilter({...filter, [e.target.name]: e.target.value})
}

const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
       e.preventDefault()
     //const filteredData = slice.filter(each => Object.values(filter).some(item => each[item].toString().toLowerCase().includes(item.toLocaleLowerCase())))
     //console.log(filteredData)
  const info = slice.filter((each : any) => {
   const keys = Object.keys(filter)
   const values = Object.values(filter)
  return keys.map(key =>  each[key]).some(d => values.some(val => d === val))
    
  }
  )
     setSlice(info)
     
}


  return (
    
    <div className="filterContainer">
      <div className="filterWrapper">
        <form onSubmit={handleSubmit}>
          <div className="form-input-wrapper">
            <label htmlFor="org">Organization</label>
            <select value={filter.orgName} name='orgName' onChange={handleChange} id="org" className='form-input reset'>
              <option>Select</option>
              <option value="accusamus-minima-repudiandae">accusamus-minima-repudiandae</option>
              <option value="natus-harum-unde">natus-harum-unde</option>
              <option value="quas-et-ut">quas-et-ut</option>
            </select>
          </div>

          <div className="form-input-wrapper">
            <label htmlFor='user'>Username</label>
            <input onChange={handleChange} name='userName' value={filter.userName} placeholder='user' className='form-input' />
          </div>
          <div className="form-input-wrapper">
            <label htmlFor='email'>Email</label>
            <input onChange={handleChange} type="email" value={filter.email} name='email' placeholder='email' className='form-input' />
          </div>
          <div className="form-input-wrapper">
            <label htmlFor='date' >Date</label>
            <input onChange={handleChange} type="text" value={filter.createdAt} name='date' placeholder='Date' className='form-input date ' />
          </div>
          <div className="form-input-wrapper">
            <label htmlFor='phone'>Phone Number</label>
            <input onChange={handleChange} value={filter.phoneNumber} name='phoneNumber' placeholder='Phone Number' className='form-input' />
          </div>
         <div className="form-input-wrapper">
            <label htmlFor="status">Status</label>
            <select onChange={handleChange} value={filter.status}  name="status" id="status" className='form-input reset'>
              <option>Status</option>
              <option value="active">active</option>
              <option value="inactive">Inactive</option>
              <option value="blacklist">Blacklist</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <div className='form-btn-wrapper'>
            <button className='btn' type='button'>Reset</button>
            <button className='btn' type='submit'>filter</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default UserFilter