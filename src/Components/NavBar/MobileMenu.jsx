import React from "react";
import MenuMobile from "./MenuMobile";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen}
      <MenuMobile setIsOpen={setIsOpen} />
    </>
  );
};

export default MobileMenu;
