import React from "react";

const SocialIcon = ({
  href,
  title,
  svgPath,
  svgFill = "currentColor",
  iconSize = "w-10 h-10",
  extraClasses = "",
}) => {
  return (
    <div
      className={`mt-4 hover:bg-white hover:rounded-full hover:border hover:border-sky-900 p-2 ${extraClasses}`}
    >
      <a href={href} target="_blank" className="transition" title={title}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={svgFill}
          className={iconSize}
          viewBox="0 0 24 24"
        >
          <path d={svgPath} />
        </svg>
      </a>
    </div>
  );
};

export default SocialIcon;
