import React from 'react';
import "./JobDetail.css";

import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';

function JobDetail() {

  const location = useLocation();
  const jobTitle = location.state;

  const jobs = useSelector(state =>  state.jobListReducer);

  const jobArray = jobs.filter((job) => 
      job.title === jobTitle
  );

  let job = jobArray[0];

  if(!job) {
    job = JSON.parse(localStorage.getItem("Job"));
  }
  else{
    localStorage.setItem("Job",JSON.stringify(job));
  }

  return (
    <div className="relative px-4 py-4" style={{backgroundColor:"#f5f6f6"}}>

    <div>
      <div className="relative top-half-banner"> 
          <img src="/banner-img.png" alt="Banner Image" className="banner-img w-full rounded" />

          <div className="absolute bottom-4 right-4 flex items-center gap-4">
            <span className="text-white font-bold hidden md:inline-flex">Contact:</span>
            <div className='logo rounded-full flex items-center justify-center'>
                <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="white"
        viewBox="0 0 24 24">
        <path
          d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
          fill-rule="evenodd"
          clip-rule="evenodd" />
      </svg>
          </div>

          <div className='logo rounded-full flex items-center justify-center'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="white"
                viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
          </div>

          <div className='logo rounded-full flex items-center justify-center'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="white"
                viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>

          </div>

          {/* <div className="bg-white rounded p-1">
            <img src="/path/to/twitter-logo.png" alt="Twitter Logo" className="w-8 h-8" />
          </div> */}
        </div>

      </div>

      <div className='relative bottom-half-banner'>

          <div className='flex justify-between' style={{alignItems:'baseline'}}>
            <div className='profile-pic-container'>
                <img src={job?.company?.logo_url ? job?.company?.logo_url: "/defaultImg.png"} alt="Profile Picture" className="company-logo border-2 border-white" />
            </div>

            <div className='flex items-center gap-2'>
              <svg class="h-5 w-5 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="5" x2="5" y2="21" />  <line x1="19" y1="5" x2="19" y2="14" />  <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />  <path d="M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0" /></svg>
              <p className='problem-report'>Report the problem</p>
            </div>
           
          </div>

          <div className='relative'>
            <div>
              <div>
                  <div className='flex justify-between items-center'>
                    <div className='job-title'>{job?.title? job?.title: "NA"}</div>
                    <div className='post-timeline'><span>Posted 8 Days Ago </span><span style={{color:"grey"}}>• 25 Applicants</span></div>
                  </div>

                  <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='flex flex-col gap-4'>
                      <div>{job?.company?.name?job?.company?.name:"NA"}</div>
                      <div>{job?.location?job?.location:"NA"}</div>
                    </div>
                  
                    <div className='flex justify-start lg:justify-between items-center gap-8 p-2 pl-0 lg:p-0'>
                     
                      <div className='app-btn flex items-center' style={{backgroundColor:"#f5f6fa"}}>
                        <svg class="h-5 w-5 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg> 
                        <div className='text-black font-bold'>Save</div>
                      </div>
                      
                      
                      <div className='app-btn flex'>
                        
                        <div>
                          <svg class="h-5 w-5 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                            </svg>
                        </div>
              
                          <div>Apply</div>
                          
                      </div>
                    </div>
                  </div>
              </div>
              <div>

              </div>
            </div>
          </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="py-8 flex flex-col md:flex-row gap-8">
          <div className='md:basis-2/3 first-part'>
            <div>
                  <div className='heading'>Job Overview : </div>
                  <div className='p-4 pl-0' style={{color:"#bbbcbc"}}>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  </div>
            </div>

            <div>
                <div className='heading'>Job Description :</div>
                <ul className="list-disc list-inside p-4 pl-0" style={{color:"#bbbcbc"}}>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">•</span> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">•</span> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">•</span> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </li>
                </ul>
            </div>

            <div>
                <div className='heading'>Job Requirement :</div>
                <ul className="list-disc list-inside p-4 pl-0" style={{color:"#bbbcbc"}}>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">•</span> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">•</span> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">•</span> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </li>
                </ul>
            </div>
          </div>
          <div className='md:basis-1/3 p-2 grid grid-cols-2 gap-2 second-part  flex-shrink'>
                <div className='grid-card'>
                  <div className = "align-center">Work Level</div>
                  <div className='font-bold'>Senior</div>
                </div>
                <div className='grid-card'>
                  <div className = "align-center">Work Level</div>
                  <div className='font-bold'>Senior</div>
                </div>
                <div className='grid-card'>
                  <div className = "align-center">Work Level</div>
                  <div className='font-bold'>Senior</div>
                </div>
                <div className='grid-card'>
                  <div className = "align-center">Work Level</div>
                  <div className='font-bold'>Senior</div>
                </div>
                <div className='grid-card'>
                  <div className = "align-center">Work Level</div>
                  <div className='font-bold'>Senior</div>
                </div>
                <div className='grid-card'>
                  <div className = "align-center">Work Level</div>
                  <div  className='font-bold'>Senior</div>
                </div>
          </div>
    </div>
  </div>
);
}

export default JobDetail
