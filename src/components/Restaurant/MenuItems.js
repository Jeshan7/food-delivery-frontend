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

  const handleCart = (item, id) => {
    // localStorage.setItem("foodItems", JSON.stringify(foodItem));
    if (quantity > 0) {
      const total_price = quantity * item.unit_price;
      const foodItem = {
        name: item.name,
        total_price,
        quantity,
      };
      if (localStorage.getItem(`foodItems`)) {
        const foodItems = localStorage.getItem(`foodItems`);
        const itemArray = JSON.parse(foodItems);
        const orderList = itemArray.filter((doc) => {
          return doc.name !== foodItem.name;
        });
        orderList.push(foodItem);
        localStorage.setItem("itemCount", orderList.length);
        localStorage.setItem("foodItems", JSON.stringify(orderList));
      } else {
        const y = [foodItem];
        // const r = y.push(foodItem);
        // console.log(foodItem);
        localStorage.setItem("foodItems", JSON.stringify(y));
      }
    }
  };

  return (
    <div className="MenuItems">
      <div className="food-category-container">
        <div className="food-category">
          {props.foodItem.dish_type === "non-veg" ? (
            <img src={nonVegIcon} />
          ) : (
            <img src={vegIcon} />
          )}
        </div>
      </div>
      <div className="food-name-container">
        <div className="food-name">
          <span>{props.foodItem.name}</span>
        </div>
      </div>
      <div className="food-rate-container">
        <div className="food-rate">
          <span>Rs {props.foodItem.unit_price}</span>
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
        <div
          className="add-to-cart"
          onClick={() => handleCart(props.foodItem, props.id)}
        >
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
