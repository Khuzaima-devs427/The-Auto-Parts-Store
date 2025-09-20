import React from "react";
import { FiUser, FiTag } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";

const BlogCard = ({ img, author, category, title, date }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl md:rounded-2xl border-1 overflow-hidden w-full max-w-[320px] md:w-[350px] h-auto md:h-[400px] border-[#E7E8FB] mb-8 md:mb-20 transition-transform duration-300 hover:scale-[1.02]">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-48 md:h-60 object-cover" 
      />

      <div className="p-4 md:p-5">
        <div className="flex flex-col md:flex-row md:justify-between text-gray-500 text-xs md:text-sm mb-3 gap-2 md:gap-0">
          <span className="flex items-center gap-1">
            <FiUser size={12} className="hidden md:block"/> 
            <FiUser size={10} className="md:hidden"/> 
            {author}
          </span>
          <span className="flex items-center gap-1">
            <FiTag size={12} className="hidden md:block"/> 
            <FiTag size={10} className="md:hidden"/> 
            {category}
          </span>
        </div>

        <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 leading-snug line-clamp-2">
          {title}
        </h3>

        <div className="h-px bg-gray-200 mb-3 md:mb-4" />

        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center text-xs md:text-sm gap-2 md:gap-0">
          <span className="flex items-center gap-2 text-gray-500">
            <FaRegCalendarAlt size={12} className="hidden md:block"/> 
            <FaRegCalendarAlt size={10} className="md:hidden"/> 
            {date}
          </span>
          <button className="text-[#df2f18] font-semibold hover:underline text-xs md:text-sm">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;