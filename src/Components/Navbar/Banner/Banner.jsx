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
                        <p className="mb-10 lg:text-lg text-xs">Embark on a culinary journey with our personalized cooking class. Discover new techniques and flavors as you unleash your inner chef. Join us for an unforgettable experience in the art of cooking. Book now and elevate your skills!</p>
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