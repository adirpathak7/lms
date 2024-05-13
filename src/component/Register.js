import React, { Component } from 'react'
import axios from 'axios'


export default class Register extends Component {
   constructor() {
       super();
       this.state = {
           data:
           {
               firstName: '',
               lastName: '',
               email: '',
               contact: '',
               area: '',
               country: '',
               state: '',
               city: '',
               zipcode: '',
               profilePicture: '',
               password: ''
           }
       }
   }


   handelChange = (e) => {
       const { name, value, type } = e.target;


       if (type === 'file') {
           const file = e.target.files[0];
           const reader = new FileReader();
           reader.onloadend = () => {
               this.setState({
                   data: {
                       ...this.state.data,
                       [name]: reader.result
                   }
               });
           };
           reader.readAsDataURL(file);
       } else {
           this.clearError(`error-${name}`);
           this.setState({
               data: {
                   ...this.state.data, [name]: value
               }
           })
       }
   }


   clearError = (id) => {
       document.getElementById(id).innerHTML = "";
   }


   handelRegisterForm = (e) => {
       e.preventDefault();
       const firstName = document.getElementById("firstName").value;
       const lastName = document.getElementById("lastName").value;
       const email = document.getElementById("email").value;
       const contact = document.getElementById("contact").value;
       const area = document.getElementById("area").value;
       const country = document.getElementById("country").value;
       const state = document.getElementById("state").value;
       const city = document.getElementById("city").value;
       const zipcode = document.getElementById("zipcode").value;
       const profilePicture = document.getElementById("profilePicture").value;
       const password = document.getElementById("password").value;
       const cpass = document.getElementById("cpass").value;
       const mail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
       const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,}$/;
       const validContact = /^[6-9]\d{9}$/;
       const validZipcode = /^\d{5,6}$/;


       if (!firstName) {
           document.getElementById("error-firstName").innerHTML = "Please enter the First Name!";
           document.getElementById("firstName").focus();
           return false;
       }


       if (!lastName) {
           document.getElementById("error-lastName").innerHTML = "Please enter the Last Name!";
           document.getElementById("lastName").focus();
           return false;
       }


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


       if (!contact) {
           document.getElementById("error-contact").innerHTML = "Please enter the Contact Number!";
           document.getElementById("contact").focus();
           return false;
       }


       if (!contact.match(validContact)) {
           document.getElementById("error-contact").innerHTML = "Invalid Contact Number!";
           document.getElementById("contact").focus();
           return false;
       }


       if (!area) {
           document.getElementById("error-area").innerHTML = "Please enter the Area!";
           document.getElementById("area").focus();
           return false;
       }


       if (country === "default") {
           document.getElementById("error-country").innerHTML = "Please select the Country!";
           document.getElementById("country").focus();
           return false;
       }


       if (state === "default") {
           document.getElementById("error-state").innerHTML = "Please select the State!";
           document.getElementById("state").focus();
           return false;
       }


       if (city === "default") {
           document.getElementById("error-city").innerHTML = "Please select the City!";
           document.getElementById("city").focus();
           return false;
       }


       if (!zipcode) {
           document.getElementById("error-zipcode").innerHTML = "Please enter the Zipcode!";
           document.getElementById("zipcode").focus();
           return false;
       }


       if (!zipcode.match(validZipcode)) {
           document.getElementById("error-zipcode").innerHTML = "Invalid Zipcode Number!";
           document.getElementById("zipcode").focus();
           return false;
       }


       if (!profilePicture) {
           document.getElementById("error-profilePicture").innerHTML = "Please upload the Profile Picture!";
           document.getElementById("profilePicture").focus();
           return false;
       }


       if (!password) {
           document.getElementById("error-password").innerHTML = "Please enter Password!";
           document.getElementById("password").focus();
           return false;
       }


       if (!password.match(validPassword)) {
           document.getElementById("error-password").innerHTML = "Weak Password please include bellow inormation's: <br/>Password must be contains at least 8 digit.<br/>At least one lowercase alphabet<br/> At least one uppercase alphabet<br/> At least one Numeric digit<br/> At least one special character<br/>";
           document.getElementById("password").focus();
           return false;
       }


       if (!cpass) {
           document.getElementById("error-cpass").innerHTML = "Please enter Confirm Password!";
           document.getElementById("cpass").focus();
           return false;
       }


       if(password !== cpass){
           document.getElementById("error-cpass").innerHTML = "Password and Confirm Password can't be match!";
           document.getElementById("cpass").focus();
           return false;
       }


       axios.post('http://localhost:8100/LMS/api/register', this.state.data).then(response => {
           if (!response.data.isSuccess || (response.data.data.length === 0)) {
               alert("Something went wrong!")
           } else {
               alert("Registered Successfully!");
               // this.setState({ isLogin: true });
           }
           console.log(response.data);
           // console.log(typeof(response.data.isSuccess));
       }).catch(error => {
           console.log("Error occure" + error);
           alert("Something went wrong. Please try later.")
       })
   }


   render() {
       return (
           <div>
               <div className="min-h-screen p-6 bg-violet-300 flex items-center justify-center">
                   <div className="container max-w-screen-lg mx-auto">
                       <div>
                           <h2 className="font-semibold hover:font-bold text-3xl text-black mb-6 text-center">Register Form</h2>
                           <div className="rounded shadow-lg p-4 px-4 md:p-8 mb-6 bg-violet-200">
                               <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                   <div className="text-gray-600">
                                       <p className="font-medium text-lg">Personal Details</p>
                                       <p>Please fill out all the fields.</p>
                                   </div>
                                   <div className="lg:col-span-2">
                                       <form onSubmit={this.handelRegisterForm}>
                                           <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                               <div className="md:col-span-2">
                                                   <label htmlFor="firstName">Full Name</label>
                                                   <input type="text" name="firstName" id="firstName" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Enater First Name'
                                                       onChange={this.handelChange}
                                                       value={this.state.data.firstName}
                                                   />
                                                   <span id='error-firstName' className='error-message'></span>
                                               </div>
                                               <div className="md:col-span-2">
                                                   <label htmlFor="lastName">Last Name</label>
                                                   <input type="text" name="lastName" id="lastName" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Enater Last Name'
                                                       onChange={this.handelChange}
                                                       value={this.state.data.lastName}
                                                   />
                                                   <span id='error-lastName' className='error-message'></span>
                                               </div>
                                               <div className="md:col-span-4">
                                                   <label htmlFor="email">Email</label>
                                                   <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='email@gmail.com'
                                                       onChange={this.handelChange}
                                                       value={this.state.data.email}
                                                   />
                                                   <span id='error-email' className='error-message'></span>
                                               </div>
                                               <div className="md:col-span-2">
                                                   <label htmlFor="contact">Contact No.</label>
                                                   <input type="number" name="contact" id="contact" maxLength="10" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Enter Contact Number'
                                                       onChange={this.handelChange}
                                                       value={this.state.data.contact}
                                                   />
                                                   <span id='error-contact' className='error-message'></span>
                                               </div>
                                               <div className="md:col-span-2">
                                                   <label htmlFor="area">Area</label>
                                                   <input type="text" name="area" id="area" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Enter Area'
                                                       onChange={this.handelChange}
                                                       value={this.state.data.area}
                                                   />
                                                   <span id='error-area' className='error-message'></span>
                                               </div>
                                               <div className="md:col-span-2">
                                                   <label htmlFor="country">Country</label>
                                                   <select name="country" id="country" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                       onChange={this.handelChange}
                                                       value={this.state.data.country}>
                                                       <option value="default">Select Country</option>
                                                       <option value="India">India</option>
                                                   </select>
                                                   <span id='error-country' className='error-message'></span>
                                               </div>
                                               <div className="md:col-span-2">
                                                   <label htmlFor="state">State</label>
                                                   <select name="state" id="state" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                       onChange={this.handelChange}
                                                       value={this.state.data.state}>
                                                       <option value="default">Select State</option>
                                                       <option value="Gujrat">Gujrat</option>
                                                   </select>
                                                   <span id='error-state' className='error-message'></span>
                                               </div>
                                               <div className="md:col-span-2">
                                                   <label htmlFor="city">City</label>
                                                   <select name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                       onChange={this.handelChange}
                                                       value={this.state.data.city}>
                                                       <option value="default">Select City</option>
                                                       <option value="Surat">Surat</option>
                                                   </select>
                                                   <span id='error-city' className='error-message'></span>
                                               </div>
                                               <div className="md:col-span-2">
                                                   <label htmlFor="zipcode">Zipcode</label>
                                                   <input type="number" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Enter Zipcode"
                                                       onChange={this.handelChange}
                                                       value={this.state.data.zipcode} />
                                                   <span id='error-zipcode' className='error-message'></span>
                                               </div>
                                               <div className="md:col-span-2">
                                                   <label htmlFor="profilePicture">Profile Picture</label>
                                                   <input type="file" name="profilePicture" id="profilePicture" accept=".png, .jpg, .jpeg" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Upload Profile Picture"
                                                       onChange={this.handelChange}
                                                   />
                                                   <span id='error-profilePicture' className='error-message'></span>
                                               </div>
                                               <div className="md:col-span-2">
                                                   <label htmlFor="password">Password</label>
                                                   <input type="password" name="password" id="password" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Enter Password"
                                                       onChange={this.handelChange}
                                                       value={this.state.data.password} />
                                                   <span id='error-password' className='error-message'></span>
                                               </div>
                                               <div className="md:col-span-2">
                                                   <label htmlFor="cpass">Confirm Password</label>
                                                   <input type="password" name="cpass" id="cpass" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Enter Confirm Password" />
                                                   <span id='error-cpass' className='error-message'></span>
                                               </div>
                                               {/* <div className=""> */}
                                               <div className="mt-6">
                                                   <button type='submit' className="bg-purple-400 hover:bg-violet-300 text-white font-bold py-2 px-4 rounded">Submit</button>
                                               </div>


                                               <div className="mt-6 mr-3.5">
                                                   <button type='reset' className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Cancel</button>
                                               </div>
                                               {/* </div> */}
                                           </div>
                                       </form>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       )
   }
}


// display image = <img src=row.profilePicture
