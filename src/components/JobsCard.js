import React, { useState,useEffect } from 'react'
import {useNavigate} from "react-router-dom";
import "./JobsCard.css";

function JobsCard({job}) {

  const [topSectionColor, setTopSectionColor] = useState('');
  const navigate = useNavigate();
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }


  useEffect(() => {

    const randomLightColor = () => {
      const randomValue = () => Math.floor(Math.random() * 56) + 200; 
      return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
    };

    const color = randomLightColor();
    setTopSectionColor(color);
  }, []);


  const topSectionStyle = {
    background: topSectionColor,
    borderRadius:'20px'
  };


    return (
      <div className="cardStyle bg-white rounded-lg shadow p-3 rounded-full">
        <div style={topSectionStyle} className='p-4 rounded'>

          <div className="flex justify-between">
            <p className="text-sm text-gray-500 dateButtonStyle">{formatDate(job.created_date)}</p>
            <div className='bg-white rounded-full w-10 h-10 flex justify-center items-center'>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
            <path d="M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18l-7-4-7 4V3z" />
          </svg>
            </div>
          </div>

          <div className='mt-8'>
              <p className="text-sm">{job.company.name}</p>
          </div>

          <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">{job.title}</p>
            <img src={job.company.logo_url} alt="Company Logo" className="w-10 h-10 rounded-full" />
          </div>
    
          <div className="flex flex-wrap mt-4">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-gray-600 rounded-full px-2 py-1 text-xs mr-2 mb-2 tagButtonStyle"
              >
                {tag}
              </span>
            ))}
          </div>
          </div>

          <div className="mt-4 flex justify-between items-center p-2">
          <div className='flex flex-col'> 
            <p className="font-bold fontS-20">${job.hourly_rate}/hr</p>
            <div className='fontS-14'>{job.location}</div>
          </div>
          <button
            className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800"
            onClick={() => {
             navigate("/jobDetail",{state:job.title});
            }}
          >
            Details
          </button>
        </div>
      </div>
    );
}

export default JobsCard;
