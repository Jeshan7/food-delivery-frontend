import React from "react";
import Image1 from "../assets/images/image-d1.jpg";
import Image2 from "../assets/images/image-d2.jpg";
import Image3 from "../assets/images/image-d3.jpg";
import Image4 from "../assets/images/homepage.jpg";

const Description = () => {
  return (
    <div className="description">
      <div className="description-container">
        <div className="top-container">
          <div className="right-container">
            <img src={Image1} />
            <div className="description-text">
              <span>To eat is human, to digest, divine.</span>
            </div>
          </div>
          <div className="left-container">
            <img src={Image2} />
            <div className="description-text">
              <span>
                If you combine good flavors, food turns into an orchestra.
              </span>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <div className="right-container">
            <img src={Image3} />
            <div className="description-text">
              <span>
                Money won’t be able to buy happiness, but it can get you this
                delicious meal instead.
              </span>
            </div>
          </div>
          <div className="left-container">
            <img src={Image4} />
            <div className="description-text">
              <span>
                After a good dinner one can forgive anybody, even one's own
                relations.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;

// To eat is human, to digest, divine.
// If you combine good flavors, food turns into an orchestra.
// You can't just eat good food. You've got to talk about it too.
// And you've got to talk about it to somebody who understands that kind of food.
// Money won’t be able to buy happiness, but it can get you this delicious meal instead.
