// Footer Component
// This component represents the footer of the webpage with links and contact information.
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#045A5C] text-white py-8 px-4">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Link Section */}
                <div>
                    <a href="#rezept" className="block mb-2 hover:underline">Rezept einlösen</a>
                    <a href="#bestand" className="block mb-2 hover:underline">Live Bestand</a>
                    <a href="#videosprechstunde" className="block mb-2 hover:underline">Videosprechstunde</a>
                    <a href="#faqs" className="block mb-2 hover:underline">FAQs</a>
                    <a href="#kontakt" className="block mb-2 hover:underline">Kontakt</a>
                </div>
                {/* Address Section */}
                <div>
                    <p className="text-sm">Bergstraße 49-57</p>
                    <p className="text-sm">69469 Weinheim</p>
                    <p className="text-sm">Tel: 0223 548 5230</p>
                </div>
                {/* Operating Hours Section */}
                <div>
                    <p className="text-sm">Öffnungszeiten:</p>
                    <p className="text-sm">Mo - Fr: 09:00 - 18:00 Uhr</p>
                    <p className="text-sm">Sa: 09:00 - 14:00 Uhr</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;