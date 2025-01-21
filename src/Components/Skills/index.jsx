import React from "react";

const SkillsDescription = () => {
  return (
    <>
      <section className="sx:my-8 sx:px-8 p-6 md:p-12 lg:p-16 w-full ">
        <h2 className="text-3xl font-semibold text-gray-700 text-center">
          Skills
        </h2>
        <div className="flex justify-center text-center mt-4 sm:space-x-4 mb-4 xs:grid grid-cols-1 xs:px-8 xs:space-y-4 xs:item-center">
          <div
            className="bg-white shadow-md rounded-lg p-4 w-65 transform transition 
       xs:p-4 duration-300 hover:scale-105 hover:mt-2 "
          >
            <h3 className="font-bold text-lg text-gray-800">
              Frontend Development
            </h3>
            <p className="text-gray-600">
              React.js, Redux, Tailwind CSS, Bootstrap
            </p>
          </div>

          <div
            className="bg-white shadow-md rounded-md p-4 w-65transform transition 
       xs:p-4 duration-300 hover:scale-105 hover:mt-2  "
          >
            <h3 className="font-bold text-lg text-gray-800">
              Backend Development
            </h3>
            <p className="text-gray-600">Node.js , Express.js , REST APIs</p>
          </div>
          <div
            className="bg-white shadow-md rounded-md p-4 w-65transform transition 
       xs:p-4 duration-300 hover:scale-105 hover:mt-2  "
          >
            <h3 className="font-bold text-lg text-gray-800">
              Database Management
            </h3>
            <p className="text-gray-600">MongoDB, Mongoose</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsDescription;
