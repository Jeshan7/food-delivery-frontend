import React, { useEffect } from "react";
import "./App.css";
// import Routes from './routes';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../src/containers/Homepage";
import Login from "../src/components/Login";
import Register from "../src/components/Register";
// import { connect } from 'react-redux';
import AuthenticationPage from "./components/Authentication_Page";
import SearchContainer from "./containers/SearchContainer";
import RestaurantContainer from "./containers/RestaurantContainer";
import { useDispatch } from "react-redux";
import { signIn } from "./redux/user/UserActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userEmail = localStorage.getItem("userEmail");
    const userName = localStorage.getItem("userName");
    if (userEmail && token && userName) {
      const currentUser = {
        name: userName,
        email: userEmail,
      };
      dispatch(signIn(currentUser));
    }
  });

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/login" component={AuthenticationPage} />
          <Route path="/register" component={AuthenticationPage} />
          <Route path="/restaurants" component={SearchContainer} />
          <Route
            path="/restaurant/:restaurant_id"
            component={RestaurantContainer}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
