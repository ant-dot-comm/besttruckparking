import classNames from "classnames";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import { Button } from '../components';
import { ReactComponent as Logo} from '../components/visuals/BTP-logo.svg';
import { ReactComponent as MobileLogo} from '../components/visuals/BTP-logomark.svg';

import './Header.scss';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = (
        <>
            <Button as="a" href="https://portal.eaglepay.co/onboarding?siteId=-1&type=r" color="green" className="md:-mt-8 md:-mb-8 shadow-centered">
                Find locations
            </Button>
            <Link to="/besttruckparking/how-it-works" onClick={() => setMenuOpen(false)}>How It Works</Link>
        </> 
    )

    return (
        <div className="relative">
            {/* Desktop */}
            <header 
                className={classNames(
                    "header w-full flex items-center shadow-centered",
                    "fixed top-[0] max-w-[1188px]",
                    "md:top-32 md:left-1/2 md:-translate-x-1/2",
                    "bg-white text-neutral-800 z-[1000] md:rounded-full",
                )}
            >
                <nav
                    className={classNames(
                        "w-full flex justify-between items-center md:px-32",
                    )}
                >
                    <Link to="/besttruckparking" className="md:-mt-8 md:-mb-8">
                        <Logo className="max-md:hidden" />
                        <MobileLogo className="md:hidden h-[4rem]" />
                    </Link>

                    <div className="hidden md:flex items-center gap-16">
                        {links}
                    </div>
                    
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        type="button"
                        className="block text-neutral-800 focus:outline-none md:hidden p-16"
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
                    <Link to="/besttruckparking" onClick={() => setMenuOpen(!menuOpen)} className="absolute top-8 left-[0]">
                        <MobileLogo className="md:hidden h-[4rem]" />
                    </Link>
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
