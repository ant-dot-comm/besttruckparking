import React from 'react';
import { Link } from "react-router-dom";

import { FaPhone, FaMapPin, FaEnvelope } from 'react-icons/fa';
import { ReactComponent as Logo} from '../components/visuals/BTP-logo.svg';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-neutral-100 to-white py-64">
      <div className="global-container flex flex-col items-center">
        <Link to="/besttruckparking" className="text-[3.2rem] font-bold text-cyan-50 block mb-16">
            <Logo />
        </Link>
        <div className="flex items-center gap-16 mb-16">123-123-1234</div>
        <div className="flex items-center gap-16 mb-16">Address 12345, AB 12345</div>
        <div className="flex items-center gap-16">info@besttruckparking.com</div>
      </div>
      <div className="text-center bg-blue-900 pt-16 pb-8 mt-32 text-white">
        <p>© 2024 Best Truck Parking. All rights reserved.</p>
      </div>
    </footer>
  );
}
