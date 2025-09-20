import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CallService = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-[#E8EDEE] mt-30 justify-center md:justify-between gap-3 md:gap-5 lg:gap-7 xl:gap-10 px-6 py-8 md:py-5">
      <div className="text-center md:text-left">
        <p className="text-xl sm:text-2xl md:text-[28px] font-semibold">
          Get A Free Service Or Make A Call
        </p>
      </div>

      <div>
        {/* Tel link will trigger the phone dialer */}
        <a href="tel:+923160901427">
          <button className="flex items-center w-full md:w-[170px] h-[50px] border-2 border-[#df2f18] bg-white justify-center gap-2
            rounded-lg shadow-md transition-all duration-300
            hover:bg-[#df2f18] hover:text-white hover:shadow-lg
            px-4 md:px-0">
            <FontAwesomeIcon icon={faPhone} className="text-[16px]" />
            <p className="text-sm md:text-[16px] font-semibold">MAKE A CALL</p>
          </button>
        </a>
      </div>
    </div>
  );
};

export default CallService;