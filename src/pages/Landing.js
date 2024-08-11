import React from "react";
import { motion } from "framer-motion"

import { Button } from "../components";
import { ReactComponent as IllustrationCTAalt} from '../components/visuals/illustrationCTA-alt.svg';
import { ReactComponent as IllustrationCTA} from '../components/visuals/illustrationCTA.svg';

import "./Landing.scss";
import classNames from "classnames";

export const Landing = () => {

    const stepContainer = (index, title, text, flip, alt) => {
        return (
            <div 
                className={classNames(
                    "step-container flex flex-col gap-16 w-full",
                    flip ? "md:flex-row-reverse step-container--flip" : "md:flex-row",
                )}
            >
                <div className="step-container__content flex flex-col md:gap-16 max-md:text-center">
                    <h2 className="text-32 font-bold text-blue-900">{index}.</h2>
                    <h2 className="text-32 font-bold text-green-600">{title}</h2>
                    <p className="">{text}</p>
                </div>
                <div className="step-container__illustration relative">
                    {alt ? <IllustrationCTAalt className="max-md:mx-auto" /> : <IllustrationCTA className="max-md:mx-auto" />}
                </div>
            </div>
        )
    }
    
    return (
        <div className="home">
            {/* Hero Section */}
            <div 
                className="hero relative"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero3.jpg )`,
                }}   
            >     
                <div className="global-container w-full flex justify-end max-lg:!-mr-16">
                    <motion.div 
                        className={classNames(
                            "p-32 rounded-l-lg md:rounded-lg text-neutral-800",
                            "bg-white/50 backdrop-blur-sm",
                            "w-5/6 lg:w-1/2",
                        )}
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <h1 className="text-[4.8rem] font-semibold mb-16">
                            Truck Parking Across America
                        </h1>
                        <p>
                            Helping to provide parking for truckers by monetizing vacant properties for landowners
                        </p>
                        <Button as="a" href="https://portal.eaglepay.co/onboarding?siteId=-1&type=r" color="blue" className="block mt-24 shadow-md">
                            Find locations
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Map Section */}
            <img
                alt=""
                className="object-cover max-md:h-[20rem] md:h[40rem] w-full "
                src={`${
                    process.env.PUBLIC_URL + "/images/map.jpg"
                }`}
            />

            {/* For Property Managers - How it works Section */}
            <div className="global-container flex flex-col py-96">
                <p className="text-48 text-center font-bold mb-[0] leading-none">
                    How it works
                </p>
                <p className="text-24 text-center mb-96 leading-none">
                    For Property Managers
                </p>
                {/* <motion.ul
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="flex flex-col gap-64 items-start max-w-5xl mx-auto"
                > */}
                <ul>
                    <li className="">
                        {stepContainer(
                            1,
                            "Sign Up",
                            <p><a href="/">Create an account</a> to list your property as a Property Member.</p>, 
                            false, 
                        )}
                    </li>
                    <li className="">
                        {stepContainer(
                            2,
                            "Become a Property Memeber",
                            <>
                                <p>Add the location suitable for truck parking, just click <a href="/">Become a Property Member</a>. If you have any questions, feel free to reach out via the Contact us page.</p> 
                                <p>Watch the video 'How to add your property on Truck Parking Club' below to learn how to add your property step-by-step.</p>
                            </>, 
                            true, 
                        )}
                    </li>
                    <li className="">
                        {stepContainer(
                            3,
                            "Handle Bookings",
                            <p>Be notified via email and text of every new booking. Make sure to provide contact information for the appropriate Property Member party to handle the bookings.</p>, 
                            false, 
                        )}
                    </li>
                </ul>
                {/* </motion.ul> */}
            </div>

            {/* For Truck Memembers - How it works Section */}
            <div className="bg-neutral-100 py-96">    
                <div className="global-container flex flex-col">    
                    <p className="text-48 text-center font-bold mb-[0] leading-none">
                        How it works
                    </p>
                    <p className="text-24 text-center mb-96 leading-none">
                        For Property Managers
                    </p>
                    {/* <motion.ul
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="flex flex-col gap-64 items-start max-w-5xl mx-auto"
                    > */}
                    <ul>
                        <li className="">
                            {stepContainer(
                                1,
                                "Sign Up",
                                <p><a href="/">Create an account</a> to list your property as a Property Member.</p>, 
                                false, 
                                true,
                            )}
                        </li>
                        <li className="">
                            {stepContainer(
                                2,
                                "Become a Property Memeber",
                                <>
                                    <p>Add the location suitable for truck parking, just click <a href="/">Become a Property Member</a>. If you have any questions, feel free to reach out via the Contact us page.</p> 
                                    <p>Watch the video 'How to add your property on Truck Parking Club' below to learn how to add your property step-by-step.</p>
                                </>, 
                                true, 
                                true, 
                            )}
                        </li>
                        <li className="">
                            {stepContainer(
                                3,
                                "Handle Bookings",
                                <p>Be notified via email and text of every new booking. Make sure to provide contact information for the appropriate Property Member party to handle the bookings.</p>, 
                                false, 
                                true,
                            )}
                        </li>
                    </ul>
                    {/* </motion.ul> */}
                </div>
            </div>
        </div>
    );
};
