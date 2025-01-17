import React from "react";
import { Link as ScrollLink } from "react-scroll";

const DesktopMenu = ({ isOpen, setIsOpen, downloadPDF }) => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mt-5 flex flex-col items-center space-y-4 py-2 bg-white shadow-lg w-full">
      <ul className="flex-col items-center space-y-4">
        <li
          className="text-xl px-4 hover:bg-slate-100 cursor-pointer"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <ScrollLink to="about-section" smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li
          className="text-xl px-4 hover:bg-slate-100 cursor-pointer"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <ScrollLink to="skills-section" smooth={true} duration={500}>
            Skills
          </ScrollLink>
        </li>
        <li
          className="text-xl px-4 hover:bg-slate-100 cursor-pointer"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <ScrollLink to="project-section" smooth={true} duration={500}>
            Projects
          </ScrollLink>
        </li>
        <li
          className="text-xl px-4 hover:bg-slate-100 cursor-pointer"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <ScrollLink to="education-section" smooth={true} duration={500}>
            Education
          </ScrollLink>
        </li>
        <li>
          <button
            onClick={downloadPDF}
            className="border-2 bg-slate-100 drop-shadow-lg rounded-md px-1 py-1 hover:bg-slate-200"
          >
            Download Resume
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
