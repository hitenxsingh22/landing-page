import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

const MainPage = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col md:flex-row">
                <Sidebar className="bg-gray-100 w-full md:w-1/4 p-4" />
                <main className="flex-1 p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mx-4">
                        {Array(9).fill().map((_, index) => (
                            <ProductCard key={index} />
                        ))}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default MainPage;
