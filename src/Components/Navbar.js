
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiGlobalLine } from "react-icons/ri";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <nav className="bg-gray-700 shadow-lg py-2">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-between items-center">
            <div className="flex space-x-5">
              <div>
                <Link to="/" className="flex items-center py-5 px-2 text-white">
                  <span className="font-bold text-2xl">logo</span>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/services" className="py-2 px-4 text-white hover:bg-amber-700 rounded-md">SERVICE</Link>
              <Link to="/work" className="py-2 px-4 text-white hover:bg-amber-700 rounded-md">WORK</Link>
              <Link to="/insights" className="py-2 px-4 text-white hover:bg-amber-700 rounded-md">INSIGHTS</Link>
              <Link to="/careers" className="py-2 px-4 text-white hover:bg-amber-700 rounded-md">CAREERS</Link>
              <Link to="/about" className="py-2 px-4 text-white hover:bg-amber-700 rounded-md">ABOUT</Link>
              <Link to="/contact" className="py-2 px-4 text-white hover:bg-amber-700 rounded-md">CONTACT</Link>
              
              <div className="relative">
                <button onClick={toggleDropdown} className="flex items-center text-white py-2 px-4 hover:bg-amber-700 rounded-md">
                <RiGlobalLine  className="w-6 h-6 mr-3" />
                     ENG
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <Link to="#" className="block px-3 py-1 text-gray-800 hover:bg-gray-400 rounded-md">Global / English</Link>
                    <Link to="#" className="block px-3 py-1 text-gray-800 hover:bg-gray-400 rounded-md">Croatia / Croatian</Link>
                    <Link to="#" className="block px-3 py-1 text-gray-800 hover:bg-gray-400 rounded-md">EMEA / English</Link>
                    <Link to="#" className="block px-3 py-1 text-gray-800 hover:bg-gray-400 rounded-md">Germany / Deutsch</Link>
                    <Link to="#" className="block px-3 py-1 text-gray-800 hover:bg-gray-400 rounded-md">India / English</Link>
                    <Link to="#" className="block px-3 py-1 text-gray-800 hover:bg-gray-400 rounded-md">Israel / English</Link>
                    <Link to="#" className="block px-3 py-1 text-gray-800 hover:bg-gray-400 rounded-md">Japan / 日本語</Link>
                    <Link to="#" className="block px-3 py-1 text-gray-800 hover:bg-gray-400 rounded-md">Latam / Español</Link>
                    <Link to="#" className="block px-3 py-1 text-gray-800 hover:bg-gray-400 rounded-md">Nordic / English</Link>
                    <Link to="#" className="block px-3 py-1 text-gray-800 hover:bg-gray-400 rounded-md">Poland / Polski</Link>
                    <Link to="#" className="block px-3 py-1 text-gray-800 hover:bg-gray-400 rounded-md">Romania / English</Link>
                    <Link to="#" className="block px-3 py-1 text-gray-800 hover:bg-gray-400 rounded-md">Slovakia / Slovensko</Link>
                    <Link to="#" className="block px-3 py-1 text-gray-800 hover:bg-gray-400 rounded-md">Ukraine / українська</Link>
                    <Link to="#" className="block px-3 py-1 text-gray-800 hover:bg-gray-400 rounded-md">UK/ English</Link>
                  </div>
                )}
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="mobile-menu-button">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`mobile-menu ${isOpen ? '' : 'hidden'} md:hidden`}>
          <Link to="/services" className="block py-2 px-4 text-sm text-white hover:bg-amber-700 rounded-sm">SERVICE</Link>
          <Link to="/work" className="block py-2 px-4 text-sm text-white hover:bg-amber-700 rounded-sm">WORK</Link>
          <Link to="/insights" className="block py-2 px-4 text-sm text-white hover:bg-amber-700 rounded-sm">INSIGHTS</Link>
          <Link to="/careers" className="block py-2 px-4 text-sm text-white hover:bg-amber-700 rounded-sm">CAREERS</Link>
          <Link to="/about" className="block py-2 px-4 text-sm text-white hover:bg-amber-700 rounded-sm">ABOUT</Link>
          <Link to="/contact" className="block py-2 px-4 text-sm text-white hover:bg-amber-700 rounded-sm">CONTACT</Link>
          <Link to="/log" className="block py-2 px-4 text-sm text-white hover:bg-amber-700 rounded-sm">LOG</Link>
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
