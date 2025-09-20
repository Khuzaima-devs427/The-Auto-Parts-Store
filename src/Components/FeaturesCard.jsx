import React from "react";

const FeaturesCard = ({ icon, title, description, showBorder }) => {
  return (
    <div className="flex items-center gap-4 sm:gap-5 px-4 sm:px-6 py-4 sm:py-6 relative group hover:bg-gray-50 transition-colors duration-200">
      <div className="text-2xl text-gray-700 p-2 bg-gray-100 rounded-full group-hover:bg-[#df2f18] group-hover:text-white transition-colors duration-200">
        {icon}
      </div>
      <div className="max-w-[160px] sm:max-w-[180px]">
        <h3 className="font-semibold text-base sm:text-lg leading-tight">{title}</h3>
        <p className="text-gray-600 text-xs sm:text-sm mt-1">{description}</p>
      </div>

      {/* Custom line - hidden on mobile, shown on larger screens */}
      {showBorder && (
        <div className="absolute right-0 w-[1px] bg-gray-300 h-[40px] sm:h-[60px] hidden sm:block"></div>
      )}
    </div>
  );
};

export default FeaturesCard;