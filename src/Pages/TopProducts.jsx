import React from "react";
import TopProductCard from "../Components/TopProductCard";
import redrim from "../assets/images/redrim.png";
import handgear from "../assets/images/handgear.png";
import breek from "../assets/images/breek.png";
import tyre from "../assets/images/tyre.png";
import whiterim from "../assets/images/whiterim.png";
import spring from "../assets/images/spring.png";
import filter from "../assets/images/filter.png";

// Example data
const products = [
  { img: redrim, name: "Wheel Bearing Retainer", price: 120, rating: 4 },
  { img: handgear, name: "Brake Conversion Kit", price: 90, rating: 5 },
  { img: tyre, name: "Shock Mount Insulator", price: 150, rating: 3 },
  { img: whiterim, name: "Tail Light Lens", price: 80, rating: 5 },
  { img: spring, name: "Coil Spring Kit", price: 110, rating: 4 },
  { img: breek, name: "OE Replica Wheels", price: 95, rating: 3 },
  { img: filter, name: "Brake Conversion Kit", price: 200, rating: 5 },
  { img: handgear, name: "Shock Mount Insulator", price: 130, rating: 4 },
  { img: filter, name: "OE Replica Wheels", price: 70, rating: 2 },
];

const TopProducts = () => {
  return (
    <div className="mt-20 md:mt-30 p-4 md:p-8 lg:p-14">
      {/* Section Heading */}
      <p className="flex justify-center text-sm md:text-[16px] font-semibold text-[#df2f18]">
        // Top Rated Products
      </p>
      <p className="flex justify-center text-2xl md:text-3xl lg:text-[42px] font-semibold mb-6 md:mb-8 text-center">
        Top Rated Products
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {products.map((item, index) => (
          <TopProductCard
            key={index}
            img={item.img}
            name={item.name}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default TopProducts;