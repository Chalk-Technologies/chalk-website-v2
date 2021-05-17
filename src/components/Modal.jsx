import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "gatsby";

const Modal = ({ setShowModal }) => {
  const [status, setStatus] = useState("initial");

  const handleClick = (e) => {
    if (e.target === overlay.current) {
      setShowModal(false);
    }
  };
  const overlay = useRef();

  const { register, handleSubmit } = useForm();

  const handleSubmitForm = (data) => {
    console.log(data);
    setStatus("loading");

    const { email, first, last } = data;

    let body = JSON.stringify({
      email,
      first,
      last,
    });

    fetch("https://server.chalk-technologies.com/system/email_subscribe", {
      method: "POST",
      body,
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
      })
      .then(() => setStatus("success"))
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <div
      className="absolute top-0 left-0 z-30 flex items-center justify-center w-screen h-full px-4 bg-white bg-opacity-70 blur"
      onClick={handleClick}
      ref={overlay}
    >
      <div className="container flex flex-col mx-auto text-white rounded bg-chalk-dark-gray lg:flex-row">
        <div className="flex-grow h-24 bg-cover rounded-l bg-modal bg-norepeat lg:h-auto" />
        <div className="relative px-4 py-8 lg:px-8 lg:py-16">
          {status !== "initial" && (
            <div className="absolute top-0 left-0 z-40 flex flex-col items-center justify-center w-full h-full bg-chalk-dark-gray">
              <h1 className="text-2xl text-white font-heading">
                {status === "loading" && "Loading"}
                {status === "success" &&
                  "✅ All good! You will be the first one to know about the release date."}
                {status === "error" &&
                  "😕 Something went wrong. Feel free to send us an email"}
              </h1>
              {status === "success" && (
                <button
                  className="px-8 py-4 my-4 text-white uppercase border-2 border-white font-heading hover:bg-white hover:text-chalk-dark-gray"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              )}
              {status === "error" && (
                <Link
                  to="/contact"
                  className="px-8 py-4 my-4 text-white uppercase border-2 border-white font-heading"
                >
                  Send us an email
                </Link>
              )}
            </div>
          )}
          <h1 className="pb-4 text-2xl lg:text-5xl font-heading">
            We're almost there! 🎉
          </h1>
          <div className="flex-grow-0 h-1 mb-12 bg-chalk-orange" />
          <p className="pb-4 text-xl font-body lg:text-2xl">
            The whole team is working very hard to bring you out the best
            climbing experience.
          </p>

          <p className="pb-4 text-xl font-body lg:text-2xl">
            Meanwhile, you can already use Beta from your browser
            <a
              className="ml-1 font-bold cursor-pointer text-chalk-orange hover:underline"
              href="https://beta.chalk-technologies.com"
              target="_blank"
            >
              👉 here
            </a>
          </p>
          <div className="py-4" />
          <p className="pb-4 text-xl font-body lg:text-2xl">
            Want us to drop you a line when the mobile application is released ?
          </p>
          <p className="pb-4 text-xl font-body lg:text-2xl">
            Simply leave us your email!
          </p>
          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className="flex flex-col mt-0 ms-stretch lg:flex-nowrap lg:mt-8"
          >
            <div className="flex flex-wrap mb-2 lg:mb-3">
              <input
                {...register("first")}
                required
                placeholder="First name"
                className="flex items-center justify-between flex-grow p-2 mb-2 text-xl rounded lg:p-4 lg:mb-0 lg:mr-2 text-chalk-dark-gray font-heading"
              />
              <input
                {...register("last")}
                required
                placeholder="Last name"
                className="flex items-center justify-between flex-grow p-2 text-xl rounded lg:ml-2 text-chalk-dark-gray font-heading"
              />
            </div>
            <div className="flex flex-wrap">
              <input
                {...register("email")}
                type="email"
                required
                placeholder="me@email.com"
                className="flex items-center justify-between flex-grow p-2 text-xl rounded text-chalk-dark-gray font-heading"
              />
              <div className="flex flex-col mx-auto">
                <button
                  className="flex-grow-0 px-8 py-4 mt-4 ml-2 text-xl border-2 border-white rounded font-heading hover:border-chalk-orange hover:bg-chalk-orange hover:text-chalk-dark-gray lg:mt-0"
                  type="submit"
                >
                  Yes, please!
                </button>
                <button
                  className="block mt-4 lg:mt-0 hover:color-red-500 text-md lg:hidden"
                  onClick={() => setShowModal(false)}
                >
                  No, thank you.
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
