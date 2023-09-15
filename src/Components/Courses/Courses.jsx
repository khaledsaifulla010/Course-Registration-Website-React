import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import Cart from "./Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Courses = () => {

    const [courses, setCourses] = useState([]);
    const [selectCourse, setSelectCourse] = useState([]);
    const [remainingCredits, setRemainingCredits] = useState(20);
    const [credits, setCredits] = useState(0);
    const [price, setPrice] = useState(0);
    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data  => setCourses(data))
    },[]);

    const handleSelectButton = (course) => {
        const isExist = selectCourse.find(findItem => findItem.id == course.id);

        let totalCredits =  course.credits;
        let totalPrice = course.price;
        if(isExist){
           toast("Already Selected This Course!");
           
        }
          else{

            selectCourse.forEach(newCredits => {   
                totalCredits = totalCredits + newCredits.credits
            })

            selectCourse.forEach(newPrice => {
                totalPrice = totalPrice + newPrice.price
            })

            
            const totalRemainingCredits = 20 - totalCredits;
    
           
            if(totalRemainingCredits >= 0){
                setRemainingCredits(totalRemainingCredits);
                setSelectCourse([...selectCourse, course]);
                setCredits(totalCredits);
                setPrice(totalPrice)
            }
            else{
                
                toast("You Have Not Enough Credit Hour!");
            }
        

            
          }
    };
    return (
        <div className=" ml-6 flex mb-12">

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
            <div className="w-[312px] h-[460px] text-center border-2  mt-7 rounded-xl">
            <Cart 
            selectCourse = {selectCourse}
            remainingCredits = {remainingCredits}
            credits = {credits}
            price = {price}
            ToastContainer = {ToastContainer}
            
            ></Cart>
        </div>
        </div>
        </div>
    );
};

export default Courses;