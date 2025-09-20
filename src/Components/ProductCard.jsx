import React from "react";

const ProductCard = ({ name, price, rating, img }) => {
  return (
    <div className="w-full max-w-[280px] h-[360px] rounded-2xl shadow-lg bg-white p-4 text-center border-2 border-[#E7E8FB] mx-auto">
      {/* Image */}
      <img
        src={img}
        alt={name}
        className="w-full h-44 object-cover rounded-xl mt-5"
      />

      {/* Name */}
      <h2 className="mt-3 text-lg font-semibold text-gray-800">
        {name}
      </h2>

      {/* Price */}
      <p className="text-[#E53E29] text-md font-bold">{price}</p>

      {/* Rating */}
      <p className="text-yellow-500 text-sm">⭐ {rating}</p>
    </div>
  );
};

export default ProductCard;