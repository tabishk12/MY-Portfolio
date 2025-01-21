import React from "react";
import ListItems from "./ListItems";

const MenuMobile = () => {
  return (
    <div className="mt-5 p-2 flex flex-col items-center space-y-4 py-2 sm:bg-white sm:shadow-lg w-full">
      <ul className="flex-col items-center space-y-4">
        <ListItems />
      </ul>
    </div>
  );
};

export default MenuMobile;
