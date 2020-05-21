import React from "react";

import Layout from "../components/layout.js";
import About from "./about.js";
import Projects from "./projects.js";
import Contact from "./contact.js";

function IndexPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        <h1>Hi, my name is</h1>
        <h2 className="text-4xl md:text-5xl">Jongyun Kim.</h2>
        <h3 className="text-4xl md:text-5xl text-gray-800">
          I am majoring in Computer Science.
        </h3>
        <br />
        <p className="text-gray-800">
          At Washington State University in Pullman, WA.
          <br />
          There is nothing showing on my portfolio.
        </p>
        <br />
      </div>
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default IndexPage;
