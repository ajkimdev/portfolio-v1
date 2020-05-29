import React from "react";

function about() {
  return (
    <div id="about" className="py-8 min-h-screen">
      <h2>About Me</h2>
      <br />
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="w-full md:w-3/5">
          {/* prettier-ignore */}
          <p className="pr-0 md:pr-8">
            I like building various software and learning different languages.
            I mainly learned Object-Oriented Programming using <code>Java</code> and Data analysis with <code>Python</code>. Also, I am playing with<code>C</code> langs and <code>Javascript</code> through side projects. If you are interested, you can view some of my favorite projects in my portfolio down below.
          </p>
        </div>
        <div className="w-full mb-8 md:w-1/3 md:mb-0">
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
