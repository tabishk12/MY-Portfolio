import React from "react";

const Description = () => {
  return (
    <>
      <div
        className="text-white bg-transparent rounded-lg p-8 md:p-12 lg:p-16 w-full max-w-* mx-auto transform transition 
        duration-300 hover:scale-105 hover:mt-2 focus:ring-4 focus:ring-blue-400"
      >
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Description
        </h2>
        <h3 className="lg:text-xl text-lg leading-relaxed text-gray-900 text-center md:text-left ">
          <span className="text-2xl text-gray-900"> Hello , It's Me</span>
          <br />
          <strong className="text-4xl text-white">Tabish Khan </strong>
          <br />A highly motivated and results-oriented Full Stack Developer
          with a strong foundation in the
          <span className="text-red-600 font-semibold"> MERN stack</span>{" "}
          (MongoDB, Express.js, React.js, Node.js).
          <br />
          I'm eager to learn and grow in a challenging environment. I love
          tackling problems and finding creative solutions. I'm excited to
          contribute my skills to a dynamic team and build amazing products that
          users will love.
        </h3>
      </div>
    </>
  );
};

export default Description;
