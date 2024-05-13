import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'
import lmslogo from '../images/lmslogo.jpg'


export default class Navbar extends Component {
   render() {
       return (
           <div>
               <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
                   <h1 className="w-12 h-12">
                       <a href="/" className='hover:text-purple-400 duration-200 font-bold'>
                           <img src={lmslogo} alt="LMS Logo" />
                       </a>
                   </h1>
                   <nav className="nav font-semibold text-lg">
                       <ul className="flex items-center">
                           <li className="p-4 border-b-2 border-purple-400 border-opacity-0 hover:border-opacity-100 hover:text-purple-400 duration-200 cursor-pointer active">
                               <Link to="/">Home</Link>
                           </li>
                           <li className="p-4 border-b-2  border-purple-400 border-opacity-0 hover:border-opacity-100 hover:text-purple-400 duration-200 cursor-pointer">
                               <Link to="/Courses">Courses</Link>
                           </li>
                           <li className="p-4 border-b-2 border-purple-400 border-opacity-0 hover:border-opacity-100 hover:text-purple-400 duration-200 cursor-pointer">
                               <Link to="/">Guide</Link>
                           </li>
                           <li className="p-4 border-b-2 border-purple-400 border-opacity-0 hover:border-opacity-100 hover:text-purple-400 duration-200 cursor-pointer">
                               <Link to="/">Contact</Link>
                           </li>
                       </ul>
                   </nav>
                   <div className="w-3/12 flex justify-end">
                       <Link to="/Login" className='text-lg font-bold bg-violet-200 hover:bg-purple-400 rounded-md w-32 h-10 text-center items-center px-2 py-1'>
                           Login
                       </Link>
                   </div>
               </header>
               <div>
                   <Outlet/>
               </div>
           </div>
       )
   }
}
