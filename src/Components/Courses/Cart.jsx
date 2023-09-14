import PropTypes from 'prop-types';
const Cart = ({selectCourse, remainingCredits, credits, price}) => {
    return (
        <div>
            <div className='border-2 m-4 p-2 rounded-xl'>
                <h3 className='font-semibold text-red-600 text-lg'>Credit Hour Remaining {remainingCredits} hr </h3>

            </div>
            <div className='border-2 m-4 p-2 rounded-xl '>
                <h3 className='mb-4 font-semibold mt-2 text-purple-600 text-lg'>Course Name : </h3>
            {
                selectCourse.map(course => (
                    <li className='text-left ml-4' key={course.id}> {course.name} </li>
                ))
            }
            </div>
            <div>
                <h3 className='border-2 m-4 p-2 rounded-xl font-semibold text-green-600 text-lg'>Total Credit Hour : {credits} </h3>
            </div>
            <div>
                <h3 className='border-2 m-4 p-2 rounded-xl font-semibold text-amber-600 text-lg'>Total Price : {price} USD </h3>
            </div>
        </div>
    );
};

Cart.propTypes = {
    selectCourse: PropTypes.object.isRequired,
    remainingCredits: PropTypes.object.isRequired,
    credits: PropTypes.object.isRequired,
    price : PropTypes.object.isRequired
}

export default Cart;