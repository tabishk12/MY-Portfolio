import React from "react";
import MenuMobile from "./MenuMobile";

const MobileMenu = ({ isOpen, setIsOpen, downloadPDF }) => {
  return (
    <>
      {" "}
      {{ isOpen } ? (
        <MenuMobile downloadPDF={downloadPDF} setIsOpen={setIsOpen} />
      ) : (
        " "
      )}
    </>
  );
};

export default MobileMenu;
