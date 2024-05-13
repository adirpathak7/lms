import React, { Component } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom';
import userIcon from '../../images/donoricon.jpg'


export class AdminLogin extends Component {


    constructor() {
        super();
        this.state = {
            data:
            {
                email: '',
                password: '',
            },
            isAdminLogin: false
        }
    }


    handelChange = (e) => {
        const { name, value } = e.target;
        this.clearError(`error-${name}`);
        this.setState({
            data: {
                ...this.state.data, [name]: value
            }
        })
    }


    clearError = (id) => {
        document.getElementById(id).innerHTML = "";
    }


    handelAdminLoginForm = (e) => {
        e.preventDefault();


        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const mail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;


        if (!email) {
            document.getElementById("error-email").innerHTML = "Please enter the Email I'd!";
            document.getElementById("email").focus();
            return false;
        }


        if (!email.match(mail)) {
            document.getElementById("error-email").innerHTML = "Invalid Email ID!";
            document.getElementById("email").focus();
            return false;
        }


        if (!password) {
            document.getElementById("error-password").innerHTML = "Please enter Password!";
            document.getElementById("password").focus();
            return false;
        }


        axios.post('http://localhost:8100/LMS/api/AdminLoginEmp', this.state.data).then(response => {
            console.log(response.data);
            if (!response.data.data || (response.data.data.length === 0) || (response.data.data === null)) {
                document.getElementById("error-password").innerHTML = "Invalid Password!";
                document.getElementById("password").focus();
                return false;
            } else {
                alert("Login Successfully!");
                this.setState({ isAdminLogin: true });
            }
            console.log(response.data);
        }).catch(error => {
            console.log("Error occure" + error);
            alert("Something went wrong. Please try later.")
        })
    }


    render() {
        if (this.state.isAdminLogin) {
            return <Navigate to="/AdminDashboard" />;
        }
        return (
            <>
                <div className='flex flex-col items-center justify-center mx-auto lg:py-0 mt-24'>
                    <div className='w-full bg-white rounded-lg shadow dark:border mb-36 md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-300 overflow-hidden'>
                        <div className='flex justify-center space-y-2 md:space-y-6 sm:p-8'>
                            <img className='h-20' src={userIcon} alt='AdminLogin' />
                        </div>


                        <form className='space-y-2 md:space-y-6 mx-2' onSubmit={this.handelAdminLoginForm}>
                            <div>
                                <div>
                                    <label htmlFor='email' className='block mb-2 text-lg font-medium text-gray-900 dark:text-black'>Email<span className='text-red-500'>*</span></label>
                                    <input type='text' name='email' id='email' placeholder='user@gmail.com' className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                        onChange={this.handelChange}
                                        value={this.state.data.email}
                                    />
                                    <span id='error-email' className='error-message'></span>
                                </div>


                                <div className='mt-2'>
                                    <label htmlFor='password' className='block mb-2 text-lg font-medium text-gray-900 dark:text-black'>Password<span className='text-red-500'>*</span></label>
                                    <input type='password' name='password' id='password' placeholder='Password' className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-10'
                                        onChange={this.handelChange}
                                        value={this.state.data.password}
                                    />
                                    <i className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 fas fa-eye-slash' id='togglePassword'></i>
                                </div>
                                <span id='error-password' className='error-message'></span>
                            </div>


                            <div className='flex justify-center text-2xl md:mt-0'>
                                <button type='submit' className='px-6 py-3 leading-5 text-black uppercase transition-colors duration-200 transform bg-violet-200 rounded-md hover:bg-violet-400 focus:outline-none mb-5'>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}


export default AdminLogin


