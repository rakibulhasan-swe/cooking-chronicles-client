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
          <Row>
            <Col>
              <Card className="border-0">
                <div>
                  <Card.Img
                    className="img-fluid"
                    variant="top"
                    style={{ height: "60vh", objectFit: "cover" }}
                    src={chef_img}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="fw-semibold">{chef_name}</Card.Title>
                  <Card.Text className="fw-light py-3">{desc}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center ">
                    <p>Experience: {years_of_experience}</p>
                    <p>Total Recipe: {numbers_of_recipe}</p>
                    <p className="d-flex">
                      <FaThumbsUp
                        className="me-1"
                        style={{ fontSize: "1.3rem" }}
                      />
                      <span className="d-block">{likes}</span>
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ChefBanner;
