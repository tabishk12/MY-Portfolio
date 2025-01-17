import React from "react";

const ContactDetails = () => {
  return (
    <>
      <ul>
        <div className="bg-white shadow-md rounded-md p-4 w-4/4 mt-6">
          <h2 className="text-3xl font-semibold text-gray-700 text-center">
            Contact Details
          </h2>
          <li>
            <td className="md:text-xl font-semibold text-gray-700 text-center">
              Email :{" "}
            </td>
            <td> tabishk655@gmail.com </td>
          </li>
          <li>
            <td className="md:text-xl font-semibold text-gray-700 text-center">
              Contact No. :
            </td>
            <td> 6386215986</td>
          </li>
          <li>
            <td className="md:text-xl font-semibold text-gray-700 text-center">
              LinkedIn :{" "}
            </td>
            <td>
              <a
                className="text-blue-400 hover:text-blue-600"
                href="https://www.linkedin.com/in/tabish-khan-ba2011282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                Visit LinkedIn
              </a>
            </td>
          </li>
          <li>
            <td className="md:text-xl font-semibold text-gray-700 text-center">
              GitHub :{" "}
            </td>
            <td>
              <a
                className="text-blue-400 hover:text-blue-600"
                href="https://github.com/tabishk12"
                target="_blank"
              >
                Visit Github
              </a>
            </td>
          </li>
        </div>
      </ul>
    </>
  );
};

export default ContactDetails;
