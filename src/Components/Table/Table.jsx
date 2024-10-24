
import PropTypes from 'prop-types'
const Table = ({ cart, index, handleCurrentlyCooking }) => {
 
    const { recipe_name, preparing_time, calories
    } = cart;
    return (
        <div>
            <div>

            
                <div className="overflow-x-auto">


                    <table className="table">

                        <tbody>
                        
                            {
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{recipe_name}</td>
                                    <td>{preparing_time}</td>
                                    <td>{calories}</td>
                                    <td><button onClick={() => handleCurrentlyCooking(cart)} className="btn btn-accent rounded-full">Preparing</button></td>
                                </tr>
                            }

                        </tbody>
                    </table>

                </div>


             
                


            </div>
        </div>
    );
};



Table.propTypes = {
    cart: PropTypes.object,
    index: PropTypes.number,
    handleCurrentlyCooking: PropTypes.func
}

export default Table;