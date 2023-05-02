import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import toast from 'react-hot-toast';

const ChefRecipeCard = ({ recipe }) => {
  const [favourite, setFavourite] = useState(false);
  const { recipe_name, ingredients, cooking_method, rating } = recipe;

  // handle favourite
  const handleFavourite = () => {
    setFavourite(true);
    toast.success("Added to favourite");
  }
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <Card className="border-0 shadow-lg p-3">
          <Card.Body>
            <Card.Title className="fw-semibold">{recipe_name}</Card.Title>
            <div className="py-3">
              <span className="d-block fw-semibold fs-6 pb-1">
                Ingredients:
              </span>
              {ingredients.slice(0, 7).map((item, index) => (
                <span className="" key={index}>
                  {item},{" "}
                </span>
              ))}
            </div>
            <Card.Text className="fw-light">
              <span className="d-block fw-semibold fs-6 pb-1">
                Cooking Method:
              </span>
              {cooking_method.slice(0, 80)}...
            </Card.Text>
            <div className="pb-3 d-flex">
              <Rating readOnly style={{ maxWidth: "7rem" }} value={rating} />
              <span className="d-block">{rating}</span>
            </div>
            <Link>
              <Button variant="primary" className={favourite && "disabled"} onClick={handleFavourite}>Favourite</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ChefRecipeCard;
