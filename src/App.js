import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './component/Home';
import Login from './component/Login';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} /> 
              <Route path='/Login.js' element={<Login/>}/>
            {/* </Route> */}
          </Routes>
        </Router>
      </>
    )
  }
}
