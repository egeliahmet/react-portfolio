import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        I have experience working as a Software Specialist in the Cash Management and Transaction Banking Department at Garanti Technology. In my current role, I focus on various subject areas within my domain, such as billing, tax payments, utility payments, integration applications, account payment APIs, and Payment Services Directive Two (PSD2).
        </p>
        <br/>
          <p>Prior to my current position, I gained valuable expertise in web service development and the integration of outbound and inbound web services across all departments of Garanti Bank, as well as with third-party companies.</p>
        <br />

        <p className="text-xl">
        The continuous learning and evolving nature of software development keep me fueled with excitement, as I embrace new technologies and tools that push the boundaries of what can be achieved.
      </p>
      </div>
    </div>
  );
};

export default About;
