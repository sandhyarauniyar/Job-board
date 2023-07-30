import React from 'react';
import JobsCard from "../components/JobsCard";
import { useEffect, useState } from 'react';
import "./JobsPage.css";
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { updateJobList } from '../actions';

function JobsPage() {
  const [currentPage,setCurrentPage] = useState(1);
  const [totalPages,setTotalPage] = useState(1);
  const [startPage,setStartPage] = useState(1);
  const dispatch = useDispatch();
  const jobs = useSelector(state =>  state.jobListReducer);

  useEffect(() => {
      const fetchData = async() => {
          const res = await fetch(`https://nextlevel-fe-assignment.vercel.app/jobs?page=${currentPage}`);
          const response = await res.json();
          dispatch(updateJobList(response.jobs));
          setTotalPage(response.count/10);
      }

      fetchData();
  },[currentPage]);

  const handleClick = (e) => {
    if(e.target.textContent == "Previous"){
       if(currentPage>=2){
          setCurrentPage(prevPage => prevPage-1);
          if(currentPage-1 < startPage){
              setStartPage(prevStartPage => prevStartPage-1);
          }
       }
    }
    else if(e.target.textContent == "Next"){
      if(currentPage < totalPages){
        setCurrentPage(prevPage => prevPage + 1);
        if(currentPage+1 > startPage+2){
          setStartPage(prevStartPage => prevStartPage+1)
        }
      }
    }
    else{
      setCurrentPage(parseInt(e.target.textContent));
    }

  }

  return (
    <div>
      <Navbar/>
      <div className="jobs flex">
            <div className="top-section w-0 md:w-1/5">
                  
            </div>
            <div className="bottom-section w-full md:w-4/5 ">
                <div className='flex flex-col md:flex-row p-2 pb-4 md:pb-0 md:p-8  items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    <div className='text-lg md:text-4xl font-bold'>Recommended Jobs</div>
                    <div className = "job-count flex justify-center items-center font-bold">386</div>
                  </div>
                  <div className='flex gap-2 mt-4 md:mt-0'>
                        <span className = "fontS-14">Sort By</span>
                        <span className = "fontS-14 font-bold">Last Updated</span>
                        <svg class="h-5 w-5 text-red-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="14" cy="6" r="2" />  <line x1="4" y1="6" x2="12" y2="6" />  <line x1="16" y1="6" x2="20" y2="6" />  <circle cx="8" cy="12" r="2" />  <line x1="4" y1="12" x2="6" y2="12" />  <line x1="10" y1="12" x2="20" y2="12" />  <circle cx="17" cy="18" r="2" />  <line x1="4" y1="18" x2="15" y2="18" />  <line x1="19" y1="18" x2="20" y2="18" /></svg>
                  </div>
                </div>

                <div className='grid-section grid grid-cols-1 md:grid-cols-3 gap-8 p-2 md:p-8'>
                  {
                    jobs.length > 0  ? jobs.map((job,index) => (
                        <JobsCard job={job}/> 
                    )
                    ) : <div>Loading...</div>
                  }
                </div>
  
                  <div className='flex items-center justify-center mt-4 mb-8'>
                    <nav aria-label="Page navigation">
                      <ul class="inline-flex -space-x-px text-sm" onClick={handleClick} style={{cursor:"pointer"}}>
                        <li>
                          <span className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">Previous</span>
                        </li>
                        <li>
                          <span className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white  ${currentPage == startPage ? "currentPage" : "" } `}>{startPage}</span>
                        </li>
                        <li>
                          <span className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ${currentPage == startPage+1 ? "currentPage" : "" }`}>{startPage+1}</span>
                        </li>
                        <li>
                          <span className={` ${currentPage == startPage+2 ? "currentPage" : "" } flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 `}>{startPage+2}</span>
                        </li>
                        <li>
                          <span className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>Next</span>
                        </li>
                      </ul>
                    </nav>
                </div>
            </div>

      </div>
    </div>
  )
}

export default JobsPage
