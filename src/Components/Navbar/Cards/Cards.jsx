import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';
import PropTypes from 'prop-types';



const Cards = ({ handleWantToCook }) => {
    const [Cards, setCards] = useState([]);


    useEffect(() => {
        fetch('card.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center lg:w-2/3 w-full">

            {
                Cards.map(card => <Card handleWantToCook={handleWantToCook} key={card.recipe_id} card={card}></Card>)
            }

        </div>
    );
};


Cards.propTypes = {
    handleWantToCook: PropTypes.func
}
export default Cards;