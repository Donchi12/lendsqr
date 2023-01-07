import { SetStateAction, useEffect, useState } from "react"
import * as Icons from "react-icons/hi2"
import { User } from "../pages/dashboard/Dashboard"
import "./css/pagination.scss"


type Pagnate = {
    pageSize : number,
    setPageSize: React.Dispatch<SetStateAction<number>>,
    setRowsPerPage: React.Dispatch<SetStateAction<number>>,
    slice: User[],
    range:number[]  ,
    data: User[],
    rowsPerPage:number
}
const Pagination = ({ range,data, setPageSize, rowsPerPage, setRowsPerPage, pageSize, slice }:Pagnate) => {
   



    //goto the next page
    const handleNext = ():void => {
         
           setPageSize((prev) => {
            if(prev === range.length) return prev
            return prev + 1

        }
         )
    }

    //goto the previous page
    const handlePrev = ():void => {
          
        setPageSize((prev) => {
            if(prev === 1) return prev
            return prev - 1

        }
         )
    }
  
  useEffect(() => {
      
    if (slice.length < 1 && pageSize !== 1) {
      setPageSize(pageSize );
    }
  }, [slice, pageSize]);
  

  

  const navLink = () => {
      let link = []
      for(let i = 1; i <= range.length; i++){
      if(i=== 4 && range.length > 8){
       
             link.push(<span key={i} className="mid p-dots">...</span>)
           i = range.length - 2
      }else{
              link.push(<span key={i} className={`${pageSize === i && "active"}`}>{i}</span>)
             
          }
         

      }
      return link

  }

    return (
        <div className="pagination">
            <div className="p-container">
                <div className="page-size">
                   <span>Showing</span> 
                   <select value={rowsPerPage} onChange={(e) => setRowsPerPage(Number(e.target.value))
                    }>
                       <option value="10">10</option>
                       <option value="50">50</option>
                       <option value="100">100</option>
                   </select>
                   <span>out of {data.length}</span>
                </div>
                <div className="selector">
                  <span className="prev" onClick={handlePrev}>
                      <Icons.HiChevronLeft/>
                  </span>
                  <span>
                   <span className="mid" >
                
                  {navLink().map(each => each)}
                   </span>
                      
                
                  </span>
                  <span className="next" onClick={handleNext}>
                      <Icons.HiChevronRight/>
                  </span>
                </div>
            </div>
        </div>
    )
}

export default Pagination