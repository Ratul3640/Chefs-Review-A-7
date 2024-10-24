import CurrentCookingTableHead from "../CurrentCookingTableHead/CurrentCookingTableHead";

import PropTypes from 'prop-types';
import CurrentlyCookingTableRow from "../CurrentlyCookingTableRow/CurrentlyCookingTableRow";

const CurrentlyCookingTable = ({ cookingCarts }) => {
    return (
        <div>

            <h1 className="text-[#282828] text-2xl font-semibold text-center  mt-6 mb-5">Currently cooking: <span id="CurrentlyCookingCount">0</span> </h1>

            <CurrentCookingTableHead></CurrentCookingTableHead>

            <CurrentlyCookingTableRow cookingCarts={cookingCarts}></CurrentlyCookingTableRow>

        </div>
    );
};
CurrentlyCookingTable.propTypes = {
    cookingCarts: PropTypes.array
}
export default CurrentlyCookingTable;