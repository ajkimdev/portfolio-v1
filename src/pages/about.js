import React from "react";

function about() {
  return (
    <div id="about" className="py-8 min-h-screen">
      <h1>About Me</h1>
      <br />
      <div className="flex flex-wrap">
        <div className="w-1/2 pr-12">
          <p>
            I like building awesome software. I've built websites, browser
            plugins, corporate software and even games! If you are interested,
            you can view some of my favorite projects in my portfolio down
            below.
          </p>
        </div>
        <div className="w-1/2">
          <img src="https://picsum.photos/300" alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default about;
