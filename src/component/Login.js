import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
// import Home from './Home'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    handelLoginForm = (e) => {
        e.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var mail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

        if (email === "admin@gmail.com" && password === "admin") {
            alert("Login Successfully.");
            console.log("Done");
            this.setState({ isLogin: true });
        } else {
            if (!email) {
                document.getElementById("error-email").innerHTML = "Please enter the Email I'd!";
                document.getElementById("email").focus();
                return false;
            } else {
                document.getElementById("error-email").innerHTML = "";
            }

            if (!email.match(mail)) {
                document.getElementById("error-email").innerHTML = "Invalid Email ID!";
                document.getElementById("email").focus();
                return false;
            } else {
                document.getElementById("error-email").innerHTML = "";
            }

            if (!password) {
                document.getElementById("error-password").innerHTML = "Please enter Password!";
                document.getElementById("password").focus();
                return false;
            } else {
                document.getElementById("error-password").innerHTML = "";
            }

            document.getElementById("error-password").innerHTML = "Invalid Password!";
            document.getElementById("password").focus();
            return false;

        }
    }

    render() {
        if (this.state.isLogin) {
            return <Navigate to="/Home.js" />;
        }
        return (
            <>
                {/* {this.state.isLogin ? <Home /> : ( */}
                    <div className='flex flex-col items-center justify-center mt-4 px-4 py-6 mx-auto md:h-screen lg:py-0 overflow-hidden'>
                        <div className='w-full bg-white rounded-lg shadow dark:border mb-40 md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-300'>
                            <div className='p-6 space-y-4 md:space-y-6 sm:p-8 justify-center items-center'>
                                <img src='../images/donoricon.jpg' alt='Login' />
                            </div>

                            <form className='space-y-4 md:space-y-6 m-2' onSubmit={this.handelLoginForm}>
                                <div>
                                    <div>
                                        <label htmlFor='email' className='block mb-2 text-lg font-medium text-gray-900 dark:text-black'>Email<span className='text-red-500'>*</span></label>
                                        <input type='text' name='email' id='email' placeholder='user@gmail.com' className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                            onChange={this.handelInput} />
                                        <span id='error-email' className='error-message'></span>
                                    </div>

                                    <div className='mt-2'>
                                        <label htmlFor='password' className='block mb-2 text-lg font-medium text-gray-900 dark:text-black'>Password<span className='text-red-500'>*</span></label>
                                        <input type='password' name='password' id='password' placeholder='Password' className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-10'
                                            onChange={this.handelInput} />
                                        <i className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 fas fa-eye-slash' id='togglePassword'></i>
                                    </div>
                                    <span id='error-password' className='error-message'></span>
                                </div>

                                <div className='flex justify-center text-2xl md:mt-0'>
                                    <button type='submit' className='px-6 py-3 leading-5 text-white uppercase transition-colors duration-200 transform bg-gray-600 rounded-md hover:bg-violet-400 focus:outline-none focus:bg-gray-600 '>
                                        Login
                                    </button>
                                </div>

                                <div className='flex items-center'>
                                    <Link to="/Login" className='text-lg font-medium text-primary-600 hover:underline dark:text-primary-500'>Forgot
                                        Password?</Link>
                                </div>

                                <p className='text-lg text-black'>
                                    Don’t have an account yet? <Link to="/" className='font-medium text-black text-2xl hover:underline hover:text-blue-800  dark:text-black'>Register</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                {/* )} */}
            </>
        );
    }
}
