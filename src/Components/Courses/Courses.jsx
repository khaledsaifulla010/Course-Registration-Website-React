import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import Cart from "./Cart";

const Courses = () => {

    const [courses, setCourses] = useState([]);
    const [selectCourse, setSelectCourse] = useState([]);
    const [remainingCredits, setRemainingCredits] = useState(0)
    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data  => setCourses(data))
    },[]);

    const handleSelectButton = (course) => {
        const isExist = selectCourse.find(findItem => findItem.id == course.id);

        let totalCredits =  course.credits;
        if(isExist){
           return alert("Already Selected This Course!");
        }
          else{

            selectCourse.forEach(newCredits => {   
                totalCredits = totalCredits + newCredits.credits
            })

            
            const totalRemainingCredits = 21 - totalCredits;
            if(totalRemainingCredits >= 0){
                setRemainingCredits(totalRemainingCredits);
                setSelectCourse([...selectCourse, course]);
            }
            else{
                
                alert("Credits Limits Exist!")
            }
        

            
          }
    };
    return (
        <div className=" ml-6 flex">

           <div className="grid grid-cols-3 gap-y-8  mt-6">
           {
                courses.map(course =>
                     <Course
                      key={courses.id} 
                      handleSelectButton = {handleSelectButton}
                      course = {course} ></Course> )
            }
           </div>
           <div className="mr-2">
            <div className="w-[312px] h-[402px] text-center border-2  mt-7">
            <Cart 
            selectCourse = {selectCourse}
            remainingCredits = {remainingCredits}
            
            ></Cart>
        </div>
        </div>
        </div>
    );
};

export default Courses;