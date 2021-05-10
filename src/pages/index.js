import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/hero";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Banner />
    </Layout>
  );
};

export default IndexPage;
