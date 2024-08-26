"use client";
import React, { useState } from "react";
import { Range } from "react-range";
import "./Sidebar.css"; // Importing the CSS file for custom styles

const Sidebar = () => {
  const STEP = 1;
  const PRICE_MIN = 5;
  const PRICE_MAX = 10;
  const THC_MIN = 11;
  const THC_MAX = 19;
  const CBD_MIN = 1;
  const CBD_MAX = 6;

  const [priceRange, setPriceRange] = useState([PRICE_MIN, PRICE_MAX]);
  const [thcRange, setThcRange] = useState([THC_MIN, THC_MAX]);
  const [cbdRange, setCbdRange] = useState([CBD_MIN, CBD_MAX]);

  return (
    <div className="bg-white p-6 w-64">
      <h1 className="text-5xl mb-10 text-teal-700">Blüten</h1>
      <div className="bg-[#2ca4c94b] px-4 w-32 mb-10 text-center">
        <h2 className="text-md font-semibold">Filter</h2>
      </div>

      {/* Manufacturer Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Hersteller</label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-teal-500" />
            <span className="ml-2">ADEKpharma</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-teal-500" />
            <span className="ml-2">Aurora</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-teal-500" />
            <span className="ml-2">Bedrocan</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-teal-500" />
            <span className="ml-2">Cannamedical</span>
          </label>
          <a
            href="#"
            className="bg-[#ECFEAA] text-[#045A5C] px-4 py-2 mt-2 shadow-md hover:bg-yellow-500 inline-block self-start"
            style={{ borderRadius: "25% 10%" }}
          >
            mehr anzeigen
          </a>
        </div>
      </div>

      {/* Price Filter with Custom Range Slider */}
      <div className="mb-10">
        <label className="block text-lg text-center font-medium mb-2">Preis</label>
        <Range
          step={STEP}
          min={PRICE_MIN}
          max={PRICE_MAX}
          values={priceRange}
          onChange={(values) => setPriceRange(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "6px",
                background: `linear-gradient(to right, 
                  #e2e8f0 ${((priceRange[0] - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100}%, 
                  #38b2ac ${((priceRange[0] - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100}%, 
                  #38b2ac ${((priceRange[1] - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100}%, 
                  #e2e8f0 ${((priceRange[1] - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100}%)`,
              }}
              className="custom-slider"
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "16px",
                width: "16px",
                backgroundColor: "#4a5568",
                borderRadius: "50%",
              }}
            />
          )}
        />
        <div className="flex justify-between text-xs mt-1">
          <span>€{priceRange[0]}</span>
          <span>€{priceRange[1]}</span>
        </div>
        <div className="flex justify-between mt-1">
          <div className="bg-[#2ca4c94b] p-2 rounded-md">
            <span>Min: €{priceRange[0]}</span>
          </div>
          <div className="bg-[#2ca4c94b] p-2 rounded-md">
            <span>Max: €{priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* THC Content Filter with Two Sliders */}
      <div className="mb-10">
        <label className="block text-md text-center font-medium mb-2">THC Gehalt</label>
        <Range
          step={STEP}
          min={THC_MIN}
          max={THC_MAX}
          values={thcRange}
          onChange={(values) => setThcRange(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "6px",
                background: `linear-gradient(to right, 
                  #e2e8f0 ${((thcRange[0] - THC_MIN) / (THC_MAX - THC_MIN)) * 100}%, 
                  #38b2ac ${((thcRange[0] - THC_MIN) / (THC_MAX - THC_MIN)) * 100}%, 
                  #38b2ac ${((thcRange[1] - THC_MIN) / (THC_MAX - THC_MIN)) * 100}%, 
                  #e2e8f0 ${((thcRange[1] - THC_MIN) / (THC_MAX - THC_MIN)) * 100}%)`,
              }}
              className="custom-slider"
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "16px",
                width: "16px",
                backgroundColor: "#4a5568",
                borderRadius: "50%",
              }}
            />
          )}
        />
        <div className="flex justify-between text-xs mt-1">
          <span>{thcRange[0]}%</span>
          <span>{thcRange[1]}%</span>
        </div>
        <div className="flex justify-between mt-1">
          <div className="bg-[#2ca4c94b] p-2 rounded-md">
            <span>Min: {thcRange[0]}%</span>
          </div>
          <div className="bg-[#2ca4c94b] p-2 rounded-md">
            <span>Max: {thcRange[1]}%</span>
          </div>
        </div>
      </div>

      {/* CBD Content Filter with Two Sliders */}
      <div className="mb-20">
        <label className="block text-md text-center font-medium mb-2">CBD Gehalt</label>
        <Range
          step={STEP}
          min={CBD_MIN}
          max={CBD_MAX}
          values={cbdRange}
          onChange={(values) => setCbdRange(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "6px",
                background: `linear-gradient(to right, 
                  #e2e8f0 ${((cbdRange[0] - CBD_MIN) / (CBD_MAX - CBD_MIN)) * 100}%, 
                  #38b2ac ${((cbdRange[0] - CBD_MIN) / (CBD_MAX - CBD_MIN)) * 100}%, 
                  #38b2ac ${((cbdRange[1] - CBD_MIN) / (CBD_MAX - CBD_MIN)) * 100}%, 
                  #e2e8f0 ${((cbdRange[1] - CBD_MIN) / (CBD_MAX - CBD_MIN)) * 100}%)`,
              }}
              className="custom-slider"
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "16px",
                width: "16px",
                backgroundColor: "#4a5568",
                borderRadius: "50%",
              }}
            />
          )}
        />
        <div className="flex justify-between text-xs mt-1">
          <span>{cbdRange[0]}%</span>
          <span>{cbdRange[1]}%</span>
        </div>
        <div className="flex justify-between mt-1">
          <div className="bg-[#2ca4c94b] p-2 rounded-md">
            <span>Min: {cbdRange[0]}%</span>
          </div>
          <div className="bg-[#2ca4c94b] p-2 rounded-md">
            <span>Max: {cbdRange[1]}%</span>
          </div>
        </div>
      </div>
       {/* Genetics Filter */}
       <div className="mb-6">
        <label className="block text-md text-center font-medium mb-2">Genetik</label>
        <div className="flex space-x-3">
          <button className="px-2 py-2 bg-teal-500 text-white rounded-md">
            Indica
          </button>
          <button className="px-2 py-1 bg-teal-500 text-white rounded-md">
            Sativa
          </button>
          <button className="px-2 py-1 bg-teal-500 text-white rounded-md">
            Hybrid
          </button>
        </div>
      </div>

      {/* Treatment Filter */}
      <div className="mb-20">
        <label className="block text-md text-center font-medium mb-2">Bestattung</label>
        <div className="flex space-x-4">
          <button className="px-2 bg-teal-500 text-white rounded-md">
            behandelt
          </button>
          <button className="px-2 py-1 bg-teal-500 text-white rounded-md">
            nicht behandelt
          </button>
        </div>
      </div>

      {/* Terpenes Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Terpene</label>
        <button className="text-teal-500 text-sm">alle Filter zurücksetzen</button>
      </div>
    </div>
  );
};

export default Sidebar;

 