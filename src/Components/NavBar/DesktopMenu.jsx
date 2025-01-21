import React from "react";
import ListItems from "./ListItems";

const DesktopMenu = () => {
  return (
    <>
      <div className="lg:flex flex space-x-4 px-2 py-2 absolute right-2 ">
        <ul className="flex space-x-4">
          <ListItems />
        </ul>
      </div>
    </>
  );
};

export default DesktopMenu;
