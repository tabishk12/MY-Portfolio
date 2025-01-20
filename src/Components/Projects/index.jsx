import React from "react";

const PortfolioProjects = () => {
  return (
    <>
      <div className="rounded-md p-4 w-4/4  sm:m-10 md:w-50">
        <h2 className="text-3xl font-semibold text-gray-700 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Projec 1 */}
          <div className="bg-white shadow-gray-400 rounded-md p-4 transform transition duration-300  hover:scale-105 hover:mt-1">
            <h3 className="text-xl font-bold text-gray-800">
              E-Commerce Platform
            </h3>
            <p className="text-gray-600 mt-2">
              Built a scalable e-commerce platform featuring product filtering,
              secure payment integration, and an admin dashboard.
            </p>
            <p className="mt-2 text-gray-500">
              {" "}
              <strong>Tech Stack:</strong> React.js, Node.js, Express.js,
              MongoDB
            </p>
            <a
              href="https://github.com/tabishk12/E-Commerce-Platform/"
              className="text-blue-500 mt-3 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
          {/* Projec 2 */}
          <div className="bg-white rounded-md p-4  transform transition duration-300  hover:scale-105 hover:mt-1">
            <h3 className="text-xl font-bold text-gray-800">
              Secret Keeper App
            </h3>
            <p className="text-gray-600 mt-2">
              Developed a secure application for storing and managing sensitive
              information with encrypted data storage. Implemented user
              authentication, password protection, and role-based access control
              for enhanced security.
            </p>
            <p className="mt-2 text-gray-500">
              {" "}
              <strong>Tech Stack:</strong> Node.js, Express.js, MongoDB, Ejs.
            </p>
            <a
              href="https://github.com/tabishk12/Secret_keeper2.0"
              className="text-blue-500 mt-3 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioProjects;
