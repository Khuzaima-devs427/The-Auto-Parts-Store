import React from "react";
import { FaStar } from "react-icons/fa";

const TopProductCard = ({ img, rating, name, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl md:rounded-2xl p-3 md:p-4 flex gap-3 md:gap-4 items-center w-full border-2 border-[#E7E8FB] transition-transform duration-300 hover:scale-[1.02]">
      {/* Left Side - Image */}
      <div className="flex justify-center items-center">
        <img 
          src={img} 
          alt={name} 
          className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" 
        />
      </div>

      {/* Right Side - Details */}
      <div className="flex flex-col justify-center flex-1">
        {/* Rating */}
        <div className="flex text-yellow-400 mb-1 md:my-1">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <FaStar 
                key={i} 
                size={14} 
                className={i < rating ? "text-yellow-400" : "text-gray-300"} 
              />
            ))}
        </div>
        
        {/* Product Name */}
        <p className="text-base md:text-lg font-semibold line-clamp-2">{name}</p>
        
        {/* Price */}
        <p className="text-[#df2f18] font-bold text-lg md:text-xl mt-1">${price}</p>
      </div>
    </div>
  );
};

export default TopProductCard;