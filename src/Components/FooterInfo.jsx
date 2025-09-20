import React from "react";

const FooterInfo = ({ heading, paragraphs }) => {
  return (
    <div>
      <h3 className="text-lg font-bold text-[22px] mb-5 mt-2 hover:text-red-500 cursor-pointer">{heading}</h3>
      <ul className="space-y-3 font-semibold">
        {paragraphs.map((para, i) => (
          <li key={i} className="hover:text-red-500 cursor-pointer" >
            {para}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterInfo;
