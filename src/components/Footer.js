import React from 'react';
import { Link } from "react-router-dom";

import { FaPhone, FaMapPin, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-neutral-100 to-white py-64">
      <div className="global-container">
        <div className="flex flex-col">
          <Link to="/besttruckparking" className="text-[3.2rem] font-bold text-cyan-50 block mb-16">
              Best Truck Parking
          </Link>
          <div className="flex items-center gap-16 mb-16"><FaPhone className="text-emerald-40" size={24} />123-123-1234</div>
          <div className="flex items-center gap-16 mb-16"><FaMapPin className="text-emerald-40" size={24} />Address 12345, AB 12345</div>
          <div className="flex items-center gap-16"><FaEnvelope className="text-emerald-40" size={24} />info@besttruckparking.com</div>
        </div>
        <hr className="border-t border-neutral-200 my-32"  />
        <div className="flex max-md:flex-col md:justify-end text-xs">
          <p>© 2024 Best Truck Parking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
