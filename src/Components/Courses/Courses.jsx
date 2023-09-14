import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {

    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data  => setCourses(data))
    },[])
    return (
        <div className="w-5/6 ml-6">

           <div className="grid grid-cols-3 gap-y-8  mt-6">
           {
                courses.map(course => <Course key={courses.id} course = {course} ></Course> )
            }
           </div>
        </div>
    );
};

export default Courses;