import React from "react";
import ProductCard from "../Components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";               // Swiper core CSS
import "swiper/css/autoplay";      // Autoplay feature
import { Autoplay } from "swiper/modules";
import redrim from "../assets/images/redrim.png";
import handgear from "../assets/images/handgear.png";
import breek from "../assets/images/breek.png";
import tyre from "../assets/images/tyre.png";
import whiterim from "../assets/images/whiterim.png";
import spring from "../assets/images/spring.png";

const Home = () => {
  return (
    <div className="mt-28 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <p className="flex justify-center text-[#df2f18] font-bold">// PARTS</p>
      <h1 className="flex justify-center mt-4 font-semibold text-3xl sm:text-4xl md:text-5xl">
        New Arrivals
      </h1>

      {/* First Slider - Left to Right */}
      <div className="mt-12">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}        // Default for mobile
          breakpoints={{
            // When window width is >= 640px (sm)
            640: {
              slidesPerView: 2,
            },
            // When window width is >= 768px (md)
            768: {
              slidesPerView: 3,
            },
            // When window width is >= 1024px (lg)
            1024: {
              slidesPerView: 4,
            },
          }}
          autoplay={{ 
            delay: 2000, 
            disableOnInteraction: false,
            // Removed reverseDirection: true to make it go left to right
          }}
          loop={true}              // infinite scroll
        >
          <SwiperSlide>
            <div className="flex justify-center">
              <ProductCard
                name="Cool Headphones"
                price="$99"
                rating={4.5}
                img={redrim}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <ProductCard
                name="Smart Watch"
                price="$199"
                rating={4.8}
                img={handgear}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <ProductCard
                name="Gaming Mouse"
                price="$59"
                rating={4.2}
                img={breek}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <ProductCard
                name="Cool Headphones"
                price="$99"
                rating={4.5}
                img={tyre}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <ProductCard
                name="Smart Watch"
                price="$199"
                rating={4.8}
                img={whiterim}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <ProductCard
                name="Gaming Mouse"
                price="$59"
                rating={4.2}
                img={spring}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Second Slider - Right to Left (Reverse) */}
      <div className="mt-12">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}        // Default for mobile
          breakpoints={{
            // When window width is >= 640px (sm)
            640: {
              slidesPerView: 2,
            },
            // When window width is >= 768px (md)
            768: {
              slidesPerView: 3,
            },
            // When window width is >= 1024px (lg)
            1024: {
              slidesPerView: 4,
            },
          }}
          autoplay={{ 
            delay: 2000, 
            disableOnInteraction: false, 
            reverseDirection: true // This makes it go right to left
          }}
          loop={true}              // infinite scroll
        >
          <SwiperSlide>
            <div className="flex justify-center">
              <ProductCard
                name="Cool Headphones"
                price="$99"
                rating={4.5}
                img={redrim}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <ProductCard
                name="Smart Watch"
                price="$199"
                rating={4.8}
                img={handgear}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <ProductCard
                name="Gaming Mouse"
                price="$59"
                rating={4.2}
                img={breek}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <ProductCard
                name="Cool Headphones"
                price="$99"
                rating={4.5}
                img={tyre}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <ProductCard
                name="Smart Watch"
                price="$199"
                rating={4.8}
                img={whiterim}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <ProductCard
                name="Gaming Mouse"
                price="$59"
                rating={4.2}
                img={spring}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;