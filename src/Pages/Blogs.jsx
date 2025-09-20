import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BlogCard from "../Components/BlogCard";
import b1 from "../assets/images/b1.jpg";
import b2 from "../assets/images/b2.jpg";
import b3 from "../assets/images/b3.jpg";
import b4 from "../assets/images/b4.jpg";
import b5 from "../assets/images/b5.jpg";

const blogs = [
  { img: b1, author: "Admin", category: "Services", title: "Oil Problems and Solutions", date: "June 24, 2020" },
  { img: b2, author: "John Doe", category: "Maintenance", title: "5 Tips for Better Fuel Economy", date: "July 12, 2020" },
  { img: b3, author: "Admin", category: "Repairs", title: "How to Diagnose Brake Issues", date: "August 3, 2020" },
  { img: b4, author: "Joe Root", category: "Tips", title: "Practices for Car Battery Care", date: "September 1, 2020" },
  { img: b5, author: "Admin", category: "Services", title: "Why Regular Servicing Matters", date: "October 5, 2020" },
];

const Blogs = () => {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : true
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Attach / re-init pagination safely when swiper + pag element exist and isMobile is true
  useEffect(() => {
    const swiper = swiperRef.current;
    const pagEl = paginationRef.current;
    if (!swiper) return;

    // keep existing pagination params to avoid empty class tokens
    const existingPaginationParams = swiper.params && swiper.params.pagination ? swiper.params.pagination : {};

    if (isMobile && pagEl) {
      // Merge params so default classes (bulletClass, bulletActiveClass, etc.) remain intact
      swiper.params.pagination = {
        ...existingPaginationParams,
        el: pagEl,
        clickable: true,
        renderBullet(index, className) {
          // ensure className isn't empty (fallback to default)
          const safeClass = className || existingPaginationParams.bulletClass || "swiper-pagination-bullet";
          return `<span class="${safeClass}"></span>`;
        },
      };

      // destroy existing pagination if initialized (safe, wrapped)
      try {
        if (swiper.pagination && swiper.pagination.el) {
          swiper.pagination.destroy();
        }
      } catch (e) {
        // ignore errors from redundant destroy
      }

      // init / render / update pagination
      try {
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      } catch (e) {
        // swallow — prevents runtime crash
        // console.warn("pagination init failed", e);
      }
    } else {
      // disable/destroy pagination when not mobile
      try {
        if (swiper.pagination && swiper.pagination.el) {
          swiper.pagination.destroy();
        }
      } catch (e) {
        // ignore
      }
    }
  }, [isMobile]);

  return (
    <div className="mt-12 md:mt-16 px-4 md:px-8 relative group">
      <p className="flex justify-center text-sm md:text-[16px] font-semibold text-[#df2f18]">// BLOG & INSIGHTS</p>
      <p className="flex justify-center text-2xl md:text-3xl lg:text-[42px] font-semibold mb-6 md:mb-8 text-center">
        News Feeds
      </p>

      {/* Custom navigation buttons - hidden on mobile */}
      <button className="custom-prev absolute top-1/2 left-0 md:left-2 transform -translate-y-1/2 bg-[#df2f18] text-white w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg opacity-0 md:group-hover:opacity-100 transition duration-300 flex items-center justify-center hover:bg-black z-10 hidden md:flex">
        ❮
      </button>
      <button className="custom-next absolute top-1/2 right-0 md:right-2 transform -translate-y-1/2 bg-[#df2f18] text-white w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg opacity-0 md:group-hover:opacity-100 transition duration-300 flex items-center justify-center hover:bg-black z-10 hidden md:flex">
        ❯
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        // we will init pagination manually when needed
        pagination={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          // if pagination element already exists and we're on mobile, attach immediately
          const pagEl = paginationRef.current;
          if (pagEl && window.innerWidth < 768) {
            const existingPaginationParams = swiper.params && swiper.params.pagination ? swiper.params.pagination : {};
            swiper.params.pagination = {
              ...existingPaginationParams,
              el: pagEl,
              clickable: true,
              renderBullet(index, className) {
                const safeClass = className || existingPaginationParams.bulletClass || "swiper-pagination-bullet";
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
          }
        }}
        spaceBetween={isMobile ? 16 : 24}
        slidesPerView={1}
        loop
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 0 },
        }}
        className="mySwiper"
      >
        {blogs.map((b, i) => (
          <SwiperSlide key={i}>
            <div className="flex justify-center px-2 md:px-0">
              <BlogCard {...b} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination container: rendered only on mobile */}
      {isMobile && (
        <div
          ref={paginationRef}
          className="custom-pagination flex justify-center md:mt-8 space-x-2"
        />
      )}
    </div>
  );
};

export default Blogs;
