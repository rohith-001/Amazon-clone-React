import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from './Login';
import { auth } from './firebase'
import { useStateValue } from "./StateProvider";
import Payment from "./Payment"
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import Orders from './Orders'

const promise = loadStripe('pk_test_51HblAUFSxT0HvxHav8OErOK2dnEDL5fYbFdgMso3R9gkbMGjKN0yW4pxXUvNsN1zALxJBCuWW30NshOlPXIm7OwU00KBO35MLM')

function App() {
  // eslint-disable-next-line no-unused-vars
  const [{basket}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
         // the user just logged out
         dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [dispatch])

  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
        <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
