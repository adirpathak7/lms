import React, { Component } from 'react'
import axios from 'axios'


export default class AdminCourses extends Component {
   constructor() {
       super();
       this.state = {
           data:
           {
               name: '',
               description: '',
               image: '',
               rating: '',
               price: ''
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


   handelCoursesForm = (e) => {
       e.preventDefault();
       const name = document.getElementById("name").value;
       const description = document.getElementById("description").value;
       const image = document.getElementById("image").value;
       const rating = document.getElementById("rating").value;
       const price = document.getElementById("price").value;


       if (!name) {
           document.getElementById("error-name").innerHTML = "Please enter the Name of Course!";
           document.getElementById("name").focus();
           return false;
       }


       if (!description) {
           document.getElementById("error-description").innerHTML = "Please enter the Description of Course!";
           document.getElementById("description").focus();
           return false;
       }


       if (!image) {
           document.getElementById("error-image").innerHTML = "Please upload the image of Course!";
           document.getElementById("image").focus();
           return false;
       }


       if (rating === "default") {
           document.getElementById("error-rating").innerHTML = "Please slect the Rating for Course!";
           document.getElementById("rating").focus();
           return false;
       }


       if (!price) {
           document.getElementById("error-price").innerHTML = "Please enter the Price of Course!";
           document.getElementById("price").focus();
           return false;
       }


       axios.post('http://localhost:8100/LMS/api/AddCourse', this.state.data).then(response => {
           if (!response.data.isSuccess || (response.data.data.length === 0)) {
               alert("Something went wrong!")
           } else {
               alert("Course Added Successfully!");
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
           <>
           <h1 className="text-3xl uppercase text-center ">Add Course</h1>
               <div className="w-full h-full flex justify-center mt-10">
                   <div className="bg-violet-300 w-2/4 h-2/4">
                       <form onSubmit={this.handelCoursesForm} className="text-2xl font-semibold">
                           <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 px-4">
                               <div className="md:col-span-2">
                                   <label htmlFor="name">Course Name</label>
                                   <input type="text" name="name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Course Name'
                                       onChange={this.handelChange}
                                       value={this.state.data.name}
                                   />
                                   <span id='error-name' className='error-message'></span>
                               </div>
                               <div className="md:col-span-2">
                                   <label htmlFor="description">Course Description</label>
                                   <textarea name="description" id="description" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Course Description'
                                       onChange={this.handelChange}
                                       value={this.state.data.description}
                                   />
                                   <span id='error-description' className='error-message'></span>
                               </div>
                               <div className="md:col-span-2">
                                   <label htmlFor="image">Image</label>
                                   <input type="file" name="image" id="image" accept=".png, .jpg, .jpeg" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Upload Profile Picture"
                                       onChange={this.handelChange}
                                   />
                                   <span id='error-image' className='error-message'></span>
                               </div>
                               <div className="md:col-span-2">
                                   <label htmlFor="rating">Course Rating</label>
                                   <select name="rating" id="rating" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                       onChange={this.handelChange}
                                       value={this.state.data.rating}>
                                       <option value="default">Select Rating</option>
                                       <option value="1">1</option>
                                       <option value="2">2</option>
                                       <option value="3">3</option>
                                       <option value="4">4</option>
                                       <option value="5">5</option>
                                   </select>
                                   <span id='error-rating' className='error-message'></span>
                               </div>
                               <div className="md:col-span-2">
                                   <label htmlFor="price">Course Price</label>
                                   <input type="text" name="price" id="price" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Course Price'
                                       onChange={this.handelChange}
                                       value={this.state.data.price}
                                   />
                                   <span id='error-price' className='error-message'></span>
                               </div>
                               <div className="mt-6">
                                   <button type='submit' className="bg-purple-400 hover:bg-violet-300 text-white font-bold py-2 px-4 rounded">Submit</button>
                               </div>


                               <div className="mt-6 mr-3.5">
                                   <button type='reset' className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Cancel</button>
                               </div>
                           </div>
                       </form>
                   </div>
               </div>
           </>
       )
   }
}