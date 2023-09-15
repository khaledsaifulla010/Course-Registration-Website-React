import { FaDollarSign } from 'react-icons/fa';
import { FaBookOpen} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
const Course = ({course, handleSelectButton}) => {

    const {img, name, details, price, credits} = course
    return (
        
            <div className="border-2 w-[320px] h-[430px] p-4 rounded-xl mr-4">
            <img className="-mt-1" src= {img} />
            <h3 className="text-lg mt-4 font-semibold text-center">{name} </h3>
            <p className=" text-justify text-[16px] mt-4"> {details} </p>
            <div className='flex items-center gap-2'>
                <div className='mt-4 flex items-center gap-2'>
                    <h4><FaDollarSign></FaDollarSign></h4>
                    <h3 className='text-lg font-semibold'>Price : {price}  </h3>
                </div>
                <div className='mt-4 flex items-center gap-2'>
                    <h4> <FaBookOpen></FaBookOpen></h4>
                    <h3 className='text-lg font-semibold'>Credit : {credits}  hr</h3>
                </div>
            </div>
            
            <button className='w-full mt-4 bg-blue-600 p-2 rounded-xl text-white font-semibold' onClick={() => handleSelectButton (course)}>Select</button>
            <ToastContainer></ToastContainer>
            
        </div>
        
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelectButton : PropTypes.func.isRequired
}

export default Course;