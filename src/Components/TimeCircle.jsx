import React from "react";

const TimeCircle = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center mt-2">
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white shadow-lg text-base sm:text-lg md:text-xl font-bold border-2 text-[#030E10]">
        {String(value).padStart(2, "0")}
      </div>
      <p className="mt-1 sm:mt-2 text-gray-300 text-xs sm:text-base md:text-lg font-medium">{label}</p>
    </div>
  );
};

export default TimeCircle;