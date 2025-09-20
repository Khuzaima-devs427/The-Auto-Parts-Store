import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import footerimg from "../assets/images/footerimg.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import FooterInfo from "../Components/FooterInfo";
import payment from "../assets/images/payment.png";

const Footer = () => {
  const sections = [
    {
      heading: "Company",
      paragraphs: ["About Us", "Careers", "Blog", "Press"],
    },
    {
      heading: "Support",
      paragraphs: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
    },
    {
      heading: "Services",
      paragraphs: ["Wish List", "Order Tracking", "My Account", "UI/UX Design"],
    },
  ];

  return (
    <div className="bg-black text-white pt-16 ">
      {/* Top Footer */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-18 justify-center flex-wrap px-4 lg:px-8">
        {/* Left image + description */}
        <div className="w-full lg:w-auto">
          <img src={footerimg} alt="img" className="mb-6" />
          <p className="w-full lg:w-[260px] text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
          </p>

          {/* Contact info */}
          <div className="mt-6 space-y-3 font-semibold">
            <div className="flex items-center gap-2 hover:text-red-500">
              <FontAwesomeIcon icon={faLocationDot} className="text-lg" />
              <p>Brooklyn, New York, United States</p>
            </div>

            <div className="flex items-center gap-2 hover:text-red-500">
              <FontAwesomeIcon icon={faPhone} className="text-[16px]" />
              <a
                href="https://wa.me/923160901427"
                target="_blank"
                rel="noopener noreferrer"
              >
                +92316-0901427
              </a>
            </div>

            <div className="flex items-center gap-2 hover:text-red-500">
              <FontAwesomeIcon icon={faEnvelope} className="text-[16px]" />
              <a href="mailto:khuzaimadevs@gmail.com" className="text-lg">
                khuzaimadevs@gmail.com
              </a>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-5 mt-6 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-900">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-900">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Pass values into FooterInfo */}
        {sections.map((section, index) => (
          <div key={index} className="w-full lg:w-auto">
            <FooterInfo
              heading={section.heading}
              paragraphs={section.paragraphs}
            />
          </div>
        ))}

        {/* Newsletter Section */}
        <div className="w-full lg:w-auto mt-2">
          <h3 className="font-bold text-[22px] mb-5">Newsletter</h3>
          <p className="font-semibold w-full lg:w-[300px] text-[16px]">
            Subscribe to our weekly Newsletter and receive updates via email.
          </p>

          <div className="flex mt-4">
            {/* Email input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md text-white focus:outline-none w-full lg:w-[220px]
              border border-white shadow-[0_0_8px_rgba(255,255,255,0.8)] placeholder-gray-300"
            />

            {/* Button */}
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-r-md cursor-pointer
              border border-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            >
              Subscribe
            </button>
          </div>

          <div className="mt-8">
            <p>We Accept</p>
            <img src={payment} alt="" className="mt-3 w-full lg:w-[320px]" />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-18 text-sm flex flex-col md:flex-row items-center justify-between px-3 lg:px-12 pb-4">
        <p className="text-[18px]">All Rights Reserved Company 2025</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-red-500">Terms & Conditions</a>
          <a href="#" className="hover:text-red-500">Claim</a>
          <a href="#" className="hover:text-red-500">Privacy & Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;