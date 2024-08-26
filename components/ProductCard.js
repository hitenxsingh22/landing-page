import React from 'react';
import './ProductCard.css'; // Import the CSS file for custom styles

const ProductCard = () => {
    return (
        <div className="product-card  flex flex-col">
            <div className="flex items-center justify-between m-2">
                <span className=" px-3 py-1  rounded-full bg-red-50 text-red-600 text-sm">  • nicht lieferbar</span>
              
            </div>
            <div className="flex items-center justify-center mb-4">
                <img src="/card.png" alt="Product" className="product-card-image" />
            </div>
            <div className="product-card-content bg-[#e7f5f2] p-4 ">
                <p className="text-teal-900 text-sm bg-teal-100 rounded-full px-3 py-1 inline-block mb-4">Canify</p>
                
                <div className="flex justify-center space-x-4 mb-4">
                    <button className="bg-white text-teal-600 text-sm px-4 py-2 border border-gray-300">
                        THC 25%
                    </button>
                    <button className="bg-teal-500 text-white text-sm px-4 py-2  border border-gray-300">
                        CBD: &lt;1%
                    </button>
                   
                </div>
                <h2 className="text-teal-600 font-medium text-center text-sm mb-2">Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify</h2>

                <div className="flex justify-between mt-4 text-sm">
                    <div className="text-gray-500">
                        <p className="mb-1"><span className="text-teal-700 font-medium">Kultivar:</span> Pink Kush</p>
                        <p className="mb-1"><span className="text-teal-700 font-medium">Genetik:</span> Hybrid</p>
                    </div>
                    <div className="text-right">
                        <p className="text-teal-700 font-semibold text-lg">€11,66<sup>1</sup></p>
                        <p className="text-gray-500 text-xs">pro Gramm</p>
                        <button className="bg-[#ECFEAA] w-full text-[#045A5C] px-4 py-2 rounded-full shadow-md mt-2 hover:bg-yellow-500">
                            in den Warenkorb
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
