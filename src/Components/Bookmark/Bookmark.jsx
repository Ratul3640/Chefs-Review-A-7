
import PropTypes from 'prop-types';
import Table from '../Table/Table';
import TableHead from '../TableHead/TableHead';
import CurrentlyCookingTable from '../CurrentlyCookingTable/CurrentlyCookingTable';




const Bookmark = ({ carts, handleCurrentlyCooking, cookingCarts }) => {
    

    return (
        <div className="lg:w-1/3 w-full ">

            <TableHead></TableHead>
            {
                carts.map((cart, index) => <Table handleCurrentlyCooking={handleCurrentlyCooking} index={index} cart={cart} key={index}></Table>)
            }

            <CurrentlyCookingTable cookingCarts={cookingCarts} handleCurrentlyCooking={handleCurrentlyCooking}></CurrentlyCookingTable>

        </div>
    )
};

Bookmark.propTypes = {
    carts: PropTypes.array,
    handleCurrentlyCooking: PropTypes.func,
    cookingCarts: PropTypes.array

}

export default Bookmark;