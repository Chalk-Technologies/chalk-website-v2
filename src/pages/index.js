import React, { useEffect, useState } from "react";
import MenuClimbersGyms from "../components/ MenuClimbersGyms";
import Banner from "../components/Banner";
import ClimbersGymsPictures from "../components/ClimbersGymsPictures";
import Hero from "../components/hero";
import Layout from "../components/layout";

const IndexPage = () => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    console.log({ menu });
  }, [menu]);

  return (
    <Layout>
      <Hero />
      <Banner />
      <MenuClimbersGyms setMenu={setMenu} />
      <ClimbersGymsPictures selectedMenu={menu} />
    </Layout>
  );
};

export default IndexPage;
