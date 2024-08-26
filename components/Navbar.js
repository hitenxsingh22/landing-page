"use client"
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-slate-100 p-4 mb-8">
            <div className="flex justify-between items-center pt-6">
                {/* Search Input */}
                <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                    <input
                        type="text"
                        placeholder="Suchen"
                        className="pl-4 py-2 w-72 focus:outline-none placeholder-teal-500 text-teal-600"
                    />
                    <button className="p-2">
                        <i className="fas fa-search"></i>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-teal-600 focus:outline-none">
                        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className={`flex-col md:flex-row md:flex md:space-x-6 ${isOpen ? 'flex' : 'hidden'} md:block`}>
                    <a href="#rezept" className="text-gray-600 hover:text-teal-600 mt-4 md:mt-0">Rezept einlösen</a>
                    <a href="#bestand" className="text-gray-600 hover:text-teal-600 mt-4 md:mt-0">Live Bestand</a>
                    <a href="#videosprechstunde" className="text-gray-600 hover:text-teal-600 mt-4 md:mt-0">Videosprechstunde</a>
                    <a href="#faqs" className="text-gray-600 hover:text-teal-600 mt-4 md:mt-0">FAQs</a>
                    <a href="#kontakt" className="text-gray-600 hover:text-teal-600 mt-4 md:mt-0">Kontakt</a>
                </nav>

                {/* Cart and Login Buttons */}
                <div className="flex items-center space-x-4">
                    <button className="text-teal-600">
                        <i className="fas fa-shopping-cart"></i>
                    </button>
                    <button className="bg-[#ECFEAA] text-[#045A5C] px-4 py-2 rounded-full shadow-md hover:bg-yellow-500 hidden md:block" style={{ borderRadius: '25% 10%' }}>
                        Anmelden
                    </button>
                </div>
            </div>

            {/* Mobile Cart and Login Buttons */}
            <div className={`flex flex-col space-y-4 mt-4 ${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <button className="bg-[#ECFEAA] text-[#045A5C] px-4 py-2 rounded-full shadow-md hover:bg-yellow-500" style={{ borderRadius: '25% 10%' }}>
                    Anmelden
                </button>
            </div>
        </header>
    );
};

export default Navbar;
