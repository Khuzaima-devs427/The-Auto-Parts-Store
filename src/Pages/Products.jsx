import React, { useState } from "react";
import Wheels from "../Components/Wheels";

const Products = () => {
  const [activeTab, setActiveTab] = useState("WHEELS");

  return (
    <div className="mt-20 md:mt-28 px-4">
      <p className="flex justify-center text-[#df2f18] font-bold text-sm md:text-base">//PARTS</p>
      <p className="flex justify-center mt-2 md:mt-4 font-semibold text-3xl md:text-4xl lg:text-5xl text-center">
        Our Products
      </p>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-14 mt-6 md:mt-10 lg:mt-14">
        <button
          onClick={() => setActiveTab("WHEELS")}
          className={`font-bold text-sm md:text-base lg:text-[18px] transition-colors duration-300 ${
            activeTab === "WHEELS" 
              ? "text-[#df2f18]" 
              : "text-black hover:text-[#df2f18]"
          }`}
        >
          WHEELS
        </button>

        <div className="hidden md:block h-5 border-l-[2px] border-gray-300"></div>

        <button
          onClick={() => setActiveTab("SOUNDS")}
          className={`font-bold text-sm md:text-base lg:text-[18px] transition-colors duration-300 ${
            activeTab === "SOUNDS" 
              ? "text-[#df2f18]" 
              : "text-black hover:text-[#df2f18]"
          }`}
        >
          SOUNDS
        </button>

        <div className="hidden md:block h-5 border-l-[2px] border-gray-300"></div>

        <button
          onClick={() => setActiveTab("FEATURED")}
          className={`font-bold text-sm md:text-base lg:text-[18px] transition-colors duration-300 ${
            activeTab === "FEATURED" 
              ? "text-[#df2f18]" 
              : "text-black hover:text-[#df2f18]"
          }`}
        >
          FEATURED
        </button>

        <div className="hidden md:block h-5 border-l-[2px] border-gray-300"></div>

        <button
          onClick={() => setActiveTab("COLORS")}
          className={`font-bold text-sm md:text-base lg:text-[18px] transition-colors duration-300 ${
            activeTab === "COLORS" 
              ? "text-[#df2f18]" 
              : "text-black hover:text-[#df2f18]"
          }`}
        >
          COLORS
        </button>
      </div>

      {/* Pass activeTab to Wheels */}
      <div className="mt-6 md:mt-10 lg:mt-12">
        <Wheels activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Products;