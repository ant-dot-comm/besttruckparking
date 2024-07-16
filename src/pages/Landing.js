import React from "react";
import { motion } from "framer-motion"

import { Button } from "../components";
import { ReactComponent as Arrow} from '../components/visuals/arrow-circle.svg';

import "./Landing.scss";



export const Landing = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    }
      
    const item = {
        hidden: { opacity: 0},
        show: { opacity: 1, transition: { duration: 1, ease: "easeIn" } }
    }
    return (
        <div className="home">
            {/* Hero Section */}
            <div className="hero flex max-md:flex-col md:flex-row md:items-stretch relative bg-neutral-100 ">
                <motion.div 
                    className="bg-gradient-to-r from-blue-400 to-cyan-50"
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <motion.img
                        alt=""
                        src={`${process.env.PUBLIC_URL + "/images/hero2.jpg"}`}
                        className="object-none max-md:h-[20rem] md:h-[60rem] max-md:w-full"
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: .5 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                </motion.div >
                <div className="flex items-center">
                    <div className="p-32">
                        <h1 className="heading-display">
                            Monetize Your Parking Spaces with Ease
                        </h1>
                        <p>
                            Whether you manage parking lots, structures, or marinas, our platform connects you with truckers and drivers in need of secure parking
                        </p>
                        <Button color="dark" className="md:mb-32" size="lg">Learn More</Button>
                        <motion.div 
                            className="hero__img-row flex bg-white rounded-lg shadow-lg md:w-[120%] md:-ml-[10%] md:-mr[10%] max-md:hidden"
                            initial={{ opacity: 0, x: 200, }}
                            whileInView={{ opacity: 1, x: 0, }}
                            transition={{
                                opacity: { duration: .5, delay: 0.25, ease: "easeOut" },
                                x: { duration: 2, type: "tween", stiffness: 100 }
                            }}
                        >
                            <img
                                alt=""
                                className="rounded-[2.4rem] object-cover h-[20rem] w-1/3 border-[1.6rem] border-white"
                                src={`${
                                    process.env.PUBLIC_URL + "/images/trucklot.jpg"
                                }`}
                                />
                            <img
                                alt=""
                                className="rounded-[2.4rem] object-cover h-[20rem] w-1/3 border-[1.6rem] border-white"
                                src={`${
                                    process.env.PUBLIC_URL + "/images/trucklot.jpg"
                                }`}
                                />
                            <img
                                alt=""
                                className="rounded-[2.4rem] object-cover h-[20rem] w-1/3 border-[1.6rem] border-white"
                                src={`${
                                    process.env.PUBLIC_URL + "/images/trucklot.jpg"
                                }`}
                                />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="bg-cyan-50 py-64 px-16 text-center font-bold text-white text-24 ">
                <div className="global-container relative">
                    <p>Join a community of property owners who are maximizing their revenue and enhancing their operations</p>
                    <Arrow className="absolute top-full left-1/2 -translate-x-1/2 " />
                </div>
            </div>
            <img
                alt=""
                className="object-cover max-md:h-[20rem] md:h[40rem] w-full "
                src={`${
                    process.env.PUBLIC_URL + "/images/map.jpg"
                }`}
            />

            <div className="global-container flex flex-col gap-96 my-96">
                {/* How it works Section */}
                <div>
                    <p className="heading-2 text-center mb-64">
                        How it works
                    </p>
                    <motion.ul
                        initial="hidden"
                        whileInView="show"
                        className="flex max-md:flex-col md:flex-row gap-16 items-center md:justify-between"
                        variants={container}
                        viewport={{ once: true, amount: 0.5 }} // Adjust the viewport settings as needed
                    >
                        <motion.li variants={item} size={50}>
                            <div className="text-center">
                                <p className="text-40 font-black leading-none mb-1 text-cyan-50">
                                    1
                                </p>
                                <p className="heading-3">Sign Up</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </motion.li>
                        <motion.li variants={item} size={50}>
                            <div className="text-center">
                                <p className="text-40 font-black leading-none mb-1 text-cyan-50">
                                    2
                                </p>
                                <p className="heading-3">Sign Up</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </motion.li>
                        <motion.li variants={item} size={50}>
                            <div className="text-center">
                                <p className="text-40 font-black leading-none mb-1 text-cyan-50">
                                    3
                                </p>
                                <p className="heading-3">Sign Up</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </motion.li>
                    </motion.ul>
                </div>
                
                {/* Benefits Section */}
                <div className="py-64 px-16 rounded-lg text-white" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/benefitbg.png"})`}}>
                    <p className="heading-2 text-center mb-64">
                        Benefits
                    </p>
                    <motion.ul 
                        initial="hidden"
                        whileInView="show"
                        className="flex max-md:flex-col md:flex-row gap-16 items-center md:justify-between"
                        variants={container}
                        viewport={{ once: true, amount: 0.5 }} // Adjust the viewport settings as needed
                    >
                        <motion.li variants={item} size={50}>
                            <div className="text-center">
                                <p className="text-40 font-black leading-none mb-1 ">
                                    1
                                </p>
                                <p className="heading-3">Sign Up</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </motion.li>
                        <motion.li variants={item} size={50}>
                            <div className="text-center">
                                <p className="text-40 font-black leading-none mb-1 ">
                                    2
                                </p>
                                <p className="heading-3">Sign Up</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </motion.li>
                        <motion.li variants={item} size={50}>
                            <div className="text-center">
                                <p className="text-40 font-black leading-none mb-1">
                                    3
                                </p>
                                <p className="heading-3">Sign Up</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </motion.li>
                    </motion.ul>
                </div>

            </div>
        </div>
    );
};
