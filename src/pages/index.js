import React, { useState } from "react";

import MenuClimbersGyms from "../components/ MenuClimbersGyms";
import Banner from "../components/Banner";
import ClimbersGymsPictures from "../components/ClimbersGymsPictures";
import Hero from "../components/hero";
import Layout from "../components/Layout";
import Modal from "../components/Modal";

const IndexPage = () => {
  const [menu, setMenu] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout class="min-h-screen flex flex-col relative">
      {showModal && <Modal setShowModal={setShowModal} />}
      <Hero setShowModal={setShowModal} />
      <MenuClimbersGyms setMenu={setMenu} className="flex-grow" />
      <ClimbersGymsPictures selectedMenu={menu} setMenu={setMenu} />
    </Layout>
  );
};

export default IndexPage;
