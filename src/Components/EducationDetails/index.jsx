import React from "react";

const EducationDetails = () => {
  return (
    <>
      <div className="rounded-lg p-4">
        <h3 className="text-gray-800 text-3xl text-center">
          Educational Details
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 mb-6 ml-3">
          <div className="bg-white shadow-gray-100 rounded-lg gap-6 mt-6">
            <div className=" rounded-md p-4 transform transition duration-300  hover:scale-105 hover:shadow-lg hover:mt-1 rounded-lg p-4">
              <h3 className="text-gray-600 text-2xl text-center">
                {" "}
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-gray-500 text-lg text-center">
                {" "}
                Mumbai University{" "}
              </p>
              <p className="text-gray-500 text-lg text-center">
                Persuing (Third-Year) CGPA : 9.8{" "}
              </p>
            </div>
          </div>
          <div className=" bg-white shadow-gray-100 rounded-lg gap-6 mt-6">
            <div className="rounded-md p-4 transform transition duration-300  hover:scale-105 hover:shadow-lg hover:mt-1 rounded-lg p-4">
              <h3 className="text-gray-600 text-2xl text-center">
                HSC (12th){" "}
              </h3>
              <p className="text-gray-500 text-lg text-center">
                {" "}
                Central Board of Secondary Education{" "}
              </p>
              <p className="text-gray-500 text-lg text-center">year : 2021 </p>
              <p className="text-gray-500 text-lg text-center">
                Percentage : 83.4%{" "}
              </p>
            </div>
          </div>
          <div className="bg-white shadow-gray-100 rounded-lg gap-6 mt-6">
            <div className="rounded-md p-4 transform transition duration-300  hover:scale-105 hover:shadow-lg hover:mt-1 rounded-lg p-4">
              <h3 className="text-gray-600 text-2xl text-center">
                {" "}
                SSC (10th)
              </h3>
              <p className="text-gray-500 text-lg text-center">
                {" "}
                Central Board of Secondary Education{" "}
              </p>
              <p className="text-gray-500 text-lg text-center"> Year : 2019</p>
              <p className="text-gray-500 text-lg text-center">
                Percentage : 85.5%{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationDetails;
