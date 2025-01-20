import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactDetails from "./ContactDetails";
import Description from "./Description";
import PortfolioProjects from "./Projects";
import SkillsDescription from "./Skills";
import EducationDetails from "./EducationDetails";
import ProfileImage from "./Profile-Image";

const DetailsScreen = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Trigger point offset
      once: false, // Animates only once when in view
    });
  }, []);

  return (
    <>
      <div
        id="details-screen"
        className="text-white bg-gradient-to-br from-blue-700 via-yellow-100 to-blue-500 overflow-hidden px-4"
      >
        <div
          className="grid sm:grid-cols-1 flex justify-between space-x-10 px-3 mt-8"
          data-aos="fade-up"
        >
          <ProfileImage />
          <div
            id="about-section"
            className="lg:ml-40 lg:w-3/4 mt-4"
            data-aos="fade-right"
          >
            <Description />
            <div data-aos="fade-right">
              <ContactDetails />
            </div>
          </div>
        </div>
        <div>
          <div id="skills-section" className="mt-20" data-aos="zoom-in">
            <SkillsDescription />
          </div>
          <div id="project-section" className="mt-20" data-aos="fade-left">
            <PortfolioProjects />
          </div>
          <div id="education-section" className="mt-20" data-aos="fade-up">
            <EducationDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsScreen;
