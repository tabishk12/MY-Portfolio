import React from "react";
import { Link as ScrollLink } from "react-scroll";

const DesktopMenu = ({ downloadPDF }) => {
  return (
    <>
      <div className=" lg:flex flex space-x-4 px-2 py-2 absolute right-2 bg-white">
        <ul className="flex space-x-4">
          <li className="text-xl px-4 hover:bg-slate-100 cursor-pointer">
            <ScrollLink to="about-section" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li className="text-xl px-4 hover:bg-slate-100 cursor-pointer">
            <ScrollLink to="skills-section" smooth={true} duration={500}>
              Skills
            </ScrollLink>
          </li>
          <li className="text-xl px-4 hover:bg-slate-100 cursor-pointer">
            <ScrollLink to="project-section" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li className="text-xl px-4 hover:bg-slate-100 cursor-pointer">
            <ScrollLink to="education-section" smooth={true} duration={500}>
              Education
            </ScrollLink>
          </li>
          <li>
            <button
              onClick={downloadPDF}
              className="border-2 bg-slate-100 drop-shadow-lg h-9 rounded-md px-1 py-1 hover:bg-slate-200"
            >
              Download Resume
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DesktopMenu;
