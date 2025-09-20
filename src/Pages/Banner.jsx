import React from 'react'
import banner from "../assets/images/banner-img.png";

const Banner = () => {
  return (
    <div className="w-full bg-[#F2F6F7] flex items-center mt-1">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mx-auto mt-25 mb-29">

        {/* Left Content */}
        <div className="w-full max-w-xl text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-snug break-words">
            Professional Car Service Provider
          </h1>
          <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Animi labore quod adipisci nihil dolores deleniti incidunt
            ipsum et odio totam!
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
            <button className="bg-green-600 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-green-700 transition text-sm sm:text-base">
              Our Services
            </button>
            <button className="border border-green-600 text-green-600 px-5 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-green-600 hover:text-white transition text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img
            src={banner}
            alt="Car Service"
            className="w-[250px] sm:w-[320px] md:w-[400px] lg:w-[500px] h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
