import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";  // ✅ Import Link
import img from "../assets/images/img.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu after clicking a link
  const handleLinkClick = () => setIsOpen(false);

  return (
    <div>
      <nav className="flex items-center justify-between px-8 py-7 shadow-md">
        {/* Logo + Email (desktop only) */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <img src={img} alt="logo-img" className="w-20 h-auto" />

          {/* Divider */}
          <div className="hidden lg:block h-9 border-l-2 border-gray-400"></div>

          {/* Email (desktop only) */}
          <div className="hidden lg:flex items-center gap-2 text-green-600 hover:text-green-700">
            <FontAwesomeIcon icon={faEnvelope} className="text-[22px]" />
            <div>
              <p className="text-sm">Get Support</p>
              <a
                href="mailto:khuzaimadevs@gmail.com"
                className="underline text-lg"
              >
                khuzaimadevs@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 text-green-600 text-lg font-semibold">
          <Link to="/" className="hover:text-green-700">
            Home
          </Link>
          <Link to="/services" className="hover:text-green-700">
            Services
          </Link>
          <Link to="/shop" className="hover:text-green-700">
            Shop
          </Link>
         <a href="https://wa.me/923160901427" target="_blank" rel="noopener noreferrer" className="text-green-600 text-lg hover:text-green-700" > Contact Us </a>
        </ul>

        {/* Purchase Button (desktop only) */}
        <div className="hidden lg:block">
          <button className="bg-green-600 text-white font-semibold text-[17px] px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Purchase Now
          </button>
        </div>

        {/* Mobile & Tablet Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="text-2xl text-green-600"
            />
          </button>
        </div>
      </nav>

      {/* Mobile & Tablet Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center gap-6 py-6 bg-white shadow-lg">
          {/* Email (mobile + tablet) */}
          <div className="flex items-center gap-2 text-green-600 hover:text-green-700">
            <FontAwesomeIcon icon={faEnvelope} className="text-[20px]" />
            <div className="text-center">
              <p className="text-sm">Get Support</p>
              <a
                href="mailto:khuzaimadevs@gmail.com"
                className="underline text-base"
              >
                khuzaimadevs@gmail.com
              </a>
            </div>
          </div>

          {/* Menu Links */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="text-green-600 text-lg hover:text-green-700"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={handleLinkClick}
            className="text-green-600 text-lg hover:text-green-700"
          >
            Services
          </Link>
          <Link
            to="/shop"
            onClick={handleLinkClick}
            className="text-green-600 text-lg hover:text-green-700"
          >
            Shop
          </Link>
          <a href="https://wa.me/923160901427" target="_blank" rel="noopener noreferrer" className="text-green-600 text-lg hover:text-green-700" > Contact Us </a>

          {/* Purchase Button */}
          <button className="bg-green-600 text-white font-semibold text-[17px] px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Purchase Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;
