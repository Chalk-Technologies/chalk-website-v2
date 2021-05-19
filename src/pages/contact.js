import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { API_ENDPOINT } from "../utils/config";

import { Link } from "gatsby";
import Layout from "../components/Layout";

const Contact = () => {
  const [status, setStatus] = useState("initial");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setStatus("loading");

    const { recipient, title, text } = data;

    let body = JSON.stringify({
      recipient,
      title,
      text,
      secret: "XmTpO1",
    });

    fetch(`${API_ENDPOINT}/system/mail`, {
      method: "POST",
      body,
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
      })
      .then(() => {
        setStatus("success");
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  };

  return (
    <Layout>
      <section className="flex flex-col flex-grow pt-36">
        <section className="">
          <h1 className="pb-12 pl-8 text-5xl text-white uppercase font-heading">
            Contact <br />
            Us
          </h1>
          <div className="relative">
            <Image className="bg-center bg-cover bg-gyms py-96" />
            <div className="absolute top-0 left-0 z-10 w-1 h-full mt-24 ml-24 bg-chalk-orange" />
          </div>
        </section>
        <section className="absolute top-0 left-0 z-30 flex justify-center w-screen min-h-screen px-2 mt-20 align-center pt-60 lg:py-60">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="container flex flex-col items-stretch justify-around p-8 px-4 mx-24 mx-auto border-2 lg:px-16 bg-chalk-dark-gray border-chalk-orange"
          >
            {status === "initial" && (
              <h1 className="flex items-center justify-center my-3 text-4xl text-white uppercase font-heading">
                Send us an email
              </h1>
            )}
            {status === "initial" && (
              <div className="flex flex-col flex-grow">
                <input
                  {...register("title")}
                  type="text"
                  required
                  placeholder="Subject"
                  className="flex items-start px-4 py-2 my-3 flex-start font-heading text-chalk-dark-gray"
                />
                <textarea
                  {...register("text")}
                  type="text"
                  required
                  placeholder="Message"
                  className="flex items-start flex-grow px-4 py-2 my-3 flex-start font-heading text-chalk-dark-gray"
                  rows={10}
                />
                <input
                  {...register("recipient")}
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="px-4 py-2 my-3 font-heading text-chalk-dark-gray"
                />
                <button className="w-1/2 px-8 py-4 mx-auto my-4 mt-6 text-white uppercase transition border-2 border-white font-heading hover:text-chalk-dark-gray hover:bg-chalk-orange hover:border-chalk-orange">
                  Send
                </button>
              </div>
            )}
            {status === "success" && (
              <div className="flex flex-col items-center justify-center flex-grow">
                <h2 className="flex items-center justify-center text-2xl text-white font-body font-heading">
                  <span role="img" alt="check mark icon">
                    ✅
                  </span>{" "}
                  All good! We'll get back to you as soon as we're finished
                  climbing.
                </h2>
                <Link
                  className="px-8 py-4 mx-auto my-4 mt-12 text-white uppercase transition border-2 border-white font-heading hover:border-chalk-orange hover:bg-chalk-orange"
                  to="/"
                >
                  Back home
                </Link>
              </div>
            )}
            {status === "error" && (
              <div className="flex flex-col items-center justify-center flex-grow">
                <h2 className="flex items-center justify-center text-2xl text-white font-body font-heading">
                  <span role="img" aria-label="sad face emoji">
                    😕
                  </span>{" "}
                  Something went wrong...
                </h2>
                <h2 className="flex items-center justify-center mt-2 text-2xl text-white font-body font-heading">
                  Alternatively you can send us a good ol' fashioned email by
                  clicking{" "}
                  <a
                    className="ml-2 font-bold text-chalk-orange"
                    href="mailto:info@chalk-technologies.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span role="img" aria-label="point right emoji">
                      👉
                    </span>{" "}
                    here
                  </a>
                  .
                </h2>
                <Link
                  className="px-8 py-4 mx-auto my-4 mt-12 text-white uppercase transition border-2 border-white font-heading hover:border-chalk-orange hover:bg-chalk-orange"
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
