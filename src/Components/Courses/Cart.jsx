import PropTypes from 'prop-types';
const Cart = ({selectCourse, remainingCredits}) => {
    return (
        <div>
            <div className='border-b-2 p-4'>
                <h3>Credit Hour Remaining {remainingCredits} hr </h3>

            </div>
            <div>
                <h3 className='mb-4 font-semibold mt-4'>Course Name : </h3>
            {
                selectCourse.map(course => (
                    <li className='text-left ml-4' key={course.id}> {course.name} </li>
                ))
            }
            </div>
        </div>
    );
};

Cart.propTypes = {
    selectCourse: PropTypes.object.isRequired,
    remainingCredits: PropTypes.object.isRequired
}

export default Cart;