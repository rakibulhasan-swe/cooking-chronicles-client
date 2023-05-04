import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ChefBanner = () => {
  const [chef, setChef] = useState({});
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://cooking-chronicles-server-rakibhasan-programmer.vercel.app/chef/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setChef(data);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const {
    chef_img,
    chef_name,
    desc,
    years_of_experience,
    numbers_of_recipe,
    likes,
  } = chef;

  return (
    <>
      {loader ? (
        <div className="text-center pt-4">
          <Spinner variant="primary"></Spinner>
        </div>
      ) : (
        <Container>
          <div class="card my-3">
            <div class="row g-0 d-flex align-items-center">
              <div class="col-md-6">
                <img src={chef_img} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h4 class="card-title fw-semibold">{chef_name}</h4>
                  <p class="card-text py-3 fw-light lh-lg">{desc}</p>
                  <div className="d-flex justify-content-between">
                    <p>Experience: {years_of_experience} years</p>
                    <p>Recipe: {numbers_of_recipe}</p>
                    <p className="d-flex">
                      <FaThumbsUp
                        className="me-1"
                        style={{ fontSize: "1.3rem" }}
                      />
                      <span className="d-block">{likes}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default ChefBanner;
