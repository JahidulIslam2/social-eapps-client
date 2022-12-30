import React from 'react';
import { Link } from 'react-router-dom';
// import img from "../../caren.json";
// import Lottie from "lottie-react";
import heroImg from "../../utilities/heroImg.png"


const Hero = () => {
    return (
        <div>
            <section className=" w-full  dark:text-gray-900 bg-gradient-to-r from-green-600 to-green-200">

                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl"> Join
                            <span className="dark:text-blue-600"> Our </span> Community
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Join our community lots of people wait for you
                            <br className="hidden md:inline lg:hidden" /> you are ready to join
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to="/signIn" className="px-8 py-3 text-lg font-semibold rounded hover:bg-blue-500 focus:bg-blue-500 dark:text-gray-900">
                                Sign in</Link>
                            <Link to="/signUp" className=" px-8 py-3 text-lg font-semibold border rounded hover:bg-blue-500 focus:bg-blue-500 dark:border-gray-100">Sign Up</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Hero;