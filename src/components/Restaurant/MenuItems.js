import React, { useState } from "react";
import "../../assets/css/Homepage.scss";
import vegIcon from "../../assets/images/veg-icon.png";
import nonVegIcon from "../../assets/images/non-veg-icon.png";

const MenuItems = (props) => {
  const [quantity, setQuantity] = useState(0);
  const handleQuantityValue = (e) => {
    setQuantity(e.target.value);
    console.log("sasad", quantity);
  };
  const setQuantityValue = (option) => {
    if (option === "remove") {
      setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="MenuItems">
      <div className="food-category-container">
        <div className="food-category">
          <img src={nonVegIcon} />
        </div>
      </div>
      <div className="food-name-container">
        <div className="food-name">
          <span>Chicken briyani</span>
        </div>
      </div>
      <div className="food-quantity-container">
        <div className="food-quantity">
          <div className="btn-minus" onClick={() => setQuantityValue("remove")}>
            <span>-</span>
          </div>
          <div className="input-quantity">
            <input
              type="text"
              onChange={handleQuantityValue}
              value={quantity}
            />
          </div>
          <div className="btn-plus" onClick={() => setQuantityValue("add")}>
            <span>+</span>
          </div>
        </div>
      </div>
      <div className="add-to-cart-container">
        <div className="add-to-cart">
          <span>Add to cart</span>
        </div>
      </div>
      {/* <ul>
        {props.menuItems &&
          props.menuItems.foodItems.map((foodItem) => {
            return <li key={foodItem._id}> {foodItem.name}</li>;
          })}
      </ul> */}
    </div>
  );
};

export default MenuItems;
