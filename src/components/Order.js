import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import siteLogo from "../assets/images/site-logo.png";
import { logOut } from "../redux/user/UserActions";
import { removeLocalstorageItem } from "../utils/functions";
import orderIcon from "../assets/images/order-placed.png";

const Order = (props) => {
  const handleHomeButton = () => {
    localStorage.removeItem("foodItems");
    props.history.push("/");
  };

  const orderList = JSON.parse(localStorage.getItem("foodItems"));

  const price = orderList
    .map((doc) => doc.total_price)
    .reduce((total, value) => {
      return total + value;
    });

  return (
    <div className="Order">
      <div className="order-wrapper">
        <div className="order-container">
          {orderList &&
            orderList.map((doc) => {
              return (
                <div className="order-items">
                  <div className="item-name">
                    <span>{doc.name}</span>
                  </div>
                  <div className="quantity">
                    <span>{doc.quantity}</span>
                  </div>
                  <div className="cost">
                    <span>Rs {doc.total_price}</span>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="wrapper">
          <div className="status-container">
            <img src={orderIcon} />
          </div>
          <div className="btn-container">
            <div className="total-amount">
              <span>Rs {price}</span>
            </div>
            <button onClick={handleHomeButton} className="btn-home">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
