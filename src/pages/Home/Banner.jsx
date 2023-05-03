import React from "react";

const Banner = () => {
  return (
    <div>
      <header className="banner d-flex justify-content-center align-items-center text-center">
        <div className="text-white">
          <h2 className="display-4 fw-bold">
            Looking for a Complete <br />
            and Best Receip's Plan ?
          </h2>
          <p className="pt-2 pb-4 w-75 mx-auto">
            we are expert in web ui/ux design, development, seo and digital
            marketing with 10 years professional experience.
          </p>
          <div>
            <button
              className="btn btn-primary rounded-0 px-4 py-2 text-white"
              type="submit"
            >
              Get free tips
            </button>
            <button
              className="btn btn-secondary ms-2 rounded-0 px-4 py-2"
              type="submit"
            >
              Learn More
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
