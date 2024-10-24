
import PropTypes from 'prop-types';
import CartCooking from '../CartCooking/CartCooking';

const CurrentlyCookingTableRow = ({ cookingCarts }) => {
    console.log(cookingCarts)

    return (
        <div>

            {
                cookingCarts.map((cartCooking, idx) => <CartCooking key={idx} cartCooking={cartCooking}></CartCooking>)
            }


        </div>
    );
};

CurrentlyCookingTableRow.propTypes = {
    cookingCarts: PropTypes.array
}

export default CurrentlyCookingTableRow;