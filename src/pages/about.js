import React from "react";

function about() {
  return (
    <div id="about" className="py-8 min-h-screen">
      <h2>About Me</h2>
      <br />
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="w-full md:w-1/2">
          <p className="text-gray-800">
            I like building awesome software. I've built websites, browser
            plugins, corporate software and even games! If you are interested,
            you can view some of my favorite projects in my portfolio down
            below.
          </p>
        </div>
        <div className="w-full mb-8 md:w-1/2 md:mb-0">
          <img
            className="object-contain h-64 w-full"
            src="https://picsum.photos/500"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}

export default about;
