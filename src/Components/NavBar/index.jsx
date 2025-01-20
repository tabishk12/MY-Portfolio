import React, { useState } from "react";
import MobileMenuIcon from "./MobileMenuIcon";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full pb-2.5 px-1.5 bg-transparent flex justify-between lg:h-16 ">
        <div className="text-3xl font-bold">
          <h1 className="hover:scale-105 hover:bg-white hover:shadow-gray-100 px-3">
            Portfolio
          </h1>
        </div>
        <div className="hidden lg:block">
          <DesktopMenu />
        </div>
        <div className="flex items-center space-x-4">
          <div className="lg:hidden">
            <MobileMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
            <div>
              {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
