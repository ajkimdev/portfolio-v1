import React from "react";
import Layout from "../components/layout";
import NotFoundImg from "../../static/404.svg";

function NotFoundPage() {
  return (
    <Layout>
      <div className="flex flex-col">
        <img
          alt="pageNotFound"
          className="object-none object-center"
          src={NotFoundImg}
        />
        <h2 className="text-center text-3xl md:text-4xl">Page Not Found</h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
