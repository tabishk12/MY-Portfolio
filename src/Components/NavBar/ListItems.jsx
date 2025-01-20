import React from "react";
import { Link as ScrollLink } from "react-scroll";
const ListItems = () => {
  return (
    <>
      <li
        className="text-xl px-4 hover:bg-slate-100 transform transition duration-900  hover:scale-105 cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <ScrollLink to="about-section" smooth={true} duration={700}>
          About
        </ScrollLink>
      </li>
      <li
        className="text-xl px-4 hover:bg-slate-100 px-4 transform transition duration-900  hover:scale-105 cursor-pointer cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <ScrollLink to="skills-section" smooth={true} duration={700}>
          Skills
        </ScrollLink>
      </li>
      <li
        className="text-xl px-4 hover:bg-slate-100 px-4  transform transition duration-900  hover:scale-105 cursor-pointer cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <ScrollLink to="project-section" smooth={true} duration={700}>
          Projects
        </ScrollLink>
      </li>
      <li
        className="text-xl px-4 hover:bg-slate-100 px-4 transform transition duration-900  hover:scale-105 cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <ScrollLink to="education-section" smooth={true} duration={700}>
          Education
        </ScrollLink>
      </li>
    </>
  );
};

export default ListItems;
