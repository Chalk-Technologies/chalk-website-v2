import React, { useState } from "react";
import styled from "styled-components";

import { Link } from "gatsby";
import Layout from "../components/Layout";

const Contact = () => {
  const [status, setStatus] = useState("initial");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      //SEND EMAIL HERE
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <Layout>
      <section className="flex-grow flex flex-col pt-36">
        <section className="">
          <h1 className="pb-12 text-5xl text-white uppercase font-heading pl-8">
            Contact <br />
            Us
          </h1>
          <div className="relative">
            <Image className="bg-gyms bg-cover py-96 bg-center" />
            <div className="bg-chalk-orange w-1 h-full absolute left-0 top-0 ml-24 mt-24 z-10" />
          </div>
        </section>
        <section className="absolute min-h-screen w-screen top-0 left-0 flex justify-center align-center pt-80 px-2 lg:py-80 z-30">
          <form
            onSubmit={handleSubmit}
            className="container mx-auto rounded-lg shadow-lg flex flex-col items-stretch justify-around p-8 px-4 lg:px-16 bg-chalk-dark-gray mx-24 border-2 border-chalk-orange"
          >
            {status === "initial" && (
              <h1 className="text-white text-4xl uppercase font-heading flex justify-center items-center my-3">
                Send us an email
              </h1>
            )}
            {status === "initial" && (
              <div className="flex-grow flex flex-col">
                <input
                  type="text"
                  required
                  placeholder="Subject"
                  className="my-3 flex flex-start items-start px-4 py-2 font-heading text-chalk-dark-gray"
                />
                <textarea
                  type="text"
                  required
                  placeholder="Message"
                  className="my-3 flex-grow flex flex-start items-start py-2 px-4 font-heading text-chalk-dark-gray"
                  rows={10}
                />
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="py-2 px-4 font-heading text-chalk-dark-gray my-3"
                />
                <button className="px-8 py-4 uppercase font-heading text-white border-white border-2 hover:text-chalk-dark-gray hover:bg-chalk-orange hover:border-chalk-orange transition w-1/2 mx-auto my-4 mt-6">
                  Send
                </button>
              </div>
            )}
            {status === "success" && (
              <div className="flex-grow flex flex-col items-center justify-center">
                <h2 className="font-body text-2xl flex justify-center items-center text-white font-heading">
                  ✅ All good! We'll get back to you as soon as we're finished
                  climbing.
                </h2>
                <Link
                  className="px-8 py-4 border-white border-2 font-heading mx-auto my-4 hover:border-chalk-orange hover:bg-chalk-orange transition text-white uppercase mt-12"
                  to="/"
                >
                  Back home
                </Link>
              </div>
            )}
            {status === "error" && (
              <div className="flex-grow flex flex-col items-center justify-center">
                <h2 className="font-body text-2xl flex justify-center items-center text-white font-heading">
                  😕 Something went wrong...
                </h2>
                <h2 className="font-body text-2xl flex justify-center items-center text-white font-heading mt-2">
                  Alternatively you can send us a good ol' fashioned email by
                  clicking{" "}
                  <a
                    className="font-bold text-chalk-orange ml-2"
                    href="mailto:info@chalk-technologies.com"
                    target="_blank"
                  >
                    👉 here
                  </a>
                  .
                </h2>
                <Link
                  className="px-8 py-4 border-white border-2 font-heading mx-auto my-4 hover:border-chalk-orange hover:bg-chalk-orange transition text-white uppercase mt-12"
                  to="/"
                >
                  Back home
                </Link>
              </div>
            )}
          </form>
        </section>
      </section>
    </Layout>
  );
};

export default Contact;

const Image = styled.div`
  min-height: 30vh;
  clip-path: polygon(0% 80%, 100% 0%, 100% 100%, 0% 100%);
  object-fit: cover;
`;
