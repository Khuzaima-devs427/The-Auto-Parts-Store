import React, { useState, useEffect } from "react";
import TimeCircle from "../Components/TimeCircle";
import handgear from "../assets/images/handgear.png";
import dealimg from "../assets/images/dealimg.png";

const Deals = () => {
  // Example: countdown from 7 days (in seconds)
  const [timeLeft, setTimeLeft] = useState(7 * 24 * 60 * 60);

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(id);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  // Convert seconds → days, hours, minutes, seconds
  const days = Math.floor(timeLeft / (24 * 3600));
  const hours = Math.floor((timeLeft % (24 * 3600)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="flex flex-col lg:flex-row bg-[#030E10] min-h-screen mt-24 items-center justify-between px-4 sm:px-6 lg:px-10 py-10 lg:py-0">
      {/* Left Image - Hidden on mobile, visible on larger screens */}
      <div className="hidden lg:block">
        <img src={handgear} alt="Hand gear" className="max-w-full h-auto" />
      </div>

      {/* Text + Timer - Centered content */}
      <div className="text-center w-full max-w-[500px] mx-auto">
        <p className="text-[#df2f18] text-xl sm:text-2xl font-bold">Hurry Up!</p>
        <p className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl mt-3">
          Hot Deal! Sale Up To 20% off
        </p>
        <p className="text-white/80 font-medium text-base sm:text-lg mt-4 sm:mt-6 px-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo id,
          unde hic molestias omnis.
        </p>

        {/* Timer circles - Responsive and centered */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mt-6">
          <TimeCircle label="Days" value={days} />
          <TimeCircle label="Hours" value={hours} />
          <TimeCircle label="Minutes" value={minutes} />
          <TimeCircle label="Seconds" value={seconds} />
        </div>
        
        <div className="mt-8 sm:mt-14">
          <button className="px-5 sm:px-7 py-3 sm:py-4 rounded-md font-semibold
                            bg-[#df2f18] text-white
                            transition-all duration-300 ease-in-out
                            hover:bg-white hover:text-black">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Right Image - Hidden on mobile, visible on larger screens */}
      <div className="hidden lg:block self-end">
        <img src={dealimg} alt="Hot deal" className="object-contain max-w-full h-auto" />
      </div>
    </section>
  );
};

export default Deals;