import React from 'react';
import { GoDotFill } from "react-icons/go";
import { FaRegClock } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import PropTypes from 'prop-types';


const Card = ({ card, handleWantToCook }) => {
    const { recipe_name, short_description, recipe_image, preparing_time, calories, ingredients } = card;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl ">
                <figure><img src={recipe_image} alt="" /></figure>
                <div lassName="card-body">
                    <h2 className='text-xl mb-4 card-title text-[#282828]'>{recipe_name}</h2>
                    <p className='mb-2 font-normal text-base text-[#878787]'>{short_description}</p> <hr />

                    <div>
                        <h1 className='text-lg font-medium mb-4'>Ingredients: {ingredients.length}</h1>


                        <div>
                            <p className="flex items-center text-[#878787] font-normal"><GoDotFill /> <span>{ingredients[0]}</span>
                            </p>
                            <p className="flex items-center text-[#878787] font-normal"><GoDotFill /><span>{ingredients[1]}</span></p>
                            <p className="flex items-center text-[#878787] font-normal"><GoDotFill /><span>{ingredients[2]}</span></p>
                        </div> <hr />
                        <div className="mt-5 flex items-center justify-between">
                            <p className="flex items-center gap-1 text-[#282828] text-opacity-70 text-base font-normal"><FaRegClock />
                                <span>{preparing_time}</span>
                            </p>
                            <p className="flex items-center gap-1 text-[#282828] text-opacity-70 text-base font-normal"><SlEnergy /> <span>{calories}</span>
                            </p>
                        </div>

                    </div>
                    <div className='card-actions'>
                        <button onClick={() => handleWantToCook(card)} className="btn btn-active btn-accent text-lg text-[#150B2B] font-medium rounded-3xl mt-5">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};



Card.propTypes = {
    card: PropTypes.object,
    handleWantToCook: PropTypes.func
}
export default Card;