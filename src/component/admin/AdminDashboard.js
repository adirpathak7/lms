import React, { Component } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom';


export default class AdminDashboard extends Component {
   render() {
       return (
           <>
               {/* <h1>User AdminDashboard</h1> */}
               <div className="w-full">
                   <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-1/5 overflow-y-auto text-center bg-gray-900">
                       <div className="text-gray-100 text-xl">
                           <div className="p-2.5 mt-1 flex items-center">
                               {/* <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600" /> */}
                               <h1 className="font-bold text-gray-200 text-[15px] ml-3">Admin Dashboard</h1>
                           </div>
                           <div className="my-2 bg-gray-600 h-[1px]" />
                       </div>


                       <Link to="/AdminDashboard">
                       <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                           <i className="bi bi-house-door-fill" />
                           <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
                       </div>
                       </Link>


                       <Link to="AdminCourses">
                           <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                               <i className="bi bi-bookmark-fill" />
                               <span className="text-[15px] ml-4 text-gray-200 font-bold">Courses</span>
                           </div>
                       </Link>


                       <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                           <i className="bi bi-box-arrow-in-right" />
                           <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
                       </div>
                   </div>


                   <div className="fixed w-4/5 h-full  right-0">
                   <div className="h-12 bg-gray-900">


                   </div>
               <div className="h-full">
                   <Outlet />
               </div>
                   </div>
               </div>
           </>
       )
   }
}
