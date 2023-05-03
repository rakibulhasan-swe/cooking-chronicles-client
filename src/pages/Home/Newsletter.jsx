import React from "react";
import { Button, Container } from "react-bootstrap";

const Newsletter = () => {
  return (
    <>
      <div className="subscribe d-flex align-items-center my-5">
        <Container className="text-white">
          <h1 className="fw-bold">Subscribe to our Newsletter</h1>
          <p className="fw-light py-3">
            Joins us. If you subcribe you will get all the latest updates from
            our ends.
          </p>
          <Button variant="primary">Subscribe</Button>
        </Container>
      </div>
    </>
  );
};

export default Newsletter;
