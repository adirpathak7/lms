import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Courses from './component/Courses';
import Login from './component/Login';
import Register from './component/Register';
import Load from './component/Load';
import Dashboard from './component/user/Dashboard';
import AdminLogin from './component/admin/AdminLogin';
import AdminDashboard from './component/admin/AdminDashboard';
import AdminCourses from './component/admin/AdminCourses';


export default class App extends Component {
  render() {
    return (
      <>

        <Router>
          <Routes>
            {/* <Navbar /> */}
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path='/Courses' element={<Courses />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Register' element={<Register />} />
              <Route path='/Load' element={<Load />} />
            </Route>
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/AdminLogin' element={<AdminLogin />} />


            <Route path='/AdminDashboard' element={<AdminDashboard />} >
              <Route path='AdminCourses' element={<AdminCourses />} />
            </Route>
          </Routes>
        </Router>
        <div className="">


          {/* <form className="bg-gray-300 max-w-sm mx-auto mb-10">
           <div className="mb-5">
             <h1 className="text-center">Login Form {this.a} </h1>
           </div>
           <div className="justify-items-center">
             <div className="mb-5">
               <label htmlFor="email">Email</label>
               <input className="" type="email" name="email" id="email" />
             </div>
             <div className="mb-5">
               <label htmlFor="password">Password</label>
               <input className="" type="password" name="password" id="password" />
             </div>


             <div className="mb-5 ">
               <button className="" type="button">Login</button>
               <button className="ml-8" type="reset">Cancel</button>
             </div>
           </div>
           <div>
           </div>
         </form>
         <p>You clicked {this.state.count} times</p>
         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
           Click me
       </button>


         <button onClick={() => this.setState({ count: this.state.count = 0 })}>Clear</button> */}
        </div>
      </>
    )
  }
}
