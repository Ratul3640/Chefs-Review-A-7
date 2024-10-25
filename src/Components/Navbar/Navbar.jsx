
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";



const Navbar = () => {
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-3 ">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl lg:text-3xl font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-2">

                    <label className="input input-bordered hidden lg:flex items-center gap-2 rounded-3xl">

                        <IoSearch />

                        <input type="text" className="grow" placeholder="Search" />
                    </label>


                    <button className=" btn bg-[#0BE58A] lg:text-3xl text-2xl rounded-full">
                       <CgProfile></CgProfile>
                    </button>



                </div>
            </div>

        </div>
    );
};

export default Navbar;