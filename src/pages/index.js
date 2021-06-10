import React, { useState } from "react";

import MenuClimbersGyms from "../components/ MenuClimbersGyms";
import ClimbersGymsPictures from "../components/ClimbersGymsPictures";
import Hero from "../components/hero";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import Seo from "../components/SEO";

const IndexPage = () => {
  const [menu, setMenu] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Seo title="Change the way you climb. Track, train, send. Manage your climbing gym" />
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
