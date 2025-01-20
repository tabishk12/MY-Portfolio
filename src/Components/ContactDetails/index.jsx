import React from "react";
import DownloadButton from "./DownloadButton";
import SocialIcon from "./SocialIcons";

const ContactDetails = () => {
  return (
    <>
      {/* Parent div */}
      <div className="md:flex md:flex-cols flex justify-between item-center w-full xs:grid xs:grid-cols-1 xs:space-y-1">
        {" "}
        {/* xs is custom width defined in tailwind,config.js */}
        {/* Child 1 */}
        <div className="p-2 py-1 flex justify-center items-center mt-8 lg:p-3">
          <DownloadButton />
        </div>
        {/* Child 2 */}
        <div className="flex justify-center items-center mt-8 space-x-12 space-y-4 p-4">
          <div className="flex justify-center items-center mt-8 space-x-12 space-y-4 p-4">
            {/* Email Icon */}
            <SocialIcon
              href="mailto:tabishk655@gmail.com"
              title="Send me an email"
              svgPath="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4ZM20 6V7.05857L12 12L4 7.05857V6H20ZM4 18V8.63429L12 13.576L20 8.63429V18H4Z"
              svgFill="red"
            />

            {/* LinkedIn Icon */}
            <SocialIcon
              href="https://www.linkedin.com/in/tabish-khan-ba2011282"
              title="Connect with me on LinkedIn"
              svgPath="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.294c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75c.967 0 1.75.784 1.75 1.75s-.783 1.75-1.75 1.75zm13.5 10.294h-3v-4.799c0-1.148-.026-2.626-1.597-2.626-1.598 0-1.842 1.248-1.842 2.537v4.888h-3v-9h2.884v1.229h.041c.402-.761 1.384-1.561 2.847-1.561 3.045 0 3.607 2.005 3.607 4.614v4.718z"
              svgFill="bg-bule-900"
              iconSize="w-8 h-8"
            />

            {/* GitHub Icon */}
            <SocialIcon
              href="https://github.com/tabishk12"
              title="View my GitHub"
              svgFill="bg-bule-900"
              svgPath="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.304-.536-1.526.116-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.398 3.003-.404 1.02.006 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.65.241 2.872.118 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.803 5.624-5.475 5.92.43.371.823 1.102.823 2.222v3.293c0 .319.216.694.825.576 4.765-1.587 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              iconSize="w-9 h-9"
            />
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
