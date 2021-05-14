import React, { useRef, useState } from "react";
import { Link } from "gatsby";

const Modal = ({ setShowModal }) => {
  const [status, setStatus] = useState("initial");

  const handleClick = (e) => {
    if (e.target === overlay.current) {
      setShowModal(false);
    }
  };
  const overlay = useRef();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      //SEND EMAIL
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="h-full w-screen absolute top-0 left-0 flex justify-center items-center z-30 bg-white bg-opacity-70 blur px-4"
      onClick={handleClick}
      ref={overlay}
    >
      <div className="rounded bg-chalk-dark-gray container mx-auto text-white flex flex-col lg:flex-row">
        <div className="flex-grow bg-modal bg-cover bg-norepeat rounded-l h-24 lg:h-auto" />
        <div className="px-4 lg:px-8 py-8 lg:py-16 relative">
          {status !== "initial" && (
            <div className="w-full h-full flex justify-center items-center absolute top-0 left-0 z-40 bg-chalk-dark-gray flex-col">
              <h1 className="text-white font-heading text-2xl">
                {status === "loading" && "Loading"}
                {status === "success" &&
                  "✅ All good! You will be the first one to know about the release date."}
                {status === "error" &&
                  "😕 Something went wrong. Feel free to send us an email"}
              </h1>
              {status === "success" && (
                <button
                  className="py-4 px-8 my-4 text-white uppercase font-heading border-2 border-white hover:bg-white hover:text-chalk-dark-gray"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              )}
              {status === "error" && (
                <Link
                  to="/contact"
                  className="py-4 px-8 my-4 text-white uppercase font-heading border-2 border-white"
                >
                  Send us an email
                </Link>
              )}
            </div>
          )}
          <h1 className="text-2xl lg:text-5xl font-heading pb-4">
            We're almost there! 🎉
          </h1>
          <div className="h-1 bg-chalk-orange  mb-12 flex-grow-0" />
          <p className="font-body text-xl lg:text-2xl pb-4">
            The whole team is working very hard to bring you out the best
            climbing experience.
          </p>

          <p className="font-body text-xl lg:text-2xl pb-4">
            Meanwhile, you can already use Beta from your browser
            <a
              className="font-bold ml-1 text-chalk-orange cursor-pointer hover:underline"
              href="https://beta.chalk-technologies.com"
              target="_blank"
            >
              👉 here
            </a>
          </p>
          <div className="py-4" />
          <p className="font-body text-xl lg:text-2xl pb-4">
            Want us to drop you a line when the mobile application is released ?
          </p>
          <p className="font-body text-xl lg:text-2xl pb-4">
            Simply leave us your email!
          </p>
          <form
            onSubmit={handleSubmitForm}
            className="flex flex-wrap lg:flex-nowrap justify-center items-stretch mt-0 lg:mt-8"
          >
            <input
              type="email"
              required
              className="p-2 flex-grow flex items-center justify-between text-chalk-dark-gray font-heading rounded text-xl"
            />
            <button
              className="ml-2 flex-grow-0 px-8 py-4 rounded border-2 border-white font-heading text-xl hover:border-chalk-orange hover:bg-chalk-orange hover:text-chalk-dark-gray mt-4 lg:mt-0"
              type="submit"
            >
              Yes, please!
            </button>
            <button
              className="mt-4 lg:mt-0 hover:color-red-500 text-md block lg:hidden"
              onClick={() => setShowModal(false)}
            >
              No, thank you.
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
