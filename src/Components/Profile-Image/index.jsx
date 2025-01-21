import React from "react";
import TabishPic from "../ProfilePic/TabishPic.jpg";
const ProfileImage = () => {
  return (
    <>
      <div className="flex justify-center">
        <div
          className="bg-white w-56 h-56 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 px-6 rounded-full overflow-hidden border-4  border-gradient-to-br from-green-300 via-white to-green-200 shadow-lg shadow-gray-500 transform transition 
       duration-300 hover:scale-105 "
        >
          <img
            src={TabishPic}
            alt="Profile Picture"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default ProfileImage;
