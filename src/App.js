import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "firebase";
import { Unsubscribe } from "@material-ui/icons";

export default function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  console.log(user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="*">
            <h1>404 page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
