import React from "react";
import "../../assets/css/Homepage.scss";
import MenuItems from "./MenuItems";

const Menu = (props) => {
  return (
    <div className="Menu">
      <div className="menu-container">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 1, 1, 1, 1, 1, 1, 1].map((item) => {
          return <MenuItems />;
        })}
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

export default Menu;
