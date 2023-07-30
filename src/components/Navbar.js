import React, { useState } from 'react'
import "./Navbar.css";

function Navbar() {

    const [mobileMenu,setMobileMenu] = useState(false);
    const [filter,setFilter] = useState(false);

    const handleMobileMenu = () => {
        setFilter(false);
        setMobileMenu(mobileMenu => !mobileMenu);
    }

    const handleFilter = () => {
        setMobileMenu(false);
        setFilter(filter => !filter);
    }
    
  return (
    <div className='navbar bg-black'>

        <div className='flex justify-between p-4 lg:p-0'>
            
            <div onClick={handleMobileMenu} className='mobile-menu'>
                <svg class="h-5 w-5 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
            </svg>

            </div>

            <div onClick={handleFilter} className='mobile-filter'>
            <svg class="h-5 w-5 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5" /></svg>
            </div>

        </div>

        <div className={`${mobileMenu ? "openMenu" : ""} navbar-section-1 flex flex-col lg:flex-row justify-between items-center gap-4`} style={{borderBottom:"1px solid grey"}}>
                    
            <div class="text-sm ml-15p font-medium text-center text-gray-500 dark:text-gray-400 ">
                <ul class="flex flex-col lg:flex-row flex-wrap -mb-px">
                    <li class="mr-2">
                        <a href="#" class="inline-block p-4 lg:p-8 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Find Job</a>
                    </li>
                    <li class="mr-2">
                        <a href="#" class="inline-block p-4 lg:p-8 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Messages</a>
                    </li>
                    <li class="mr-2">
                        <a href="#" class="inline-block p-4 lg:p-8 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Hiring</a>
                    </li>
                    <li class="mr-2">
                        <a href="#" class="inline-block p-4 lg:p-8 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Community</a>
                    </li>
                    <li>
                        <a class="inline-block p-4 lg:p-8 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">FAQ</a>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col mr-6p lg:flex-row justify-between gap-4 lg:gap-16'>
                <div className='flex items-center'>
                <svg class="h-5 w-5 text-red-300"  fill="none" viewBox="0 0 24 24" stroke="white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>


                    <span className = "text-white fontS-14">NewYork, NY</span>
                </div>

                <div className='flex items-center justify-between gap-2'>
                <div className = "profile"></div>
                <div className = "center-div setting"> <svg class="h-5 w-5 text-red-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg>
                </div>
                
                <div className = "center-div notification">
                <svg class="h-5 w-5 text-red-300"  fill="none" viewBox="0 0 24 24" stroke="white">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
</svg>
</div>
                </div>
            </div>

        </div>

        <div  className={`${filter ? "openFilter" : ""}navbar-section-2 flex flex-col lg:flex-row justify-between`} style={{padding:"20px"}}>
            <div className='nav-box flex gap-4 items-center br-grey'>
                <div className='flex gap-4 items-center'>
                    <div className = "center-div nav-icons"><svg class="h-5 w-5 text-red-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
                    </div>
                    <span className='text-white'>Designer</span>
                </div>

                <div>
                    <svg class="h-5 w-5 text-red-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M18 15l-6-6l-6 6h12" transform="rotate(180 12 12)" /></svg>
                </div>
            </div>

            <div className='nav-box flex gap-4 items-center br-grey'>
                <div className='flex gap-4 items-center'>
                <div className = "center-div nav-icons">
                    <svg class="h-5 w-5 text-red-300"  fill="none" viewBox="0 0 24 24" stroke="white">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                </div>
                <span className='text-white'>Work Location</span>
                </div>

                <div>
                <svg class="h-5 w-5 text-red-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M18 15l-6-6l-6 6h12" transform="rotate(180 12 12)" /></svg>
                </div>
            </div>

            <div className='nav-box flex gap-4 items-center br-grey'>
                <div className='flex gap-4 items-center'>
                    <div className = "center-div nav-icons"><svg class="h-5 w-5 text-red-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="2" />  <path d="M4 13h3l3 3h4l3 -3h3" /></svg>
                     </div>
                     <span className='text-white'>Experience</span>
                </div>

                <div>
                <svg class="h-5 w-5 text-red-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M18 15l-6-6l-6 6h12" transform="rotate(180 12 12)" /></svg>  
                </div>
            </div>

            <div className='flex gap-4 items-center br-grey nav-box'>   
                <div className='flex gap-4 items-center'>
                    <div className='nav-icons center-div'>
                    <svg class="h-5 w-5 text-red-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <rect x="8" y="15" width="2" height="2" /></svg>
                    </div>
                    <span className='text-white'>Per Month</span>
                </div>

                <div>
                <svg class="h-5 w-5 text-red-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M18 15l-6-6l-6 6h12" transform="rotate(180 12 12)" /></svg>
                </div>
                
            </div>

            <div style={{padding:"20px"}}>
                <div className='flex' style={{paddingBottom:"10px"}}>
                    <span className='mr-4 text-white'>Salary Range</span>
                    <span className='text-white'>$12,00 - $20,000</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                <div className="bg-blue-600 h-1 rounded-full" style={{width: "10%"}}></div>
                </div>

            </div>

        </div>      
    </div>
  )
}

export default Navbar
