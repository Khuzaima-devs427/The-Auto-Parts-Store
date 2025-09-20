import React, { useRef, useEffect, useState } from "react";
import redrim from "../assets/images/redrim.png";
import handgear from "../assets/images/handgear.png";
import breek from "../assets/images/breek.png";
import tyre from "../assets/images/tyre.png";
import whiterim from "../assets/images/whiterim.png";
import spring from "../assets/images/spring.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../index.css";

const Wheels = ({ activeTab }) => {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : true
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const products = [
    { id: 1, name: "Wheel A", price: "$200", rating: 4.2, img: redrim },
    { id: 2, name: "Sound System", price: "$250", rating: 4.5, img: handgear },
    { id: 3, name: "Featured Item", price: "$300", rating: 4.0, img: breek },
    { id: 4, name: "Color Pack", price: "$280", rating: 4.7, img: whiterim },
    { id: 5, name: "Extra Wheel", price: "$320", rating: 4.6, img: tyre },
    { id: 6, name: "Spring Pack", price: "$350", rating: 4.8, img: spring },
  ];

  const tabToIndex = {
    WHEELS: 0,
    SOUNDS: 1,
    FEATURED: 2,
    COLORS: 3,
  };

  // slide to tab
  useEffect(() => {
    if (swiperRef.current && tabToIndex[activeTab] !== undefined) {
      swiperRef.current.slideToLoop(tabToIndex[activeTab]);
    }
  }, [activeTab]);

  // attach pagination on mobile
  useEffect(() => {
    const swiper = swiperRef.current;
    const pagEl = paginationRef.current;
    if (!swiper) return;

    const existingPaginationParams =
      swiper.params && swiper.params.pagination ? swiper.params.pagination : {};

    if (isMobile && pagEl) {
      swiper.params.pagination = {
        ...existingPaginationParams,
        el: pagEl,
        clickable: true,
        renderBullet(index, className) {
          const safeClass =
            className ||
            existingPaginationParams.bulletClass ||
            "swiper-pagination-bullet";
          return `<span class="${safeClass}"></span>`;
        },
      };

      try {
        if (swiper.pagination && swiper.pagination.el) swiper.pagination.destroy();
      } catch (e) {}

      try {
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      } catch (e) {}
    } else {
      try {
        if (swiper.pagination && swiper.pagination.el) swiper.pagination.destroy();
      } catch (e) {}
    }
  }, [isMobile]);

  return (
    <div className="w-full mt-6 md:mt-10 relative group px-2 md:px-4">
      {/* Navigation buttons (desktop only) */}
      <button className="custom-prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#E53E29] text-white w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg opacity-0 md:group-hover:opacity-100 transition duration-300 flex items-center justify-center hover:bg-black z-10 hidden md:flex">
        ❮
      </button>
      <button className="custom-next absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#E53E29] text-white w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg opacity-0 md:group-hover:opacity-100 transition duration-300 flex items-center justify-center hover:bg-black z-10 hidden md:flex">
        ❯
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          if (window.innerWidth < 768 && paginationRef.current) {
            const existingPaginationParams =
              swiper.params && swiper.params.pagination
                ? swiper.params.pagination
                : {};
            swiper.params.pagination = {
              ...existingPaginationParams,
              el: paginationRef.current,
              clickable: true,
              renderBullet(index, className) {
                const safeClass =
                  className ||
                  existingPaginationParams.bulletClass ||
                  "swiper-pagination-bullet";
                return `<span class="${safeClass}"></span>`;
              },
            };
            try {
              if (swiper.pagination && swiper.pagination.el)
                swiper.pagination.destroy();
            } catch (e) {}
            try {
              swiper.pagination.init();
              swiper.pagination.render();
              swiper.pagination.update();
            } catch (e) {}
          }
        }}
        spaceBetween={isMobile ? 10 : 20}
        slidesPerView={1}
        loop
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 0 },
        }}
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="w-full max-w-[260px] h-[300px] md:h-[320px] mx-auto rounded-2xl shadow-lg bg-white text-center border-2 border-[#E7E8FB] flex flex-col">
              <div className="flex-grow flex items-center justify-center p-2 md:p-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-40 md:h-48 object-contain rounded-xl"
                />
              </div>
              <div className="mt-auto p-3 md:p-4">
                <h2 className="text-base md:text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-[#E53E29] text-sm md:text-md font-bold">
                  {product.price}
                </p>
                <p className="text-yellow-500 text-xs md:text-sm mb-2">
                  ⭐ {product.rating}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isMobile && (
        <div
          ref={paginationRef}
          className="custom-pagination flex justify-center mt-7 md:mt-6 space-x-2"
        />
      )}

      <style>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #ccc;
          opacity: 1;
          margin: 0 5px;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #E53E29;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default Wheels;
