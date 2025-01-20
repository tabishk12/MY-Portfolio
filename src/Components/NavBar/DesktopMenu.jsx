import React from "react";
import { Link as ScrollLink } from "react-scroll";
import ListItems from "./ListItems";

const DesktopMenu = () => {
  return (
    <>
      <div className=" lg:flex flex space-x-4 px-2 py-2 absolute right-2 bg-white">
        <ul className="flex space-x-4">
          <ListItems />
        </ul>
      </div>
    </>
  );
};

export default DesktopMenu;
