
import PropTypes from 'prop-types';
const CartCooking = ({ cartCooking }) => {
    const { recipe_name, preparing_time, calories } = cartCooking;

    return (
        <div>
            <div className="overflow-x-auto">


                <table className="table">

                    <tbody>
                        {/* rows */}
                        {
                            <tr>

                                <td>{recipe_name}</td>
                                <td>{preparing_time}</td>
                                <td>{calories}</td>

                            </tr>
                        }

                    </tbody>
                </table>

            </div>
        </div>
    );
};
CartCooking.propTypes = {
    cartCooking: PropTypes.object
}
export default CartCooking;