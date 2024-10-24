import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import Bookmark from "../Bookmark/Bookmark";
import Cards from "../Cards/Cards";



const Recipes = () => {

    const [carts, setCarts] = useState([]);
    const [cookingCarts, setCookingCarts] = useState([]);

    const handleWantToCook = (cart) => {

        const count = document.getElementById('cookCount');
        const isExist = carts.find(item => item.recipe_id == cart.recipe_id);
        if (!isExist) {
            const newCarts = [...carts, cart];
            setCarts(newCarts)
            count.innerText = parseInt(count.innerText) + 1;
        }
        else {
            toast("Already Exists !");
        }

    }

    const handleCurrentlyCooking = (itemClick) => {
        const count = document.getElementById('cookCount');
        const newCookingCart = carts.filter(item => item.recipe_id != itemClick.recipe_id);
        setCarts(newCookingCart)
        count.innerText = parseInt(count.innerText) - 1;

        const newCookingCountCart = [...cookingCarts, itemClick]
        setCookingCarts(newCookingCountCart)

        const currentlyCookingCount = document.getElementById('CurrentlyCookingCount')
        currentlyCookingCount.innerText = parseInt(currentlyCookingCount.innerText) + 1;

    }

    return (
        <div>
            <h1 className="text-4xl font-semibold text-center lg:mb-6 mb-4">Our Recipes</h1>
            <p className="text-base text-opacity-60 text-center lg:mb-10 mb-6">
                Dive into Our Recipes: A Treasure Trove of Culinary Delights! Explore a world of flavors, from classic comfort foods to innovative creations. Elevate your cooking game with our easy-to-follow recipes. Lets embark on a delicious journey together!
            </p>

            <div className="flex lg:flex-row flex-col">

                <Cards handleWantToCook={handleWantToCook}></Cards>
                <Bookmark cookingCarts={cookingCarts} handleCurrentlyCooking={handleCurrentlyCooking} carts={carts} ></Bookmark>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Recipes;