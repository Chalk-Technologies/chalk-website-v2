import React, { useState } from "react";
import { t } from "@lingui/macro";

import MenuClimbersGyms from "../components/MenuClimbersGyms";
import ClimbersGymsPictures from "../components/ClimbersGymsPictures";
import Hero from "../components/hero";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import Seo from "../components/SEO";

const IndexPage = () => {
  const [menu, setMenu] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const seo = {
    title: t`BETA makes your sessions count`,
    description: t`BETA powers climbers and gyms through technologies that help you train smarter and send harder climbs, while tracking and sharing your progress with friends.`,
  };

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <Layout class="min-h-screen flex flex-col relative">
        {showModal && <Modal setShowModal={setShowModal} />}
        <Hero setShowModal={setShowModal} />
        <MenuClimbersGyms setMenu={setMenu} className="flex-grow" />
        <ClimbersGymsPictures selectedMenu={menu} setMenu={setMenu} />
      </Layout>
    </>
  );
};

export default IndexPage;
