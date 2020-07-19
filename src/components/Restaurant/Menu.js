import React from "react";
import "../../assets/css/Homepage.scss";
import MenuItems from "./MenuItems";

const Menu = (props) => {
  return (
    <div className="Menu">
      <div className="menu-container">
        {props.menuItems &&
          props.menuItems.foodItems.map((item, index) => {
            return <MenuItems key={index} id={index} foodItem={item} />;
          })}
      </div>
    </div>
  );
};

export default Menu;
