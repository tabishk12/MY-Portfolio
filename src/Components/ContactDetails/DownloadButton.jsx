import React from "react";
import "../../index.css";
import Tabish_resume from "../Pdf/Tabish_resume.pdf";
const DownloadButton = () => {
  const downloadPDF = async () => {
    const link = document.createElement("a"); // Create an anchor element
    link.href = Tabish_resume; // Set the PDF file path
    link.download = "Tabish_Resume.pdf"; // Set the downloaded file name
    link.click(); // Trigger the download
  };
  return (
    <>
      <button
        onClick={downloadPDF}
        className="border-2 bg-blue-500 text-white drop-shadow-lg rounded-lg px-1 py-1 hover:bg-blue-600 transform transition duration-900  hover:scale-105 cursor-pointer"
      >
        <p className="text-md lg:text-xl overflow-hidden">Download Resume</p>
      </button>
    </>
  );
};

export default DownloadButton;
