// src/components/Header.js
import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white sticky w-full z-20 top-0 start-0">
            <div className="mx-4 ">
                <div className="flex justify-between items-center py-2">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-xl font-bold">
                            <img src="/DTlogo-150x51.webp" alt="Logo" className="h-auto w-auto" />
                        </a>
                    </div>
                    <div className="hidden md:flex space-x-8 topmenu-items">
                        <a href="#" className="text-gray-700 hover:text-gray-900">US</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">UK</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Ireland</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">EU</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Singapore</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">South Africa</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Malaysia</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">India</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">CbCR</a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
                        {isOpen ? (
                                 <img src="/cancel.svg" alt="Logo" className="h-3 w-auto " />
                            ) : (
                              <img src="/humberger-icon.png" alt="Logo" className="h-4 w-auto mt-2" />
                            )}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-2 space-y-1 sm:px-3 topmenu-items">
                            <a href="#" className="block text-gray-700 hover:text-gray-900">US</a>
                            <a href="#" className="block text-gray-700 hover:text-gray-900">UK</a>
                            <a href="#" className="block text-gray-700 hover:text-gray-900">Ireland</a>
                            <a href="#" className="block text-gray-700 hover:text-gray-900">EU</a>
                            <a href="#" className="block text-gray-700 hover:text-gray-900">Singapore</a>
                            <a href="#" className="block text-gray-700 hover:text-gray-900">South Africa</a>
                            <a href="#" className="block text-gray-700 hover:text-gray-900">Malaysia</a>
                            <a href="#" className="block text-gray-700 hover:text-gray-900">India</a>
                            <a href="#" className="block text-gray-700 hover:text-gray-900">CbCR</a>
                        </div>
                    </div>
                )}
                <div className="flex justify-between items-center py-2 border-t -mx-4 bottom-header bottom-header-des">
                    <div className="hidden md:flex space-x-8 ml-2">
                        <a href="#" className="text-gray-700 hover:text-gray-900">HOME</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">ABOUT</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">CONTACT US</a>
                    </div>
                    <div className="hidden md:flex items-center header-btn-a">
                    <img src="/email-64.png" alt="Logo" className="h-3 w-auto pr-3" />
                        <a href="mailto:enquiry@datatracks.com" className="text-white">enquiry@datatracks.com</a>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden h-screen bottom-header ">
                        <div className="px-2 pt-2 pb-2 space-y-1 sm:px-3 border-t mt-2">
                            <a href="#" className="block text-gray-700 hover:text-gray-900">HOME</a>
                            <a href="#" className="block text-gray-700 hover:text-gray-900">ABOUT</a>
                            <a href="#" className="block text-gray-700 hover:text-gray-900">CONTACT US</a>
                            <div className="flex items-center mt-4 header-btn-a">
                            <img src="/email-64.png" alt="Logo" className="h-3 w-auto pr-3" />
                                <a href="mailto:enquiry@datatracks.com" className="text-white">enquiry@datatracks.com</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
