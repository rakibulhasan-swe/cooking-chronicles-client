import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import { Spinner } from "react-bootstrap";

const ChefSection = () => {
  const [chef, setChef] = useState([]);
  const [loader, setLoader] = useState(true);

  // data load from server
  useEffect(() => {
    fetch(
      "https://cooking-chronicles-server-rakibhasan-programmer.vercel.app/chef"
    )
      .then((res) => res.json())
      .then((data) => {
        setChef(data);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container py-5 mt-5">
        <div className="text-center">
          <h2 className="fw-bold">Here is our Best Chef's</h2>
          <p className="py-2 fw-light">
            Develop recipes and determine how to present dishes. Plan menus and
            ensure the quality of meals. Inspect supplies, equipment, and work
            areas for cleanliness and functionality.
          </p>
        </div>
        {loader ? (
          <div className="text-center pt-4">
            <Spinner variant="primary"></Spinner>
          </div>
        ) : (
          <div className="row pt-3 g-4">
            {chef.map((ch) => (
              <ChefCard key={ch.id} chefData={ch} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ChefSection;
