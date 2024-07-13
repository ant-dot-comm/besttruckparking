import React from "react";

import { Button } from "../components";

import "./Landing.scss";

export const Landing = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <div className="hero flex max-md:flex-col md:flex-row md:items-stretch relative">
                <img
                    alt=""
                    src={`${process.env.PUBLIC_URL + "/images/hero.jpg"}`}
                    className="object-none max-md:h-[20rem] md:h-[60rem] max-md:w-full md:w-1/2 animate-fade-in"
                />
                <div className="bg-neutral-100">
                    <div className="p-32">
                        <h1 className="heading-display animate-slide-in-left">
                            Monetize Your Parking Spaces with Ease
                        </h1>
                        <p className="animate-slide-in-left delay-200">
                            Whether you manage parking lots, structures, or marinas, our platform connects you with truckers and drivers in need of secure parking
                        </p>
                        <Button color="dark" className="animate-pulse">Learn More</Button>
                    </div>
                    <div className="hero__img-row flex bg-white rounded-lg shadow-lg p-8 md:w-[120%] md:-ml-[10%] md:-mr[10%] animate-slide-in-bottom">
                        <img
                            alt=""
                            className="rounded-lg object-cover h-[20rem] w-1/3 border-8 border-white animate-fade-in"
                            src={`${process.env.PUBLIC_URL + "/images/trucklot.jpg"}`}
                        />
                        <img
                            alt=""
                            className="rounded-lg object-cover h-[20rem] w-1/3 border-8 border-white animate-fade-in delay-200"
                            src={`${process.env.PUBLIC_URL + "/images/trucklot.jpg"}`}
                        />
                        <img
                            alt=""
                            className="rounded-lg object-cover h-[20rem] w-1/3 border-8 border-white animate-fade-in delay-400"
                            src={`${process.env.PUBLIC_URL + "/images/trucklot.jpg"}`}
                        />
                    </div>
                </div>
            </div>

            <div className="global-container flex flex-col gap-96 my-96">

                {/* Map Section */}
                <div className="rounded-lg overflow-hidden">
                    <div className="bg-cyan-50 py-64 px-16 text-center flex justify-center font-bold text-white text-24">
                        <p className="md:w-1/2">Join a community of property owners who are maximizing their revenue and enhancing their operations</p>
                    </div>
                    <img
                        alt=""
                        className="object-cover max-md:h-[20rem] md:h[40rem] w-full "
                        src={`${
                            process.env.PUBLIC_URL + "/images/map.jpg"
                        }`}
                    />
                </div>

                {/* How it works Section */}
                <div>
                    <p className="heading-2 text-center mb-64">
                        How it works
                    </p>
                    <div className="flex max-md:flex-col md:flex-row gap-16 items-center md:justify-between">
                        <div className="text-center">
                            <p className="text-40 font-black leading-none mb-1 text-cyan-50">
                                1
                            </p>
                            <p className="heading-3">Sign Up</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>

                        <div className="text-center">
                            <p className="text-40 font-black leading-none mb-1 text-cyan-50">
                                2
                            </p>
                            <p className="heading-3">Sign Up</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>

                        <div className="text-center">
                            <p className="text-40 font-black leading-none mb-1 text-cyan-50">
                                3
                            </p>
                            <p className="heading-3">Sign Up</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                </div>
                
                {/* Benefits Section */}
                <div className="py-64 px-16 rounded-lg text-white" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/benefitbg.png"})`}}>
                    <p className="heading-2 text-center mb-64">
                        Benefits
                    </p>
                    <div className="flex max-md:flex-col md:flex-row gap-16 items-center md:justify-between">
                        <div className="text-center">
                            <p className="text-40 font-black leading-none mb-1 ">
                                1
                            </p>
                            <p className="heading-3">Sign Up</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>

                        <div className="text-center">
                            <p className="text-40 font-black leading-none mb-1 ">
                                2
                            </p>
                            <p className="heading-3">Sign Up</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>

                        <div className="text-center">
                            <p className="text-40 font-black leading-none mb-1 ">
                                3
                            </p>
                            <p className="heading-3">Sign Up</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
