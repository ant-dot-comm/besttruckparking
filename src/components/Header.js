import classNames from "classnames";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import { Button } from '../components';

import './Header.scss';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = (
        <>
            <Link to="/besttruckparking/locations" onClick={() => setMenuOpen(false)}>Locations</Link>
            <Link to="/besttruckparking/how-it-works" onClick={() => setMenuOpen(false)}>How It Works</Link>
            <Button
                as="a"
                href="https://calendly.com/park-nation/introduction-to-eaglepay-platform"
                target="_blank"
                rel="noreferrer"
                color="dark"
                size="sm"
                >
                Start Today
            </Button>
        </>
    )

    return (
        <div className="relative">
            {/* Desktop */}
            <header className="header h-64 w-full fixed top-[0] bg-cyan-50 shadow-lg text-white z-[1000]">
                <nav
                    className={classNames(
                        "global-container flex justify-between items-center",
                    )}
                >
                    <Link to="/besttruckparking" className="text-[2.4rem] font-bold">
                        Best Truck Parking
                    </Link>

                    <div className="hidden sm:flex items-center gap-16">
                        {links}
                    </div>
                    
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        type="button"
                        className="block text-black focus:outline-none sm:hidden p-16"
                    >
                        <FaBars size={24} />
                    </button>
                </nav>
            </header>
            
            {/* Mobile */}
            <div
                className={classNames(
                    {'max-sm:hidden sm:hidden' : !menuOpen},
                    "header-overlay",
                )}
            >
                <div
                    className={classNames(
                        "header-overlay__content"
                    )}
                >
                    <div className="text-xl flex flex-col items-center gap-32 w-full">
                        {links}
                    </div>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        type="button"
                        className="block text-black focus:outline-none sm:hidden p-16 absolute top-1 right-1"
                    >
                        <AiOutlineClose size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};
