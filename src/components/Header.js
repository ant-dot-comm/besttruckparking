import classNames from "classnames";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import { Button } from '../components';
import { ReactComponent as Logo} from '../components/visuals/BTP-logo.svg';

import './Header.scss';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = (
        <>
            <Link to="https://portal.eaglepay.co/onboarding?siteId=-1&type=r" onClick={() => setMenuOpen(false)}>Locations</Link>
            <Link to="/besttruckparking/how-it-works" onClick={() => setMenuOpen(false)}>How It Works</Link>
        </> 
    )

    return (
        <div className="relative">
            {/* Desktop */}
            <header className="header h-64 w-full flex items-center fixed top-[0] bg-cyan-50 shadow-lg text-white z-[1000]">
                <nav
                    className={classNames(
                        "global-container w-full flex justify-between items-center",
                    )}
                >
                    <Link to="/besttruckparking">
                        <Logo />
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
