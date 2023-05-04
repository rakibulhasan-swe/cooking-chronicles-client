import React from "react";

const Banner = () => {
  return (
    <div>
      <header className="banner d-flex justify-content-center align-items-center text-center">
        <div className="text-white">
          <h2 className="display-4 fw-bold">
            Looking for a Complete <br />
            and Best Recipe's Plan ?
          </h2>
          <p className="pt-2 pb-4 w-75 mx-auto fw-light">
            we are expert in making different types of Recipe's from our master chef with 20+ years of professional experience.
          </p>
          <div>
            <button
              className="btn btn-primary px-4 py-2 text-white"
              type="submit"
            >
              Get free tips
            </button>
            <button
              className="btn btn-secondary ms-2 px-4 py-2"
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
