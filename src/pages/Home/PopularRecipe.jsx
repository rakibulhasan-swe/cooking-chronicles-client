import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import biriyani from "../../assets/biriyani.jpeg";
import cake from "../../assets/cake.jpg";
import chickenKorma from "../../assets/chicken-korma.jpeg";
import beefBhuna from "../../assets/beef-bhuna.jpg";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

const PopularRecipe = () => {
  return (
    <>
      <Container className="py-5">
        <div className="text-center">
          <h2 className="fw-bold">Most Popular Recipes</h2>
          <p className="py-2 fw-light">
            Develop recipes and determine how to present dishes. Plan menus and
            ensure the quality of meals. Inspect supplies, equipment, and work
            areas for cleanliness and functionality.
          </p>
        </div>
        <Row className="g-4 pt-5">
          <div className="col-md-6 col-lg-3">
            <Card className="border-0 shadow-lg">
              <Card.Img
                style={{ height: "18rem", objectFit: "cover" }}
                className="img-fluid"
                variant="top"
                src={cake}
              />
              <Card.Body>
                <Card.Title className="fw-semibold">Chocolate Cake</Card.Title>
                <Card.Text>Chef: Eva Chan</Card.Text>
                <div>
                  <Rating
                    readOnly
                    style={{ maxWidth: "7rem" }}
                    value={4.7}
                  />
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 col-lg-3">
            <Card className="border-0 shadow-lg">
              <Card.Img
                style={{ height: "18rem", objectFit: "cover" }}
                className="img-fluid"
                variant="top"
                src={biriyani}
              />
              <Card.Body>
                <Card.Title className="fw-semibold">Biriyani</Card.Title>
                <Card.Text>Chef: Eva Chan</Card.Text>
                <div>
                  <Rating
                    readOnly
                    style={{ maxWidth: "7rem" }}
                    value={4.7}
                  />
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 col-lg-3">
            <Card className="border-0 shadow-lg">
              <Card.Img
                style={{ height: "18rem", objectFit: "cover" }}
                className="img-fluid"
                variant="top"
                src={beefBhuna}
              />
              <Card.Body>
                <Card.Title className="fw-semibold">Beef Bhuna</Card.Title>
                <Card.Text>Chef: Eva Chan</Card.Text>
                <div>
                  <Rating
                    readOnly
                    style={{ maxWidth: "7rem" }}
                    value={4.7}
                  />
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 col-lg-3">
            <Card className="border-0 shadow-lg">
              <Card.Img
                style={{ height: "18rem", objectFit: "cover" }}
                className="img-fluid"
                variant="top"
                src={chickenKorma}
              />
              <Card.Body>
                <Card.Title className="fw-semibold">Chicken Korma</Card.Title>
                <Card.Text>Chef: Eva Chan</Card.Text>
                <div>
                  <Rating
                    readOnly
                    style={{ maxWidth: "7rem" }}
                    value={4.8}
                  />
                </div>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default PopularRecipe;
