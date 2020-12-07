import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { auth } from './firebase';
import { useStateValue } from './contextAPI/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login'
import Checkout from './components/Checkout/Checkout';
import Payment from './components/Payment/Payment';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Prime from './components/Prime/Prime';
import Orders from './components/Orders/Orders';

const promise = loadStripe('pk_test_51Ho1KODp1q75VMGVIej6B8V6ymRCQx5yqbEVkeIYG1zJPXNiIGnqf8v62lU8LqhAbarqvPMFJ7itUUzBctH86wHU005rxhG6Ll');

function App() {

  const [{user, basket}, dispatch] = useStateValue();


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    
    //eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/prime">
            <Prime />
          </Route>
          <Route path="/payment">
            {basket?.length > 0 ? (
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
                ) : 
                <PageNotFound />
            }
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <PageNotFound />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
