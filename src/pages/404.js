import React from "react";
import Layout from "../components/layout";
import NotFoundImg from "../../static/404.svg";

function NotFoundPage() {
  return (
    <Layout>
      <div className="mt-24 md:mt-0">
        <img
          alt="pageNotFound"
          className="object-contain h-32 w-full md:h-64"
          src={NotFoundImg}
        />
        <h2 className="text-center text-3xl text-gray-800 md:text-4xl">
          Page Not Found
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
