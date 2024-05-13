import React, { Component } from 'react';
import axios from 'axios';
import Load from './Load';

export default class Courses extends Component {
    constructor() {
        super();
        this.state = {
            courses: [],
            isLoading: false
        };

        // Bind the getCourses method to the component instance
        // this.getCourses = this.getCourses.bind(this);
    }

    async componentDidMount() {
        // Set isLoading to true initially
        this.setState({ isLoading: true });
        await this.getCourses();
    }

    async getCourses() {
        try {
            const response = await axios.get('http://localhost:8100/LMS/api/courses');
            this.setState({ courses: response.data.data });
            console.log(response.data.data); // Log the response for debugging

            // Delay for minimum 1 second before setting isLoading to false
            setTimeout(() => {
                this.setState({ isLoading: false });
                console.log("data avilable");
            }, 1000);
        } catch (error) {
            console.error("Error fetching data:", error);

            this.setState({ isLoading: false });
            console.log("error occured");
        }
    }

    render() {
        const { isLoading, courses } = this.state;
        return (
            <>
                {isLoading ?
                    <Load />
                    : (
                        <>
                            <h1 className="text-center text-3xl font-bold mt-5">All Courses</h1>
                            <div className="w-full h-full flex m-auto gap-x-7 gap-y-7 py-10 px-16 flex-wrap justify-start items-center">
                                {courses?.map(item => (
                                    <div key={item.courseId} className="h-2/5 w-[23.2%] bg-slate-50 shadow hover:shadow-2xl rounded-md py-4 px-6 ">
                                        <p className="w-full h-28 flex justify-center">
                                            <img className="" src={item.image} alt="Book's" />
                                        </p>
                                        <h1 className="font-bold text-xl">{item.name}</h1>
                                        <h1 className="text-md truncate"> {item.description}</h1>
                                        <div className="flex justify-between font-semibold mt-3">
                                            <div className="">${item.price}</div>
                                            <div className="">{item.rating}/5</div>
                                        </div>
                                        <div className="flex justify-center mt-2">
                                            <button className="bg-sky-400 rounded w-24 h-9 text-center ">Enroll</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
            </>
        );
    }
}
