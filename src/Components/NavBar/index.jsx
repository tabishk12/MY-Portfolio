import React, { useState } from "react";
import MobileMenuIcon from "./MobileMenuIcon";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import Tabish_resume from "../Pdf/Tabish_resume.pdf";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const downloadPDF = async () => {
    const link = document.createElement("a"); // Create an anchor element
    link.href = Tabish_resume; // Set the PDF file path
    link.download = "Tabish_Resume.pdf"; // Set the downloaded file name
    link.click(); // Trigger the download
  };

  return (
    <>
      <nav className="w-full pb-2.5 px-1.5 bg-white sm:bg-transparent lg:bg-white drop-shadow-lg flex justify-between lg:h-16 ">
        <div className="text-3xl font-bold">
          <h1 className="hover:bg-slate-200 px-3">Portfolio</h1>
        </div>
        <div className="hidden lg:block">
          <DesktopMenu downloadPDF={downloadPDF} />
        </div>
        <div className="flex items-center space-x-4">
          <div className="lg:hidden">
            <MobileMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
            <div>
              {isOpen && (
                <MobileMenu
                  downloadPDF={downloadPDF}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
