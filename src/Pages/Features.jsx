import React from "react";
import FeaturesCard from "../Components/FeaturesCard";
import { FaTruck, FaMedal, FaSyncAlt, FaHeadset } from "react-icons/fa";

const Features = () => {
  return (
    <div className="border border-gray-200 shadow-md rounded-md mx-4 sm:mx-6 md:mx-8 lg:mx-18 my-8 md:my-12 lg:my-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <FeaturesCard
          icon={<FaTruck className="text-xl sm:text-2xl" />}
          title="Free home delivery"
          description="Provide free home delivery for all product over $100"
          showBorder={true}
        />
        <FeaturesCard
          icon={<FaMedal className="text-xl sm:text-2xl" />}
          title="Quality Products"
          description="We ensure the product quality that is our main goal"
          showBorder={true}
        />
        <FeaturesCard
          icon={<FaSyncAlt className="text-xl sm:text-2xl" />}
          title="3 Days Return"
          description="Return product within 3 days for any product you buy"
          showBorder={true}
        />
        <FeaturesCard
          icon={<FaHeadset className="text-xl sm:text-2xl" />}
          title="Online Support"
          description="We ensure the product quality that you can trust easily"
          showBorder={false} // last card → no line
        />
      </div>
    </div>
  );
};

export default Features;