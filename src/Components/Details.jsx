import React from "react";
import ContactDetails from "./ContactDetails";
import Description from "./Description";
import PortfolioProjects from "./Projects";
import SkillsDescription from "./Skills";
import EducationDetails from "./EducationDetails";
import TabishPic from "./ProfilePic/TabishPic.jpg";
const DetailsScreen = () => {
  return (
    <>
      <div id="details-screen" className="mt-8">
        <div className=" grid sm:grid-cols-1 lg:flex justify-between space-x-10 px-3 mt-8">
          <div className="flex justify-center">
            <div className="w-56 h-56 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 px-6 rounded-full overflow-hidden border-4  border-gray-300">
              <img
                src={TabishPic}
                alt="Profile Picture"
                className="w-full h-full"
              />
              <p className="w-1/4"> </p>
            </div>
          </div>
          <div id="about-section" className="ml-40">
            <Description />

            <ContactDetails />
          </div>
        </div>
        <div>
          <div id="skills-section">
            <SkillsDescription />
          </div>
          <div id="project-section">
            <PortfolioProjects />
          </div>
          <div id="education-section">
            <EducationDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsScreen;
