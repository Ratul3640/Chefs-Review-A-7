import React from 'react';

const Banner = () => {
    return (
        <div className="container mx-auto ">
            {/* Banner Section Start  */}

            <div className="hero lg:h-[500px] h-auto rounded-3xl mt-4 lg:mb-16 mb-6" style={{ backgroundImage: 'url(https://i.ibb.co/dBY20Zj/banner.png)' }}>
                <div className="hero-overlay rounded-3xl "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full ">
                        <h1 className="mb-6 lg:text-5xl text-3xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-10 lg:text-lg text-xs">Join our exclusive cooking class and unlock the secrets of gourmet cuisine. Whether you're a beginner or an experienced cook, this class will enhance your culinary skills and expand your knowledge of global flavors. Learn hands-on techniques from expert chefs in a fun, interactive environment. From mastering knife skills to creating restaurant-quality dishes, we’ll guide you every step of the way!</p>
                        <div className="flex flex-col md:flex-row justify-center items-center md:gap-6 gap-4">
                            <button className="btn btn-active btn-accent text-xl font-semibold rounded-full">Explore Now</button>
                            <button className="btn btn-ghost text-xl font-semibold rounded-full text-white border-2 border-neutral-300 border-opacity-60">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner Section End  */}
        </div>
    );
};

export default Banner;