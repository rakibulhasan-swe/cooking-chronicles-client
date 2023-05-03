import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";

const ChefSection = () => {
  const [chef, setChef] = useState([]);

  // data load from server
  useEffect(() => {
    fetch(
      "https://cooking-chronicles-server-rakibhasan-programmer.vercel.app/chef"
    )
      .then((res) => res.json())
      .then((data) => setChef(data))
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
        <div className="row pt-3 g-4">
          {chef.map((ch) => (
            <ChefCard key={ch.id} chefData={ch} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ChefSection;
