import React from "react";
import { Link as ScrollLink } from "react-scroll";
import ListItems from "./ListItems";

const DesktopMenu = () => {
  return (
    <div className="mt-5 p-2 flex flex-col items-center space-y-4 py-2 bg-white shadow-lg w-full">
      <ul className="flex-col items-center space-y-4">
        <ListItems />
      </ul>
    </div>
  );
};

export default DesktopMenu;
