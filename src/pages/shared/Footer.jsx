import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="mt-5 container-fluid bg-dark pt-5 pb-3 text-white">
        <div class="container py-5">
          <div class="row g-4">
            <div class="col-md-6 col-lg-4">
              <h4 class="fw-bold fs-3 pb-3">Cooking Chronicles</h4>
              <p>
                We are a Bangladesh based food agency.
              </p>
              <p>
                <span class="d-block">
                  Middle Badda, Dhaka 1212, Bangladesh 
                </span>
                <span class="d-block">Phone: +098988998 98</span>
                <span class="d-block">Email: info@cookingchronicles.com</span>
              </p>
            </div>
            <div class="col-md-6 col-lg-2">
              <h5 class="pb-4">Our Services</h5>
              <p>
                <a class="text-decoration-none text-white" href="">
                  Master Chef
                </a>
              </p>
              <p>
                <a class="text-decoration-none text-white" href="">
                  Food Delivery
                </a>
              </p>
              <p>
                <a class="text-decoration-none text-white" href="">
                  Food Safety
                </a>
              </p>
              <p>
                <a class="text-decoration-none text-white" href="">
                  UI/UX Design
                </a>
              </p>
            </div>
            <div class="col-md-6 col-lg-2">
              <h5 class="pb-4">Company</h5>
              <p>
                <a class="text-decoration-none text-white" href="#">
                  About us
                </a>
              </p>
              <p>
                <a class="text-decoration-none text-white" href="#">
                  Meet the team
                </a>
              </p>
              <p>
                <a class="text-decoration-none text-white" href="#">
                  Partner
                </a>
              </p>
              <p>
                <a class="text-decoration-none text-white" href="#">
                  Pricing Plan
                </a>
              </p>
              <p>
                <a class="text-decoration-none text-white" href="#">
                  Career
                </a>
              </p>
            </div>
            <div class="col-md-6 col-lg-4">
              <h5 class="pb-4">Join Our Newsletter</h5>
              <p>Get Updates Always</p>
              <div class="input-group my-3">
                <input
                  type="text"
                  class="form-control rounded-0 py-2"
                  placeholder="Enter your email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-primary rounded-0 text-white"
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <p class="text-center fw-light pt-5">
          All rights reserved | &copy; 2023 cooking chronicles
        </p>
      </footer>
    </>
  );
};

export default Footer;
